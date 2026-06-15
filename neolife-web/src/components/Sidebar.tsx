"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { pagesConfig } from "@/lib/pages-config";
import { ChevronRight, FileText } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-slate-900 text-slate-100 overflow-y-auto border-r border-slate-800 flex flex-col">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-xl font-bold tracking-tight text-blue-400">NeoLife AI</h1>
        <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">Investment Deck</p>
      </div>

      <nav className="flex-1 p-4 space-y-6">
        {pagesConfig.map((category) => (
          <div key={category.name} className="space-y-2">
            <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2">
              {category.name}
            </h2>
            <div className="space-y-1">
              {category.pages.map((page) => {
                const isActive = pathname === `/page/${page.id}`;
                return (
                  <Link
                    key={page.id}
                    href={`/page/${page.id}`}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                      isActive 
                        ? "bg-blue-600/20 text-blue-400 font-medium" 
                        : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
                    }`}
                  >
                    <FileText className="w-4 h-4 opacity-70" />
                    <span className="truncate">{page.title}</span>
                    {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800 text-[10px] text-slate-600">
        v2026.1 Build
      </div>
    </div>
  );
}
