import { createClient } from "@/utils/supabase/server";
import SettingsForm from "./SettingsForm";

export default async function SettingsPage() {
  const supabase = await createClient();

  const { data: setting } = await supabase
    .from("site_settings")
    .select("*")
    .eq("id", "currently_building")
    .single();

  const initialData = setting?.value || { active: false, title: "", link: "" };

  return (
    <div className="p-10 max-w-3xl">
      <div className="mb-10">
        <h1 className="text-3xl font-display font-bold text-white mb-2">Settings</h1>
        <p className="text-[#888]">Manage global site configuration.</p>
      </div>

      <div className="bg-[#080808] border border-[#1a1a1a] rounded-2xl overflow-hidden shadow-xl">
        <div className="p-6 border-b border-[#1a1a1a] bg-[#0d0d0d]">
          <h2 className="text-lg font-bold text-white mb-1">Currently Building Widget</h2>
          <p className="text-sm text-[#777]">Control the live status widget that appears on the bottom right of the site.</p>
        </div>
        
        <div className="p-6">
          <SettingsForm initialData={initialData} />
        </div>
      </div>
    </div>
  );
}
