export default function Screen4() {
  return (
    <div className="p-8 md:p-12 max-w-6xl mx-auto flex flex-col gap-10">
      {/* Header Section */}
      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-primary font-medium text-sm tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Live Round
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">Angel Investment Opportunity</h1>
          <p className="text-lg text-slate-600 dark:text-[#9893c8] max-w-2xl">
            Strategic Early-Stage Positioning for AILOGY Infrastructure. Join us in building the sovereign AI layer for enterprise and government.
          </p>
        </div>

        {/* Key Round Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-[#383465] p-6 rounded-xl flex flex-col gap-1 shadow-sm hover:border-primary/50 transition-colors group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Target Raise</span>
              <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">target</span>
            </div>
            <span className="text-3xl font-bold text-slate-900 dark:text-white">30-50B <span className="text-lg font-medium text-slate-500">VND</span></span>
            <span className="text-xs text-green-500 font-medium mt-auto pt-2">+ Flexible Oversubscription</span>
          </div>
          <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-[#383465] p-6 rounded-xl flex flex-col gap-1 shadow-sm hover:border-primary/50 transition-colors group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Instrument</span>
              <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">gavel</span>
            </div>
            <span className="text-3xl font-bold text-slate-900 dark:text-white">Direct Equity</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-auto pt-2">Preferred Stock</span>
          </div>
          <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-[#383465] p-6 rounded-xl flex flex-col gap-1 shadow-sm hover:border-primary/50 transition-colors group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Stage</span>
              <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">rocket_launch</span>
            </div>
            <span className="text-3xl font-bold text-slate-900 dark:text-white">Seed / Angel</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-auto pt-2">Post-Product, Pre-Scale</span>
          </div>
        </div>
      </header>

      {/* Middle Section: Use of Funds */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Column */}
        <div className="lg:col-span-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-[#383465] rounded-xl p-8 flex flex-col shadow-sm">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Use of Funds Allocation</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Capital deployment strategy for next 18 months</p>
            </div>
            <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Total: 50B VND
            </div>
          </div>

          {/* Bar Chart Visual */}
          <div className="flex flex-col gap-6 flex-1 justify-center">
            {/* Item 1 */}
            <div className="relative group">
              <div className="flex justify-between items-end mb-2">
                <span className="font-medium text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  AI Research & Models
                </span>
                <span className="font-bold text-slate-900 dark:text-white">20B VND <span className="text-slate-500 dark:text-slate-400 text-sm font-normal">(40%)</span></span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-4 overflow-hidden">
                <div className="bg-primary h-full rounded-full transition-all duration-1000 w-[40%] group-hover:brightness-110 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 pl-5">Deep learning architectures, Custom LLMs training, specialized datasets acquisition.</p>
            </div>

            {/* Item 2 */}
            <div className="relative group">
              <div className="flex justify-between items-end mb-2">
                <span className="font-medium text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
                  Data Infrastructure
                </span>
                <span className="font-bold text-slate-900 dark:text-white">10B VND <span className="text-slate-500 dark:text-slate-400 text-sm font-normal">(20%)</span></span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-4 overflow-hidden">
                <div className="bg-indigo-500 h-full rounded-full transition-all duration-1000 w-[20%] group-hover:brightness-110"></div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 pl-5">High-performance GPU servers, secure edge computing nodes, sovereign cloud setup.</p>
            </div>

            {/* Item 3 */}
            <div className="relative group">
              <div className="flex justify-between items-end mb-2">
                <span className="font-medium text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                  Product Development
                </span>
                <span className="font-bold text-slate-900 dark:text-white">5B VND <span className="text-slate-500 dark:text-slate-400 text-sm font-normal">(10%)</span></span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-4 overflow-hidden">
                <div className="bg-purple-500 h-full rounded-full transition-all duration-1000 w-[10%] group-hover:brightness-110"></div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 pl-5">Enterprise UI/UX, API Integration layers, GovTech compliance modules.</p>
            </div>

            {/* Remaining / Operations */}
            <div className="relative group opacity-60">
              <div className="flex justify-between items-end mb-2">
                <span className="font-medium text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-slate-500"></span>
                  Operations & Reserve
                </span>
                <span className="font-bold text-slate-900 dark:text-white">15B VND <span className="text-slate-500 dark:text-slate-400 text-sm font-normal">(30%)</span></span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-4 overflow-hidden">
                <div className="bg-slate-500 h-full rounded-full transition-all duration-1000 w-[30%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Column */}
        <div className="flex flex-col gap-4">
          <div className="bg-gradient-to-br from-primary to-indigo-900 rounded-xl p-6 text-white flex flex-col justify-between h-full relative overflow-hidden group">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
            <div>
              <h3 className="text-lg font-bold mb-2">Projected ROI</h3>
              <div className="text-4xl font-black mb-1">12x</div>
              <p className="text-indigo-100 text-sm opacity-90">Expected valuation multiple within 36 months based on current GovTech contracts pipeline.</p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                  <span className="material-symbols-outlined text-white">trending_up</span>
                </div>
                <div>
                  <div className="text-sm font-medium">Next Valuation Target</div>
                  <div className="text-lg font-bold">600B VND</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-[#383465] rounded-xl p-6 flex flex-col shadow-sm">
            <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-4">Burn Rate Projection</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">~1.2B</span>
              <span className="text-sm text-slate-500">VND / Month</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-3 mb-1">
              <div className="bg-green-500 w-[30%] h-full rounded-full"></div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Runway: 24 Months</p>
          </div>
        </div>
      </section>

      {/* Bottom Section: Strategic Value */}
      <section>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Strategic Value Unlocked</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-[#383465] p-5 rounded-xl hover:bg-slate-50 dark:hover:bg-[#1e1c33] transition-colors group cursor-default">
            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">account_balance</span>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Gov Pipeline</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Secures capacity to service 3 pending national-level data infrastructure contracts.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-[#383465] p-5 rounded-xl hover:bg-slate-50 dark:hover:bg-[#1e1c33] transition-colors group cursor-default">
            <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">security</span>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">IP Ownership</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Full regional IP rights for proprietary Vietnamese Large Language Models.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-[#383465] p-5 rounded-xl hover:bg-slate-50 dark:hover:bg-[#1e1c33] transition-colors group cursor-default">
            <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">hub</span>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Network Effect</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Establishes AILOGY as the standard protocol for inter-agency data sharing.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-[#383465] p-5 rounded-xl hover:bg-slate-50 dark:hover:bg-[#1e1c33] transition-colors group cursor-default">
            <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">speed</span>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Speed to Market</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Reduces deployment time for new enterprise instances from 4 weeks to 2 days.</p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-8 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-100 dark:bg-[#1e1c33] p-6 rounded-2xl">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Ready to proceed?</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Review the full term sheet or schedule a direct line with our founders.</p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors inline-flex">
              <span className="material-symbols-outlined text-[20px]">download</span>
              Download Term Sheet
            </button>
            <button className="flex-1 md:flex-none items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 inline-flex">
              <span className="material-symbols-outlined text-[20px]">calendar_today</span>
              Schedule Meeting
            </button>
          </div>
        </div>

        <div className="text-center mt-8 text-xs text-slate-400 dark:text-slate-600">
          © 2024 AILOGY Inc. Confidential & Proprietary. All rights reserved. <br/>
          This document is for informational purposes only and does not constitute an offer to sell securities.
        </div>
      </div>
    </div>
  );
}
