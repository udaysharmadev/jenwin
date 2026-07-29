import { createClient } from "@/utils/supabase/server";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function CaseStudiesPage() {
  const supabase = await createClient();

  const { data: caseStudies } = await supabase
    .from("case_studies")
    .select("slug, title, type, published, created_at")
    .order("created_at", { ascending: false });

  return (
    <div className="p-10">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-display font-bold text-white mb-2">Case Studies</h1>
          <p className="text-[#888]">Manage your portfolio projects.</p>
        </div>
        <Link 
          href="/admin/case-studies/new"
          className="flex items-center gap-2 bg-[#DC143C] hover:bg-[#FF0040] text-white px-4 py-2.5 rounded-lg text-sm font-bold transition-colors"
        >
          <Plus size={16} />
          New Case Study
        </Link>
      </div>

      <div className="bg-[#080808] border border-[#1a1a1a] rounded-2xl overflow-hidden shadow-xl">
        {caseStudies && caseStudies.length > 0 ? (
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-[#111] border-b border-[#222]">
              <tr>
                <th className="px-6 py-4 font-mono text-[10px] uppercase text-[#777] tracking-wider">Title</th>
                <th className="px-6 py-4 font-mono text-[10px] uppercase text-[#777] tracking-wider">Type</th>
                <th className="px-6 py-4 font-mono text-[10px] uppercase text-[#777] tracking-wider">Status</th>
                <th className="px-6 py-4 font-mono text-[10px] uppercase text-[#777] tracking-wider">Date</th>
                <th className="px-6 py-4 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1a1a1a]">
              {caseStudies.map((cs) => (
                <tr key={cs.slug} className="hover:bg-[#0a0a0a] transition-colors group">
                  <td className="px-6 py-4 text-white font-bold">{cs.title}</td>
                  <td className="px-6 py-4 text-[#888]">{cs.type}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      cs.published ? 'bg-green-500/10 text-green-500' : 'bg-[#222] text-[#888]'
                    }`}>
                      {cs.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#555]">{new Date(cs.created_at).toLocaleDateString()}</td>
                  <td className="px-6 py-4 text-right">
                    <Link href={`/admin/case-studies/${cs.slug}`} className="text-[#DC143C] hover:text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-16 text-center">
            <p className="text-[#555] mb-2">No case studies in the database yet.</p>
            <p className="text-sm text-[#333]">Click "New Case Study" to add one, or run the migration script to copy existing ones.</p>
          </div>
        )}
      </div>
    </div>
  );
}
