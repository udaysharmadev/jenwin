export const dynamic = 'force-dynamic'

import { createClient } from "@/utils/supabase/server";

export default async function AdminDashboard() {
  const supabase = await createClient();

  // Fetch quick stats
  const { count: leadsCount } = await supabase
    .from("leads")
    .select("*", { count: "exact", head: true });

  const { count: caseStudiesCount } = await supabase
    .from("case_studies")
    .select("*", { count: "exact", head: true });

  const { data: recentLeads } = await supabase
    .from("leads")
    .select("id, name, project_type, created_at, status")
    .order("created_at", { ascending: false })
    .limit(5);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-display font-bold text-white mb-2">Overview</h1>
      <p className="text-[#888] mb-10">Welcome back to your command center.</p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-[#080808] border border-[#1a1a1a] rounded-2xl p-6 relative overflow-hidden group hover:border-[#333] transition-colors">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#DC143C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <p className="text-[10px] font-mono text-[#555] uppercase tracking-widest mb-2">Total Inquiries</p>
          <p className="text-4xl font-bold text-white">{leadsCount || 0}</p>
        </div>
        
        <div className="bg-[#080808] border border-[#1a1a1a] rounded-2xl p-6 relative overflow-hidden group hover:border-[#333] transition-colors">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#DC143C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <p className="text-[10px] font-mono text-[#555] uppercase tracking-widest mb-2">Published Case Studies</p>
          <p className="text-4xl font-bold text-white">{caseStudiesCount || 0}</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-display font-bold text-white mb-6">Recent Leads</h2>
        <div className="bg-[#080808] border border-[#1a1a1a] rounded-2xl overflow-hidden">
          {recentLeads && recentLeads.length > 0 ? (
            <table className="w-full text-left text-sm">
              <thead className="bg-[#111] border-b border-[#222]">
                <tr>
                  <th className="px-6 py-4 font-mono text-[10px] uppercase text-[#777] tracking-wider">Name</th>
                  <th className="px-6 py-4 font-mono text-[10px] uppercase text-[#777] tracking-wider">Project Type</th>
                  <th className="px-6 py-4 font-mono text-[10px] uppercase text-[#777] tracking-wider">Status</th>
                  <th className="px-6 py-4 font-mono text-[10px] uppercase text-[#777] tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1a1a1a]">
                {recentLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-[#0a0a0a] transition-colors">
                    <td className="px-6 py-4 text-white font-medium">{lead.name}</td>
                    <td className="px-6 py-4 text-[#888]">{lead.project_type}</td>
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
            <div className="p-10 text-center text-[#555]">
              No leads found yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
