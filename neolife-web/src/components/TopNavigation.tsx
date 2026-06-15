"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { pagesConfig } from "@/lib/pages-config";
import { ChevronDown, FileText } from "lucide-react";
import { useState } from "react";

export default function TopNavigation() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-blue-600">
                NeoLife AI
              </span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
                Investment Deck
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {pagesConfig.map((category) => (
              <div
                key={category.name}
                className="relative"
                onMouseEnter={() => setActiveMenu(category.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center gap-1 h-16 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-wider">
                  {category.name}
                  <ChevronDown className="w-4 h-4 opacity-50" />
                </button>

                {/* Dropdown */}
                {activeMenu === category.name && (
                  <div className="absolute left-0 top-16 w-64 bg-white border border-slate-200 rounded-b-lg shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="py-2">
                      {category.pages.map((page) => {
                        const isActive = pathname === `/page/${page.id}`;
                        return (
                          <Link
                            key={page.id}
                            href={`/page/${page.id}`}
                            onClick={() => setActiveMenu(null)}
                            className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                              isActive
                                ? "bg-blue-50 text-blue-700 font-medium"
                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            }`}
                          >
                            <FileText className="w-4 h-4 opacity-50" />
                            <span className="truncate">{page.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
