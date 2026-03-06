import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function TopNavbar() {
    const { t, i18n } = useTranslation();

    // Theme state
    const [isDark, setIsDark] = useState(false);

    // Mobile menu state
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle theme
    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <header className="fixed top-0 z-50 bg-white/70 dark:bg-[#131122]/70 backdrop-blur-[12px] border-b border-border-dark transition-colors duration-300 w-full">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#company-overview" className="flex items-center gap-2">
                    <img src={`${import.meta.env.BASE_URL}assets/images/logoailogy.png`} alt="AILOGY Logo" className="h-[56px] w-[56px] object-contain" />
                    <img src={`${import.meta.env.BASE_URL}assets/images/banner.png`} alt="AILOGY" className="h-[46px] object-contain dark:invert translate-y-0.5" />
                </a>

                <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
                    {[
                        { id: 'company-overview', key: 'Overview' },
                        { id: 'team', key: 'Executive' },
                        { id: 'market-platform', key: 'Market & Platform' },
                        { id: 'company', key: 'Company' },
                        { id: 'financials-ask', key: 'Financials & Ask' }
                    ].map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 text-slate-500 hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10 dark:hover:text-primary-light active:scale-95 whitespace-nowrap"
                        >
                            {t(item.key)}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3 xl:gap-4">
                    <div className="flex bg-slate-100 dark:bg-slate-800/50 rounded-full p-1 border border-slate-200 dark:border-slate-700/50 backdrop-blur-md shadow-sm">
                        <button
                            onClick={() => i18n.changeLanguage('en')}
                            className={`px-3 py-1.5 text-[10px] font-black rounded-full transition-all duration-300 ${i18n.language === 'en'
                                ? 'bg-white dark:bg-primary text-primary dark:text-white shadow-md'
                                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                                }`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => i18n.changeLanguage('vn')}
                            className={`px-3 py-1.5 text-[10px] font-black rounded-full transition-all duration-300 ${i18n.language === 'vn'
                                ? 'bg-white dark:bg-primary text-primary dark:text-white shadow-md'
                                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                                }`}
                        >
                            VN
                        </button>
                    </div>

                    <button
                        onClick={toggleTheme}
                        className="flex cursor-pointer items-center justify-center h-9 w-9 rounded-full bg-slate-100 hover:bg-white dark:bg-slate-800/50 dark:hover:bg-slate-700/50 text-slate-800 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700/50 transition-all active:scale-90"
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden flex items-center justify-center h-9 w-9 rounded-full bg-slate-100 dark:bg-slate-800/50 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700/50"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white/95 dark:bg-[#131122]/95 backdrop-blur-lg border-b border-border-dark px-6 py-6 flex flex-col gap-3 shadow-2xl animate-in slide-in-from-top duration-300">
                    {[
                        { id: 'company-overview', key: 'Overview' },
                        { id: 'team', key: 'Executive' },
                        { id: 'market-platform', key: 'Market & Platform' },
                        { id: 'company', key: 'Company' },
                        { id: 'financials-ask', key: 'Financials & Ask' }
                    ].map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-4 py-3 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-primary/5 hover:text-primary transition-all"
                        >
                            {t(item.key)}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
