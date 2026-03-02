import { Link } from 'react-router-dom';

export default function Screen1() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white relative w-full overflow-x-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, #272447 1px, transparent 1px), linear-gradient(to bottom, #272447 1px, transparent 1px)'}}></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 glass-panel border-b border-border-dark">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">AILOGY</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors" href="#vision">Vision</a>
            <a className="text-sm font-medium text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors" href="#platform">Platform</a>
            <a className="text-sm font-medium text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors" href="#casestudy">Case Study</a>
            <a className="text-sm font-medium text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors" href="#market">Market</a>
            <a className="text-sm font-medium text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors" href="#financials">Financials</a>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/platform" className="hidden sm:flex px-5 py-2.5 rounded bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-all shadow-[0_0_20px_-5px_rgba(64,48,232,0.5)]">
                Dashboard Demo
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-light border border-primary/30 text-xs font-medium text-primary mb-8 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            Series A Round Open
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1]">
            <span className="text-glow">AILOGY</span><br/>
            AI & Data Intelligence<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Infrastructure</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Building the sovereign AI backbone for government and enterprise. Unified data lakes, proprietary models, and decision intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/financials" className="w-full sm:w-auto px-8 py-3 rounded bg-white text-background-dark text-base font-bold hover:bg-slate-200 transition-colors">
              View Pitch Deck
            </Link>
            <Link to="/investment" className="w-full sm:w-auto px-8 py-3 rounded border border-border-dark bg-surface-dark/50 text-white text-base font-bold hover:bg-surface-dark transition-colors backdrop-blur-sm">
              Invest Now
            </Link>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="p-4 rounded border border-border-dark bg-surface-dark/60 backdrop-blur-sm">
              <div className="text-slate-400 text-sm font-medium mb-1">Revenue Target (2026)</div>
              <div className="text-2xl font-bold text-white">$30M</div>
            </div>
            <div className="p-4 rounded border border-border-dark bg-surface-dark/60 backdrop-blur-sm">
              <div className="text-slate-400 text-sm font-medium mb-1">Q1 2026 Confirmed</div>
              <div className="text-2xl font-bold text-accent">$2M</div>
            </div>
            <div className="p-4 rounded border border-border-dark bg-surface-dark/60 backdrop-blur-sm">
              <div className="text-slate-400 text-sm font-medium mb-1">Government Contracts</div>
              <div className="text-2xl font-bold text-white">12+ Active</div>
            </div>
            <div className="p-4 rounded border border-border-dark bg-surface-dark/60 backdrop-blur-sm">
              <div className="text-slate-400 text-sm font-medium mb-1">Data Processed</div>
              <div className="text-2xl font-bold text-white">45 PB/Year</div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbdgMiGtcRLMfLnktGCmR9caH2ipV00Tw_2FkXuBei0qpR7uhqazkNCsPRGwflLeozKpPMr168uSA7Uvc6wKHNP6QyTdpsHPqcnlWlb3ewD-_ZTkvpQ7K717_TWFWBc6AOKc9CG8qeAQU8tPhM-0lO5rhZGakeqB_EGHW_g3ofkkd--vuN_xNMqMGplwkme7HBKY5h0cRrlDB73yPZghLrui07CxcqyAIOyOA88xaaoBE_68bFUNxwbFu7nmSfNKKxX6afyCSCvFhG')", backgroundSize: "cover", backgroundPosition: "center"}}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark/90 to-background-dark z-0"></div>
      </section>

      {/* Vision Section */}
      <section className="py-20 border-t border-border-dark bg-surface-dark/30" id="vision">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-primary font-bold mb-2 uppercase tracking-wider text-sm">Our Vision</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">National-Scale AI Infrastructure</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                Government and enterprise data is fragmented, insecure, and underutilized. AILOGY bridges the gap between raw data and strategic action, providing a sovereign layer of intelligence that respects local regulations and security protocols.
              </p>
              <div className="flex gap-4">
                <div className="flex flex-col gap-2">
                  <span className="material-symbols-outlined text-primary text-3xl">security</span>
                  <h3 className="text-slate-900 dark:text-white font-bold">Sovereign Security</h3>
                  <p className="text-sm text-slate-500">On-premise deployment capability</p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="material-symbols-outlined text-primary text-3xl">hub</span>
                  <h3 className="text-slate-900 dark:text-white font-bold">Unified Logic</h3>
                  <p className="text-sm text-slate-500">Connecting legacy silos</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-xl blur-xl"></div>
              <div className="relative rounded-xl overflow-hidden border border-border-dark bg-surface-dark p-8">
                <h3 className="text-xl font-bold text-white mb-6">The AI & Data Gap</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 min-w-[24px] text-red-500">
                      <span className="material-symbols-outlined">warning</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Data Fragmentation</h4>
                      <p className="text-slate-400 text-sm">Critical data locked in 50+ incompatible legacy systems.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 min-w-[24px] text-red-500">
                      <span className="material-symbols-outlined">lock_person</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Security Risks</h4>
                      <p className="text-slate-400 text-sm">Public cloud AI models cannot handle classified state secrets.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 min-w-[24px] text-red-500">
                      <span className="material-symbols-outlined">psychology_alt</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Talent Shortage</h4>
                      <p className="text-slate-400 text-sm">Lack of specialized AI engineers for custom deployment.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-surface-dark border-t border-border-dark pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl font-bold text-white">AILOGY</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                AILOGY provides the foundational data and AI infrastructure for sovereign nations and strategic enterprises.
              </p>
            </div>
          </div>
          <div className="border-t border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
            <p>© 2026 AILOGY Inc. All rights reserved.</p>
            <p>Designed for Institutional Investors.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
