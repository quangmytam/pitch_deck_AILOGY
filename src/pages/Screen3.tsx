export default function Screen3() {
  return (
    <div className="p-8 md:p-12 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-border-dark/30">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-accent-green/10 text-accent-green border border-accent-green/20">Live Data</span>
            <span className="text-slate-500 text-xs">Last updated: Today, 09:30 AM</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Financial Performance</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1 text-lg">Growth projections and unit economics breakdown.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-lg bg-surface-dark border border-border-dark text-slate-300 text-sm hover:text-white transition-colors">Q1 2026</button>
          <button className="px-4 py-2 rounded-lg bg-surface-dark border border-border-dark text-slate-300 text-sm hover:text-white transition-colors">Yearly</button>
        </div>
      </header>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="bg-white dark:bg-surface-dark rounded-xl p-5 border border-slate-200 dark:border-border-dark shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-4xl text-slate-900 dark:text-white">payments</span>
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Revenue (Q1 2026)</p>
            <h3 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">$2M</h3>
          </div>
          <div className="flex items-center gap-1 text-accent-green text-sm font-medium bg-accent-green/10 w-fit px-2 py-0.5 rounded">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            <span>+120% YoY</span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white dark:bg-surface-dark rounded-xl p-5 border border-slate-200 dark:border-border-dark shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-4xl text-slate-900 dark:text-white">query_stats</span>
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Gross Margin</p>
            <h3 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">78%</h3>
          </div>
          <div className="flex items-center gap-1 text-accent-green text-sm font-medium bg-accent-green/10 w-fit px-2 py-0.5 rounded">
            <span className="material-symbols-outlined text-sm">arrow_upward</span>
            <span>+5% QoQ</span>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white dark:bg-surface-dark rounded-xl p-5 border border-slate-200 dark:border-border-dark shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-4xl text-slate-900 dark:text-white">account_balance_wallet</span>
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Operating Cost</p>
            <h3 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">$500K</h3>
          </div>
          <div className="flex items-center gap-1 text-accent-orange text-sm font-medium bg-accent-orange/10 w-fit px-2 py-0.5 rounded">
            <span className="material-symbols-outlined text-sm">trending_down</span>
            <span>-10% Efficiency</span>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-white dark:bg-surface-dark rounded-xl p-5 border border-slate-200 dark:border-border-dark shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-4xl text-slate-900 dark:text-white">domain</span>
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Active Gov Deployments</p>
            <h3 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">15+</h3>
          </div>
          <div className="flex items-center gap-1 text-accent-green text-sm font-medium bg-accent-green/10 w-fit px-2 py-0.5 rounded">
            <span className="material-symbols-outlined text-sm">add</span>
            <span>3 New Contracts</span>
          </div>
        </div>
      </div>

      {/* Main Content Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="lg:col-span-2 bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-border-dark shadow-sm">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Revenue Growth vs. Target</h3>
              <p className="text-slate-500 text-sm">2024 - 2028 Projection Model</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">$1.2B</p>
              <p className="text-xs text-slate-400 uppercase font-semibold">Projected Valuation 2028</p>
            </div>
          </div>

          {/* Custom CSS Chart Implementation */}
          <div className="relative h-64 w-full mt-4 pr-4">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between text-slate-500 text-xs border-l border-slate-700/50 pl-2">
              <div className="w-full border-t border-slate-700/20 dashed relative"><span className="absolute -left-10 -top-2 w-8 text-right">$100M</span></div>
              <div className="w-full border-t border-slate-700/20 dashed relative"><span className="absolute -left-10 -top-2 w-8 text-right">$75M</span></div>
              <div className="w-full border-t border-slate-700/20 dashed relative"><span className="absolute -left-10 -top-2 w-8 text-right">$50M</span></div>
              <div className="w-full border-t border-slate-700/20 dashed relative"><span className="absolute -left-10 -top-2 w-8 text-right">$25M</span></div>
              <div className="w-full border-t border-slate-700/50 relative"><span className="absolute -left-10 -top-2 w-8 text-right">0</span></div>
            </div>

            {/* Bars & Lines Container */}
            <div className="absolute inset-0 flex justify-around items-end ml-4 pt-4 z-10">
              {/* 2024 */}
              <div className="flex flex-col items-center group w-1/6">
                <div className="w-8 bg-slate-600 rounded-t-sm h-[10%] relative group-hover:bg-slate-500 transition-colors">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-slate-800 text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity whitespace-nowrap">$2M Actual</div>
                </div>
                <span className="mt-4 text-xs font-medium text-slate-400">2024</span>
              </div>

              {/* 2025 */}
              <div className="flex flex-col items-center group w-1/6">
                <div className="w-8 bg-slate-600 rounded-t-sm h-[25%] relative group-hover:bg-slate-500 transition-colors"></div>
                <span className="mt-4 text-xs font-medium text-slate-400">2025</span>
              </div>

              {/* 2026 Target Highlight */}
              <div className="flex flex-col items-center group w-1/6 relative">
                <div className="absolute -top-12 text-center w-32">
                  <span className="bg-primary text-white text-[10px] px-2 py-1 rounded-full font-bold shadow-lg shadow-primary/40">$30M Target</span>
                  <div className="h-4 w-[1px] bg-primary mx-auto mt-1"></div>
                </div>
                <div className="w-8 bg-primary rounded-t-sm h-[45%] relative shadow-[0_0_15px_rgba(64,48,232,0.4)]"></div>
                <span className="mt-4 text-xs font-bold text-slate-900 dark:text-white">2026</span>
              </div>

              {/* 2027 */}
              <div className="flex flex-col items-center group w-1/6">
                <div className="w-8 bg-slate-600/60 rounded-t-sm h-[65%] relative group-hover:bg-slate-500 transition-colors border border-slate-500/30 border-dashed"></div>
                <span className="mt-4 text-xs font-medium text-slate-400">2027</span>
              </div>

              {/* 2028 */}
              <div className="flex flex-col items-center group w-1/6">
                <div className="w-8 bg-slate-600/60 rounded-t-sm h-[90%] relative group-hover:bg-slate-500 transition-colors border border-slate-500/30 border-dashed"></div>
                <span className="mt-4 text-xs font-medium text-slate-400">2028</span>
              </div>
            </div>

            {/* Trend Line (Simulated with SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none ml-4 pb-10" preserveAspectRatio="none">
              <path d="M 40 210 Q 140 180 240 130 T 440 20" fill="none" stroke="#0bda68" strokeDasharray="5,5" strokeWidth="3"></path>
              <circle cx="440" cy="20" fill="#0bda68" r="4"></circle>
            </svg>
          </div>
        </div>

        {/* Revenue Mix Table */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-border-dark shadow-sm h-full">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Revenue Mix Breakdown</h3>
            <div className="flex flex-col gap-4">
              {/* Item 1 */}
              <div className="flex flex-col gap-2 pb-4 border-b border-border-dark/30">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-primary"></div>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-300">Gov Contracts</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">65%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5">
                  <div className="bg-primary h-1.5 rounded-full" style={{width: '65%'}}></div>
                </div>
                <span className="text-xs text-slate-500">Long-term recurring federal deals</span>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col gap-2 pb-4 border-b border-border-dark/30">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-accent-green"></div>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-300">Enterprise Licensing</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">25%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5">
                  <div className="bg-accent-green h-1.5 rounded-full" style={{width: '25%'}}></div>
                </div>
                <span className="text-xs text-slate-500">B2B SaaS infrastructure seats</span>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-accent-orange"></div>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-300">Data Services</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">10%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5">
                  <div className="bg-accent-orange h-1.5 rounded-full" style={{width: '10%'}}></div>
                </div>
                <span className="text-xs text-slate-500">On-demand analytics API</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expansion Roadmap Timeline */}
      <div className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-border-dark shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Expansion Roadmap</h3>
          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">Strategic Milestones</span>
        </div>

        <div className="relative py-4">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Milestone 1 */}
            <div className="relative z-10 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark p-5 rounded-lg md:text-center shadow-lg transition-transform hover:-translate-y-1 duration-300">
              <div className="hidden md:flex absolute -top-[34px] left-1/2 -translate-x-1/2 size-4 rounded-full bg-primary ring-4 ring-white dark:ring-surface-dark items-center justify-center"></div>
              <span className="text-sm font-bold text-primary uppercase tracking-wider mb-2 block">2026</span>
              <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-2">Market Consolidation</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Solidifying dominance in federal contracts and acquiring key data competitors.</p>
            </div>

            {/* Milestone 2 */}
            <div className="relative z-10 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark p-5 rounded-lg md:text-center shadow-lg transition-transform hover:-translate-y-1 duration-300">
              <div className="hidden md:flex absolute -top-[34px] left-1/2 -translate-x-1/2 size-4 rounded-full bg-slate-600 ring-4 ring-white dark:ring-surface-dark items-center justify-center"></div>
              <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block">2027</span>
              <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-2">SEA Expansion</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Establishing regional HQs in Singapore and Tokyo for Asian gov-tech markets.</p>
            </div>

            {/* Milestone 3 */}
            <div className="relative z-10 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark p-5 rounded-lg md:text-center shadow-lg transition-transform hover:-translate-y-1 duration-300">
              <div className="hidden md:flex absolute -top-[34px] left-1/2 -translate-x-1/2 size-4 rounded-full bg-slate-600 ring-4 ring-white dark:ring-surface-dark items-center justify-center"></div>
              <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block">2028</span>
              <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-2">IPO Readiness</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Reaching $100M ARR and preparing financial structures for public listing.</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="pt-8 pb-4 text-center">
        <p className="text-slate-500 dark:text-slate-600 text-xs">© 2024 AILOGY Inc. Confidential Investment Materials. Do not distribute.</p>
      </footer>
    </div>
  );
}
