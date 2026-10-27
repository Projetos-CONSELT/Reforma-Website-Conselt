import { execSync } from "child_process";

try {
  // Executa o script python com Pillow
  execSync("python scripts/optimize_images.py", { stdio: "inherit" });
} catch (err) {
  // Se python não estiver disponível no PATH, tenta python3
  try {
    execSync("python3 scripts/optimize_images.py", { stdio: "inherit" });
  } catch (err2) {
    console.warn("Aviso: Python com Pillow não encontrado no ambiente. As imagens existentes já otimizadas no repositório serão utilizadas.");
  }
}
