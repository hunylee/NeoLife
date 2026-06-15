import { allPages } from "@/lib/pages-config";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const page = allPages.find((p) => p.id === parseInt(id));

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-slate-950/80 backdrop-blur border-b border-slate-800 px-8 py-4">
        <div className="flex items-center justify-between max-w-5xl mx-auto w-full">
          <h2 className="text-sm font-medium text-slate-400 uppercase tracking-widest">
            {page.title}
          </h2>
          <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-tighter">
            Page {page.id} / 20
          </div>
        </div>
      </header>

      {/* Content Area */}
      <main className="flex-1 flex items-center justify-center p-8 md:p-16">
        <div className="max-w-4xl w-full bg-slate-90                group relative min-h-[60vh] flex items-center justify-center p-12 text-center overflow-hidden rounded-2xl border border-slate-800 shadow-2xl">
          <div className="space-y-6 relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              {page.title}
            </h3>
            <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full opacity-50" />
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {page.content}
            </p>
          </div>

          {/* Background effects */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/5 to-transparent opacity-50" />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        </div>
       </main>

      {/* Footer */}
      <footer className="p-8 text-center text-slate-600 text-xs">
        © 2026 NeoLife AI Investment Group. All rights reserved.
      </footer>
    </div>
  );
}
