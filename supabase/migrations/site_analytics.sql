-- Analytics de visitas do site.
-- Migration isolada: não altera nem apaga as tabelas existentes.

CREATE TABLE IF NOT EXISTS public.site_analytics (
    visit_id UUID PRIMARY KEY,
    session_id UUID NOT NULL,
    event_type TEXT NOT NULL DEFAULT 'page_view',
    page_path TEXT NOT NULL,
    page_title TEXT,
    referrer TEXT,
    started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    ended_at TIMESTAMPTZ,
    duration_seconds INTEGER NOT NULL DEFAULT 0 CHECK (duration_seconds >= 0),
    country TEXT,
    region TEXT,
    city TEXT,
    device_type TEXT,
    browser TEXT,
    language TEXT,
    screen_width INTEGER,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

GRANT SELECT ON TABLE public.site_analytics TO authenticated;

ALTER TABLE public.site_analytics ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "site_analytics_admin_read" ON public.site_analytics;
CREATE POLICY "site_analytics_admin_read"
    ON public.site_analytics FOR SELECT TO authenticated
    USING ((auth.jwt() ->> 'email') = 'projetos@conselt.com.br');

CREATE INDEX IF NOT EXISTS idx_site_analytics_started_at
    ON public.site_analytics (started_at DESC);

CREATE INDEX IF NOT EXISTS idx_site_analytics_page_path
    ON public.site_analytics (page_path);

NOTIFY pgrst, 'reload schema';
