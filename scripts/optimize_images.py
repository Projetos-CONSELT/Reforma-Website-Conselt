import os
import glob
from PIL import Image, ImageOps

# Desativa limite de descompressão para arquivos confiáveis do projeto
Image.MAX_IMAGE_PIXELS = None

IMAGE_EXTENSIONS = (".jpg", ".jpeg", ".png", ".webp")

def should_process(source_path, target_webp_path):
    """
    Retorna True se o arquivo precisa ser processado:
    - Se a versão WebP não existir
    - Se o arquivo fonte for mais novo que a versão WebP
    """
    if not os.path.exists(target_webp_path):
        return True
    return os.path.getmtime(source_path) > os.path.getmtime(target_webp_path)

def optimize_file(path, is_member=True):
    ext = os.path.splitext(path)[1].lower()
    if ext == ".webp":
        return
    
    webp_path = os.path.splitext(path)[0] + ".webp"
    
    # Se o WebP existe e o arquivo não foi alterado recentemente, pula
    if not should_process(path, webp_path):
        return

    orig_size = os.path.getsize(path)
    
    try:
        with Image.open(path) as img:
            # 1. Normalizar orientação EXIF (evita fotos de celular deitadas)
            img = ImageOps.exif_transpose(img)
            
            # 2. Converter cores
            has_alpha = img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info)
            if not has_alpha and img.mode != "RGB":
                img = img.convert("RGB")
            
            w, h = img.size
            
            # 3. Limite Full HD (1080x1920 retrato, 1920x1080 paisagem)
            is_portrait = h >= w
            max_w, max_h = (1080, 1920) if is_portrait else (1920, 1080)
            
            resized = False
            if w > max_w or h > max_h:
                img.thumbnail((max_w, max_h), Image.Resampling.LANCZOS)
                resized = True
                new_w, new_h = img.size
                resize_info = f"{w}x{h} -> {new_w}x{new_h}"
            else:
                resize_info = f"{w}x{h} (ok)"
            
            # 4. Salvar WebP ultra leve
            img.save(webp_path, format="WEBP", quality=82, method=6)
            webp_size = os.path.getsize(webp_path)
            
            # 5. Otimizar arquivo original (JPG/PNG) se foi redimensionado ou se ainda não é progressivo
            if ext in (".jpg", ".jpeg"):
                img_rgb = img.convert("RGB") if img.mode != "RGB" else img
                img_rgb.save(path, format="JPEG", quality=85, optimize=True, progressive=True)
            elif ext == ".png":
                img.save(path, format="PNG", optimize=True)
            
            new_size = os.path.getsize(path)
            print(f"[OK] {os.path.basename(path)}: {resize_info} | Orig: {orig_size/1024:.0f}KB -> Otimizado: {new_size/1024:.0f}KB | WebP: {webp_size/1024:.0f}KB")
    except Exception as e:
        print(f"[ERRO] Falha ao processar {path}: {e}")

def optimize_membros():
    membros_dir = os.path.join("public", "images", "membros")
    if not os.path.exists(membros_dir):
        return
    
    files = [f for f in glob.glob(os.path.join(membros_dir, "*")) if os.path.splitext(f)[1].lower() in (".jpg", ".jpeg", ".png")]
    print(f"Verificando {len(files)} imagens de membros em {membros_dir}...")
    for path in sorted(files):
        optimize_file(path, is_member=True)

def optimize_equipe():
    equipe_dir = os.path.join("public", "images", "equipe")
    if not os.path.exists(equipe_dir):
        return
    files = [f for f in glob.glob(os.path.join(equipe_dir, "*")) if os.path.splitext(f)[1].lower() in (".jpg", ".jpeg", ".png")]
    for path in sorted(files):
        optimize_file(path, is_member=False)

def optimize_textura():
    tex_dir = os.path.join("public", "textura")
    if not os.path.exists(tex_dir):
        return
    files = [f for f in glob.glob(os.path.join(tex_dir, "*")) if os.path.splitext(f)[1].lower() in (".jpg", ".jpeg", ".png")]
    for path in sorted(files):
        optimize_file(path, is_member=False)

if __name__ == "__main__":
    print("=== Otimizador Automático de Imagens CONSELT ===")
    optimize_membros()
    optimize_equipe()
    optimize_textura()
    print("=== Concluído com sucesso ===")
