import { ReactNode } from "react";
import Link from "next/link";
import { LayoutDashboard, Users, FolderOpen, Settings, LogOut } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // If not logged in, they wouldn't hit this due to middleware, but just in case
  if (!user) {
    redirect('/admin/login');
  }

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Leads", href: "/admin/leads", icon: Users },
    { name: "Case Studies", href: "/admin/case-studies", icon: FolderOpen },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#030303] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#080808] border-r border-[#1a1a1a] flex flex-col">
        <div className="p-6 border-b border-[#1a1a1a]">
          <Link href="/" className="inline-block">
            <span className="font-display font-bold text-xl tracking-tighter text-white">
              <span className="text-[#DC143C]">JEN</span>WIN.
            </span>
          </Link>
          <div className="mt-1 flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-[10px] font-mono text-[#777] uppercase tracking-widest">Admin Online</span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#888] rounded-lg hover:bg-[#111] hover:text-white transition-colors"
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-[#1a1a1a]">
          <form action="/auth/signout" method="post">
            <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-red-500/80 rounded-lg hover:bg-red-500/10 hover:text-red-500 transition-colors">
              <LogOut size={18} />
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
