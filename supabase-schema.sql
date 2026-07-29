-- Copy and paste this into the Supabase SQL Editor

-- 1. Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  project_name text,
  project_type text,
  timeline text,
  budget text,
  challenge text,
  status text DEFAULT 'New'
);

-- 2. Create case_studies table
CREATE TABLE IF NOT EXISTS case_studies (
  slug text PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  title text NOT NULL,
  tagline text NOT NULL,
  type text NOT NULL,
  accent text NOT NULL,
  bg_gradient text NOT NULL,
  context text,
  problem text,
  approach text,
  execution text,
  outcome text,
  metrics jsonb, -- Array of objects: [{value: "6 wks", label: "Time"}]
  stack jsonb, -- Array of strings: ["Next.js", "React"]
  role jsonb, -- Array of strings: ["Design", "Dev"]
  hero_image text,
  testimonial jsonb, -- Object: {quote: "...", author: "...", role: "...", avatar: "..."}
  label text,
  published boolean DEFAULT false
);

-- 3. Create settings table for the "Currently Building" widget
CREATE TABLE IF NOT EXISTS site_settings (
  id text PRIMARY KEY, -- e.g., 'currently_building'
  value jsonb -- e.g., { "active": true, "title": "FinTrack Dashboard", "link": "/work/fintrack-dashboard" }
);

-- Insert default setting for the widget (only if it doesn't exist)
INSERT INTO site_settings (id, value) 
VALUES ('currently_building', '{"active": true, "title": "FinTrack Dashboard", "link": "/work/fintrack-dashboard"}'::jsonb)
ON CONFLICT (id) DO NOTHING;

-- Set up Row Level Security (RLS)
-- Allow anyone to insert leads
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Anyone can insert leads" ON leads;
CREATE POLICY "Anyone can insert leads" ON leads FOR INSERT WITH CHECK (true);

-- Allow admins full access to leads
DROP POLICY IF EXISTS "Admins have full access to leads" ON leads;
CREATE POLICY "Admins have full access to leads" ON leads FOR ALL USING (auth.role() = 'authenticated');

-- Allow anyone to read published case studies
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Anyone can read published case studies" ON case_studies;
CREATE POLICY "Anyone can read published case studies" ON case_studies FOR SELECT USING (published = true);

-- Allow admins full access to case studies
DROP POLICY IF EXISTS "Admins have full access to case studies" ON case_studies;
CREATE POLICY "Admins have full access to case studies" ON case_studies FOR ALL USING (auth.role() = 'authenticated');

-- Allow anyone to read site settings
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Anyone can read site settings" ON site_settings;
CREATE POLICY "Anyone can read site settings" ON site_settings FOR SELECT USING (true);

-- Allow admins full access to site settings
DROP POLICY IF EXISTS "Admins have full access to site settings" ON site_settings;
CREATE POLICY "Admins have full access to site settings" ON site_settings FOR ALL USING (auth.role() = 'authenticated');
