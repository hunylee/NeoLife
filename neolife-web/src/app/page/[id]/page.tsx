import { allPages, pagesConfig } from "@/lib/pages-config";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Zap, TrendingUp, ShieldCheck, Target, CheckCircle2 } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);
  const page = allPages.find((p) => p.id === id);

  if (!page || isNaN(id)) {
    notFound();
  }

  const category = pagesConfig.find(c => c.pages.some(p => p.id === id));
  const categoryName = category?.name || "Overview";
  const categoryNameClean = categoryName.replace(/^\d+\.\s*/, '').toLowerCase();
  const imagePath = `/images/${categoryNameClean}.png`;

  // Parse content to create visual cards
  const lines = page.content.split("\n").filter(line => line.trim().length > 0);
  
  // Icon rotation
  const icons = [Zap, TrendingUp, ShieldCheck, Target, CheckCircle2];

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col bg-slate-50 text-slate-900 pb-20">
      
      {/* Hero Section with Image */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden bg-slate-900 flex items-center justify-center">
        <Image
          src={imagePath}
          alt={`${categoryName} background`}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 backdrop-blur border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            {categoryName} • Page {page.id} / 20
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-2xl leading-tight">
            {page.title}
          </h1>
        </div>
      </div>

      {/* Visualized Content Area (No Pagination) */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 md:p-8 -mt-16 relative z-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lines.map((line, index) => {
            const IconComponent = icons[index % icons.length];
            // Identify if the line is a sub-header (e.g. starts with numbers or bold terms usually short)
            const isHeaderLike = line.length < 50 && !line.includes(".");

            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-xl border border-slate-100 p-8 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ${
                  lines.length === 1 || (index === 0 && isHeaderLike) ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100 text-blue-600">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className={`text-slate-700 leading-relaxed ${isHeaderLike ? "text-xl font-bold text-slate-900" : "text-base md:text-lg"}`}>
                      {line}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </main>

    </div>
  );
}
