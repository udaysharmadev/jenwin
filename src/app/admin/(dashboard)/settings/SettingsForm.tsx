"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Loader2, Check } from "lucide-react";

export default function SettingsForm({ initialData }: { initialData: any }) {
  const [active, setActive] = useState(initialData.active);
  const [title, setTitle] = useState(initialData.title);
  const [link, setLink] = useState(initialData.link);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const supabase = createClient();

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSaved(false);

    const { error } = await supabase
      .from("site_settings")
      .upsert({
        id: "currently_building",
        value: { active, title, link }
      });

    setLoading(false);
    if (!error) {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } else {
      alert("Error saving settings: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSave} className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setActive(!active)}
          className={`w-12 h-6 rounded-full transition-colors relative ${active ? 'bg-green-500' : 'bg-[#333]'}`}
        >
          <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${active ? 'left-7' : 'left-1'}`} />
        </button>
        <span className="text-sm font-medium text-[#ccc]">Enable Widget</span>
      </div>

      <div className={`transition-opacity ${active ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
        <label className="block text-[10px] font-mono text-[#555] uppercase tracking-widest mb-1.5 mt-4">
          Project Name
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-[#111] border border-[#222] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#DC143C]/50 transition-colors"
          placeholder="FinTrack Dashboard"
        />

        <label className="block text-[10px] font-mono text-[#555] uppercase tracking-widest mb-1.5 mt-4">
          Link URL
        </label>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full bg-[#111] border border-[#222] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#DC143C]/50 transition-colors"
          placeholder="/work/fintrack-dashboard"
        />
      </div>

      <div className="pt-4 border-t border-[#1a1a1a] mt-2 flex items-center justify-between">
        {saved ? (
          <span className="text-sm text-green-500 flex items-center gap-2">
            <Check size={16} /> Saved successfully
          </span>
        ) : <span />}
        
        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#DC143C] text-white text-sm font-bold rounded-lg hover:bg-[#FF0040] transition-colors disabled:opacity-50"
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : 'Save Changes'}
        </button>
      </div>
    </form>
  );
}
