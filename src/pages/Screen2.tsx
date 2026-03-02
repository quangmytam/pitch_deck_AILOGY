export default function Screen2() {
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 flex flex-col gap-10">
      {/* Header Section */}
      <header className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-primary-light mb-2">
          <span className="material-symbols-outlined text-sm">hub</span>
          <span className="text-xs font-bold tracking-widest uppercase">Infrastructure</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">The AILOGY Intelligence Platform</h1>
        <p className="text-slate-500 dark:text-text-secondary text-lg max-w-2xl">
          Our vertically integrated infrastructure is designed for high-stakes government and enterprise environments, ensuring security, scalability, and sovereignty.
        </p>
      </header>

      {/* Architecture Layers (4-layer stack) */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Architecture Layers</h2>
          <div className="hidden md:flex items-center gap-2 text-slate-500 dark:text-text-secondary text-sm">
            <span className="w-2 h-2 rounded-full bg-accent-success animate-pulse"></span>
            Live System Status: Operational
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="group relative flex flex-col gap-4 rounded-xl border border-border-dark bg-white dark:bg-surface-dark p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-6xl font-black text-slate-900 dark:text-white">01</span>
            </div>
            <div className="h-12 w-12 rounded-lg bg-surface-border/50 flex items-center justify-center text-primary-light group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">dataset</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Data Standardization</h3>
              <p className="text-slate-500 dark:text-text-secondary text-sm leading-relaxed">Unified ingestion pipeline capable of processing petabytes of unstructured enterprise data in real-time.</p>
            </div>
            <div className="mt-auto pt-4 border-t border-surface-border/50 flex items-center gap-2 text-xs text-primary-light font-mono">
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
              <span>Ingest & Clean</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative flex flex-col gap-4 rounded-xl border border-border-dark bg-white dark:bg-surface-dark p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-6xl font-black text-slate-900 dark:text-white">02</span>
            </div>
            <div className="h-12 w-12 rounded-lg bg-surface-border/50 flex items-center justify-center text-primary-light group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">psychology</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">AI Modeling</h3>
              <p className="text-slate-500 dark:text-text-secondary text-sm leading-relaxed">Proprietary transformer models fine-tuned for specialized sectors, reducing hallucination rates by 99%.</p>
            </div>
            <div className="mt-auto pt-4 border-t border-surface-border/50 flex items-center gap-2 text-xs text-primary-light font-mono">
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
              <span>Train & Tune</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative flex flex-col gap-4 rounded-xl border border-border-dark bg-white dark:bg-surface-dark p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-6xl font-black text-slate-900 dark:text-white">03</span>
            </div>
            <div className="h-12 w-12 rounded-lg bg-surface-border/50 flex items-center justify-center text-primary-light group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">lightbulb</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Decision Intelligence</h3>
              <p className="text-slate-500 dark:text-text-secondary text-sm leading-relaxed">Actionable insights engine with explainable AI outputs, allowing for audit trails on every decision made.</p>
            </div>
            <div className="mt-auto pt-4 border-t border-surface-border/50 flex items-center gap-2 text-xs text-primary-light font-mono">
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
              <span>Analyze & Predict</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative flex flex-col gap-4 rounded-xl border border-border-dark bg-white dark:bg-surface-dark p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-6xl font-black text-slate-900 dark:text-white">04</span>
            </div>
            <div className="h-12 w-12 rounded-lg bg-surface-border/50 flex items-center justify-center text-primary-light group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">dns</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Enterprise Deployment</h3>
              <p className="text-slate-500 dark:text-text-secondary text-sm leading-relaxed">Air-gapped or hybrid cloud deployment options designed for maximum security and data sovereignty.</p>
            </div>
            <div className="mt-auto pt-4 border-t border-surface-border/50 flex items-center gap-2 text-xs text-primary-light font-mono">
              <span className="material-symbols-outlined text-sm">check_circle</span>
              <span>Deploy & Scale</span>
            </div>
          </div>
        </div>
      </section>

      {/* Market Dynamics */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Market Dynamics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* TAM */}
          <div className="rounded-xl border border-surface-border bg-gradient-to-br from-surface-dark to-background-dark p-8 flex flex-col justify-between min-h-[200px]">
            <div className="flex justify-between items-start">
              <h3 className="text-text-secondary font-medium text-sm uppercase tracking-wider">Total Addressable Market</h3>
              <span className="bg-surface-border/50 p-1.5 rounded text-white material-symbols-outlined text-sm">public</span>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl lg:text-5xl font-bold text-white tracking-tighter">$5.2B+</span>
                <span className="text-accent-success text-sm font-bold bg-accent-success/10 px-2 py-1 rounded">+12% YoY</span>
              </div>
              <p className="text-text-secondary text-sm mt-3">Global Enterprise AI Infrastructure spend projected by 2026.</p>
            </div>
          </div>

          {/* SAM */}
          <div className="rounded-xl border border-surface-border bg-gradient-to-br from-surface-dark to-background-dark p-8 flex flex-col justify-between min-h-[200px]">
            <div className="flex justify-between items-start">
              <h3 className="text-text-secondary font-medium text-sm uppercase tracking-wider">Serviceable Available Market</h3>
              <span className="bg-surface-border/50 p-1.5 rounded text-white material-symbols-outlined text-sm">domain</span>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl lg:text-5xl font-bold text-white tracking-tighter">$1.8B</span>
                <span className="text-accent-success text-sm font-bold bg-accent-success/10 px-2 py-1 rounded">+15% YoY</span>
              </div>
              <p className="text-text-secondary text-sm mt-3">Government and Highly Regulated Industries seeking on-prem AI.</p>
            </div>
          </div>

          {/* SOM */}
          <div className="rounded-xl border border-surface-border bg-gradient-to-br from-surface-dark to-background-dark p-8 flex flex-col justify-between min-h-[200px] relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full"></div>
            <div className="flex justify-between items-start relative z-10">
              <h3 className="text-text-secondary font-medium text-sm uppercase tracking-wider">Serviceable Obtainable Market</h3>
              <span className="bg-primary/20 p-1.5 rounded text-primary-light material-symbols-outlined text-sm">target</span>
            </div>
            <div className="relative z-10">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl lg:text-5xl font-bold text-white tracking-tighter">$450M</span>
                <span className="text-accent-success text-sm font-bold bg-accent-success/10 px-2 py-1 rounded">+22% YoY</span>
              </div>
              <p className="text-text-secondary text-sm mt-3">Immediate pipeline target for North American Defense & Finance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section className="flex flex-col gap-6 pb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Competitive Landscape</h2>
            <p className="text-slate-500 dark:text-text-secondary mt-1">Positioning against generic cloud providers and legacy analytics.</p>
          </div>
          <div className="flex gap-4 text-sm text-slate-500 dark:text-text-secondary">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(64,48,232,0.8)]"></div>
              <span className="text-slate-900 dark:text-white font-medium">AILOGY</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-500"></div>
              <span>Competitors</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-surface-border bg-white dark:bg-surface-dark p-6 md:p-10 relative overflow-hidden min-h-[500px] flex items-center justify-center">
          {/* Grid Lines */}
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
            <div className="border-b border-r border-surface-border/30 border-dashed"></div>
            <div className="border-b border-l border-surface-border/30 border-dashed"></div>
            <div className="border-t border-r border-surface-border/30 border-dashed"></div>
            <div className="border-t border-l border-surface-border/30 border-dashed"></div>
          </div>

          {/* Axis Labels */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500 dark:text-text-secondary tracking-widest uppercase bg-white dark:bg-surface-dark px-2">High Institutional Trust</div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500 dark:text-text-secondary tracking-widest uppercase bg-white dark:bg-surface-dark px-2">Low Institutional Trust</div>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-bold text-slate-500 dark:text-text-secondary tracking-widest uppercase bg-white dark:bg-surface-dark px-2">Generic Solution</div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-xs font-bold text-slate-500 dark:text-text-secondary tracking-widest uppercase bg-white dark:bg-surface-dark px-2">High AI Customization</div>

          {/* Quadrant Content */}
          <div className="relative w-full h-[400px] max-w-3xl">
            {/* AILOGY */}
            <div className="absolute top-[10%] right-[10%] flex flex-col items-center gap-2 z-20">
              <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm border-2 border-primary flex items-center justify-center shadow-[0_0_30px_rgba(64,48,232,0.4)] animate-pulse">
                <div className="w-4 h-4 rounded-full bg-primary"></div>
              </div>
              <span className="text-white font-bold bg-surface-dark/80 px-2 py-1 rounded backdrop-blur-md border border-surface-border">AILOGY</span>
            </div>

            {/* Competitors */}
            <div className="absolute top-[20%] left-[20%] flex flex-col items-center gap-2 opacity-60">
              <div className="w-8 h-8 rounded-full bg-surface-border flex items-center justify-center"></div>
              <span className="text-slate-500 dark:text-text-secondary text-xs">Legacy Gov Tech</span>
            </div>
            <div className="absolute bottom-[25%] right-[25%] flex flex-col items-center gap-2 opacity-60">
              <div className="w-6 h-6 rounded-full bg-surface-border flex items-center justify-center"></div>
              <span className="text-slate-500 dark:text-text-secondary text-xs">Open Source AI</span>
            </div>
            <div className="absolute bottom-[20%] left-[15%] flex flex-col items-center gap-2 opacity-60">
              <div className="w-10 h-10 rounded-full bg-surface-border flex items-center justify-center"></div>
              <span className="text-slate-500 dark:text-text-secondary text-xs">Public Cloud APIs</span>
            </div>
            <div className="absolute top-[45%] right-[40%] flex flex-col items-center gap-2 opacity-60">
              <div className="w-7 h-7 rounded-full bg-surface-border flex items-center justify-center"></div>
              <span className="text-slate-500 dark:text-text-secondary text-xs">Big Tech Ent.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
