import Link from "next/link";
import JenwinLogo from "@/components/ui/JenwinLogo";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Website Development", href: "/services#websites" },
    { label: "Web App Development", href: "/services#webapps" },
    { label: "MVP Development", href: "/services#mvp" },
    { label: "UI Engineering", href: "/services#ui" },
    { label: "AI Workflows", href: "/services#ai" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1e1e1e] bg-[#080808]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <JenwinLogo className="h-7 w-auto mb-5" />
            <p className="text-[#666666] text-sm leading-relaxed max-w-xs">
              Engineering, product thinking, and design discipline — built for founders who care about craft.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="mailto:hello@jenwin.com"
                className="text-sm text-[#888888] hover:text-[#D81B60] transition-colors duration-200 flex items-center gap-1"
              >
                hello@jenwin.com
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#555555] mb-5">
                {group}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#666666] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#141414] max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#444444]">
          © {year} Jenwin. All rights reserved.
        </p>
        <p className="text-xs text-[#333333]">
          Designed and built with precision.
        </p>
      </div>
    </footer>
  );
}
