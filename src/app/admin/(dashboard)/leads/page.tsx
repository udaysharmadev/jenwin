export const dynamic = 'force-dynamic'

import { createClient } from "@/utils/supabase/server";

export default async function LeadsPage() {
  const supabase = await createClient();

  const { data: leads } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="p-10">
      <div className="mb-10">
        <h1 className="text-3xl font-display font-bold text-white mb-2">Leads CRM</h1>
        <p className="text-[#888]">Manage project inquiries submitted via the site.</p>
      </div>

      <div className="bg-[#080808] border border-[#1a1a1a] rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          {leads && leads.length > 0 ? (
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-[#111] border-b border-[#222]">
                <tr>
                  <th className="px-6 py-4 font-mono text-[10px] uppercase text-[#777] tracking-wider">Name</th>
                  <th className="px-6 py-4 font-mono text-[10px] uppercase text-[#777] tracking-wider">Email</th>
                  <th className="px-6 py-4 font-mono text-[10px] uppercase text-[#777] tracking-wider">Project</th>
                  <th className="px-6 py-4 font-mono text-[10px] uppercase text-[#777] tracking-wider">Timeline</th>
                  <th className="px-6 py-4 font-mono text-[10px] uppercase text-[#777] tracking-wider">Budget</th>
                  <th className="px-6 py-4 font-mono text-[10px] uppercase text-[#777] tracking-wider">Status</th>
                  <th className="px-6 py-4 font-mono text-[10px] uppercase text-[#777] tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1a1a1a]">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-[#0a0a0a] transition-colors">
                    <td className="px-6 py-4 text-white font-bold">{lead.name}</td>
                    <td className="px-6 py-4 text-[#888]">
                      <a href={`mailto:${lead.email}`} className="hover:text-white transition-colors">{lead.email}</a>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-white">{lead.project_name || "N/A"}</div>
                      <div className="text-[#555] text-xs mt-0.5">{lead.project_type}</div>
                    </td>
                    <td className="px-6 py-4 text-[#888]">{lead.timeline}</td>
                    <td className="px-6 py-4 text-[#888]">{lead.budget}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        lead.status === 'New' ? 'bg-[#DC143C]/20 text-[#DC143C]' : 'bg-[#222] text-[#888]'
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[#555]">{new Date(lead.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-16 text-center">
              <p className="text-[#555] mb-2">No leads have come in yet.</p>
              <p className="text-sm text-[#333]">When someone fills out the Start a Project form, it will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
