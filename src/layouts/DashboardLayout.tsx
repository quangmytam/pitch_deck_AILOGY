import type { ReactNode } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

interface DashboardLayoutProps {
  children?: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen w-full flex-row dark overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased">
      {/* Sidebar Navigation */}
      <aside className="w-64 lg:w-72 flex-shrink-0 border-r border-border-dark/50 bg-white dark:bg-[#131122] hidden md:flex flex-col h-full z-10">
        <div className="flex flex-col h-full justify-between p-4 lg:p-6">
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 relative overflow-hidden bg-primary shadow-lg shadow-primary/20"
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDDSWyNGX6qeYP2rPL9l1BKhuop_MlOCYCSrLJ2EhoGoyDUH8ATOW2AoRXh82EDF4Hy2QjVuTqahcSgrowTwSAeM0Kg5d63xcF970CzOsfIL5xCxRZ84eOrXp-pUL29hDJ79LCRGr-gunaOfTvnj2VpFEQ37-n4f2La_ORwGo4O2tgxHm1LdCB1NJ7nki-yx7y5E9J6Sb_jtoOsn9ux5kpJms1CUq-0HgUEGKkWjjREF17KVaHARM_X3bTRiyzwIeIvD-S8EDNz_3vE")'}}
              >
              </div>
              <div className="flex flex-col">
                <h1 className="text-slate-900 dark:text-white text-base lg:text-lg font-bold leading-normal tracking-wide">AILOGY</h1>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">Investor Portal</p>
              </div>
            </div>

            <nav className="flex flex-col gap-2">
              <NavLink to="/" end className={({isActive}) => `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${isActive ? 'bg-primary/20 text-white shadow-sm border border-primary/20' : 'text-slate-500 dark:text-slate-300 hover:text-white hover:bg-white/5'}`}>
                {({isActive}) => (
                  <>
                    <span className={`material-symbols-outlined transition-colors ${isActive ? 'text-primary fill-1' : 'text-slate-400 group-hover:text-primary'}`}>pie_chart</span>
                    <span className="text-sm font-medium">Executive Summary</span>
                  </>
                )}
              </NavLink>

              <NavLink to="/platform" className={({isActive}) => `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${isActive ? 'bg-primary/20 text-white shadow-sm border border-primary/20' : 'text-slate-500 dark:text-slate-300 hover:text-white hover:bg-white/5'}`}>
                {({isActive}) => (
                  <>
                    <span className={`material-symbols-outlined transition-colors ${isActive ? 'text-primary fill-1' : 'text-slate-400 group-hover:text-primary'}`}>storefront</span>
                    <span className="text-sm font-medium">Platform & Market</span>
                  </>
                )}
              </NavLink>

              <NavLink to="/financials" className={({isActive}) => `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${isActive ? 'bg-primary/20 text-white shadow-sm border border-primary/20' : 'text-slate-500 dark:text-slate-300 hover:text-white hover:bg-white/5'}`}>
                {({isActive}) => (
                  <>
                    <span className={`material-symbols-outlined transition-colors ${isActive ? 'text-primary fill-1' : 'text-slate-400 group-hover:text-primary'}`}>attach_money</span>
                    <span className="text-sm font-medium">Financials</span>
                  </>
                )}
              </NavLink>

              <NavLink to="/investment" className={({isActive}) => `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${isActive ? 'bg-primary/20 text-white shadow-sm border border-primary/20' : 'text-slate-500 dark:text-slate-300 hover:text-white hover:bg-white/5'}`}>
                {({isActive}) => (
                  <>
                    <span className={`material-symbols-outlined transition-colors ${isActive ? 'text-primary fill-1' : 'text-slate-400 group-hover:text-primary'}`}>handshake</span>
                    <span className="text-sm font-medium">Investment Round</span>
                  </>
                )}
              </NavLink>

              <NavLink to="/team" className={({isActive}) => `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${isActive ? 'bg-primary/20 text-white shadow-sm border border-primary/20' : 'text-slate-500 dark:text-slate-300 hover:text-white hover:bg-white/5'}`}>
                {({isActive}) => (
                  <>
                    <span className={`material-symbols-outlined transition-colors ${isActive ? 'text-primary fill-1' : 'text-slate-400 group-hover:text-primary'}`}>group</span>
                    <span className="text-sm font-medium">Team & Backing</span>
                  </>
                )}
              </NavLink>
            </nav>
          </div>

          <div className="mt-auto">
            <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary hover:bg-primary/90 text-white text-sm font-bold shadow-lg shadow-primary/25 transition-all">
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Download Deck</span>
            </button>
            <div className="mt-6 flex items-center gap-3 border-t border-border-dark pt-4">
              <div className="size-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">JD</div>
              <div className="flex flex-col">
                <p className="text-xs font-bold text-slate-900 dark:text-white">John Doe</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Institutional Investor</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-full overflow-y-auto bg-background-light dark:bg-background-dark scrollbar-hide">
        <Outlet />
        {children}
      </main>
    </div>
  );
}
