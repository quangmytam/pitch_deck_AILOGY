import { StrictMode, Component } from 'react';
import type { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'framer-motion';
import TopNavbar from './components/TopNavbar';
import './index.css';
import './i18n';

// --- SHARED VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

// --- SCREEN 1: COVER & OVERVIEW ---
const Screen1 = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white relative w-full overflow-x-hidden transition-colors duration-300">
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none" style={{ backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, #272447 1px, transparent 1px), linear-gradient(to bottom, #272447 1px, transparent 1px)' }}></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

      <section className="relative pt-24 pb-32 overflow-hidden min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col items-center justify-center gap-12 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center text-center">
              <h1 className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white mb-4 leading-[1.1]">
                <img src={`${import.meta.env.BASE_URL}assets/images/banner.png`} alt="AILOGY" className="h-[120px] md:h-[192px] object-contain dark:invert drop-shadow-xl" />
              </h1>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="px-3 py-1 bg-primary/10 text-primary font-bold text-sm rounded">AI</span>
                <span className="px-3 py-1 bg-accent/10 text-accent-success font-bold text-sm rounded">DATA</span>
                <span className="px-3 py-1 border border-border-dark text-slate-600 dark:text-slate-400 font-bold text-sm rounded">PLATFORM</span>
              </div>
              <h2 className="text-2xl md:text-4xl text-slate-700 dark:text-slate-300 font-bold whitespace-nowrap mb-10 leading-relaxed">
                {t('TIÊN PHONG CÔNG NGHỆ DỮ LIỆU VÀ TRÍ TUỆ NHÂN TẠO adasds')}
              </h2>
              <div className="flex items-center justify-center gap-6 pt-8 border-t border-border-dark w-full">
                <div className="flex flex-col text-left">
                  <span className="text-xs text-slate-500 uppercase tracking-wider mb-1">{t('Presenter')}</span>
                  <span className="font-bold text-slate-900 dark:text-white">TS. Đỗ Tiến Đăng</span>
                </div>
                <div className="w-px h-10 bg-border-dark"></div>
                <div className="flex flex-col text-left">
                  <span className="text-xs text-slate-500 uppercase tracking-wider mb-1">{t('Tháng 3')}</span>
                  <span className="font-bold text-slate-900 dark:text-white">Năm 2026</span>
                </div>
                <div className="w-px h-10 bg-border-dark"></div>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-slate-500 uppercase tracking-wider mb-1">{t('Backed By')}</span>
                  <span className="font-bold text-slate-900 dark:text-white">Hiveres</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="company-overview" className="py-24 border-t border-border-dark bg-surface-light/50 dark:bg-surface-dark/30 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">{t('Company Overview')}</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">{t('AILOGY')}</h3>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden border border-border-dark bg-white dark:bg-surface-dark p-8 shadow-xl">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">{t('AILOGY là công ty cơ sở hạ tầng dữ liệu và AI hàng đầu về cơ bản chuyển đổi cách các chính phủ và doanh nghiệp lớn xử lý, bảo mật và tận dụng dữ liệu có sẵn.')}</p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">{t('Born from the strategic ecosystem of the Hiveres Technology Institute, our proprietary vertical AI models and unified data platforms eliminate legacy silos, replacing them with sovereign, secure, and highly intelligent data ecosystems.')}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-surface-dark border border-border-dark p-6 rounded-2xl text-center shadow-lg hover:-translate-y-1 transition-transform">
                <div className="text-5xl font-black text-primary mb-2">45+</div>
                <div className="text-sm font-bold text-slate-500">{t('Petabytes Processed')}</div>
              </div>
              <div className="bg-white dark:bg-surface-dark border border-border-dark p-6 rounded-2xl text-center shadow-lg hover:-translate-y-1 transition-transform">
                <div className="text-5xl font-black text-accent mb-2">12+</div>
                <div className="text-sm font-bold text-slate-500">{t('Government and Enterprise Clients')}</div>
              </div>
              <div className="bg-white dark:bg-surface-dark border border-border-dark p-6 rounded-2xl text-center shadow-lg hover:-translate-y-1 transition-transform">
                <div className="text-5xl font-black text-slate-900 dark:text-primary-light mb-2">99%</div>
                <div className="text-sm font-bold text-slate-500">{t('Hallucination Reduction In Text Generation')}</div>
              </div>
              <div className="bg-white dark:bg-surface-dark border border-border-dark p-6 rounded-2xl text-center shadow-lg hover:-translate-y-1 transition-transform">
                <div className="text-5xl font-black text-accent-success mb-2">Tier 1</div>
                <div className="text-sm font-bold text-slate-500">{t('Sovereign Security')}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden bg-white dark:bg-background-dark">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-5 flex flex-col justify-center">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">{t('Vision & Mission')}</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">{t('Palantir in South East Asia')}</h3>
              <div className="space-y-8 mt-8">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent">visibility</span>
                    {t('Long-term Vision')}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t('To become the indispensable nervous system for national data infrastructure, ensuring every strategic decision is backed by intelligent, secure, and sovereign computation.')}</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">flag</span>
                    {t('Our Mission')}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t('To unlock the value of fragmented government and enterprise data silos using proprietary AI architectures that prioritize absolute security and localized context.')}</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:col-span-7">
              <div className="rounded-3xl border border-border-dark bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-2xl rounded-full"></div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold rounded uppercase">Strategic Counterpart</span>
                </div>
                <h4 className="text-3xl font-black text-slate-900 dark:text-white mb-4">{t('The Proven Success Model')}</h4>
                <p className="text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                  <Trans i18nKey="Much like Palantir Technologies revolutionized Western government intelligence and enterprise logistics by bridging the gap between fragmented data and operational analytics, AILOGY captures the same high-barrier, high-retention market in region.">
                    Much like <strong className="text-primary font-black ml-1">Palantir Technologies</strong> revolutionized Western government intelligence and enterprise logistics by bridging the gap between fragmented data and operational analytics, AILOGY captures the same high-barrier, high-retention market in region.
                  </Trans>
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white dark:bg-background-dark border border-border-dark hover:border-primary/50 transition-colors">
                    <div className="text-primary mb-3"><span className="material-symbols-outlined text-3xl">assured_workload</span></div>
                    <div className="font-bold text-slate-900 dark:text-white mb-1.5">{t('High Barriers to Entry')}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{t('Government-grade security requirements create natural monopolies.')}</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-white dark:bg-background-dark border border-border-dark hover:border-accent/50 transition-colors">
                    <div className="text-accent mb-3"><span className="material-symbols-outlined text-3xl">data_object</span></div>
                    <div className="font-bold text-slate-900 dark:text-white mb-1.5">{t('Compound Data Moat')}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{t('Models improve exponentially as they ingest specific structural data.')}</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-white dark:bg-background-dark border border-border-dark hover:border-accent-success/50 transition-colors">
                    <div className="text-accent-success mb-3"><span className="material-symbols-outlined text-3xl">trending_up</span></div>
                    <div className="font-bold text-slate-900 dark:text-white mb-1.5">{t('Zero Churn Rate')}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{t('Infrastructure integration makes replacing the system near-impossible.')}</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-white dark:bg-background-dark border border-border-dark hover:border-primary-light/50 transition-colors">
                    <div className="text-primary-light mb-3"><span className="material-symbols-outlined text-3xl">dynamic_feed</span></div>
                    <div className="font-bold text-slate-900 dark:text-white mb-1.5">{t('Expanding Scope')}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{t('Land-and-expand strategies lead to massively growing ACVs.')}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- SCREEN 4: TEAM & ADVANTAGE ---
const Screen4 = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 flex flex-col gap-20 min-h-screen overflow-hidden">
      <motion.header initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="flex flex-col gap-4 mt-8 relative z-10">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="flex items-center gap-2 text-primary mb-2">
          <span className="material-symbols-outlined text-sm">groups</span>
          <span className="text-xs font-bold tracking-widest uppercase">{t('Team & Edge')}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">{t('Unfair Advantage & Capital Defense')}</h1>
        <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed">{t('Supported by the Hiveres ecosystem, navigated by industry veterans, and protected by extreme infrastructure lock-in. A strategic moat designed for absolute capital security.')}</p>
      </motion.header>

      <section className="flex flex-col gap-10">
        <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white">{t('Core Leadership & Experts')}</motion.h2>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div variants={itemVariants} className="p-8 rounded-3xl border border-primary/30 bg-surface-light dark:bg-surface-dark shadow-xl hover:border-primary/60 transition-colors relative overflow-hidden">
            <h3 className="text-sm uppercase tracking-widest text-primary font-black mb-8 flex items-center gap-2 border-b border-border-dark pb-4">{t('Core Founders')}</h3>
            <div className="flex flex-col gap-6 text-slate-900 dark:text-white">
              <div className="flex flex-col"><span className="font-bold text-lg">TS. Đỗ Tiến Đăng</span><span className="text-sm font-medium text-slate-500">Đồng Sáng Lập</span></div>
              <div className="flex flex-col"><span className="font-bold text-lg">Nguyễn Thanh Bình</span><span className="text-sm font-medium text-slate-500">Giám đốc điều hành</span></div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="p-8 rounded-3xl border border-accent/30 bg-surface-light dark:bg-surface-dark shadow-xl hover:border-accent/60 transition-colors relative overflow-hidden">
            <h3 className="text-sm uppercase tracking-widest text-accent font-black mb-8 flex items-center gap-2 border-b border-border-dark pb-4">{t('Leadership & Tech Experts')}</h3>
            <div className="flex flex-col gap-6 text-slate-900 dark:text-white">
              <div className="flex flex-col"><span className="font-bold text-lg">Nguyễn Phú Bình</span><span className="text-sm font-medium text-slate-500">Giám Đốc Kinh Doanh</span></div>
              <div className="flex flex-col"><span className="font-bold text-lg">Th.S Nguyễn Thị Lan Anh</span><span className="text-sm font-medium text-slate-500">Giám Đốc Vận Hành</span></div>
              <div className="flex flex-col"><span className="font-bold text-lg">TS. Huỳnh Thái Học</span><span className="text-sm font-medium text-slate-500">Giám Đốc Công Nghệ</span></div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="p-8 rounded-3xl border border-slate-400/30 bg-surface-light dark:bg-surface-dark shadow-xl hover:border-slate-400/60 transition-colors relative overflow-hidden">
            <h3 className="text-sm uppercase tracking-widest text-slate-400 font-black mb-8 flex items-center gap-2 border-b border-border-dark pb-4">{t('Strategic Advisors')}</h3>
            <div className="flex flex-col gap-6 text-slate-900 dark:text-white">
              <div className="flex flex-col"><span className="font-bold text-lg">TS. Đỗ Tiến Đăng</span><span className="text-sm font-medium text-slate-500">Cố vấn chiến lược</span></div>
              <div className="flex flex-col"><span className="font-bold text-lg">Nguyễn Phú Bình</span><span className="text-sm font-medium text-slate-500">Cố Vấn Hạ Tầng Dữ Liệu</span></div>
              <div className="flex flex-col"><span className="font-bold text-lg">TS. Hoàng Thị Kiều Anh</span><span className="text-sm font-medium text-slate-500">Chuyên Gia Toán Tính Toán</span></div>
              <div className="flex flex-col"><span className="font-bold text-lg">TS. Phạm Đức Tĩnh</span><span className="text-sm font-medium text-slate-500">Cố vấn nghiên cứu khoa học</span></div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="flex flex-col gap-10 py-12 border-t border-border-dark mt-10">
        <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white flex items-center gap-4">
          <span className="w-2 h-10 bg-primary rounded-full"></span>
          {t('Competitive Landscape')}
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-border-dark bg-white/50 dark:bg-surface-dark/50 backdrop-blur-sm shadow-2xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-100/50 dark:bg-white/5 border-b border-border-dark">
                  <th className="py-6 px-8 text-xs font-black uppercase tracking-widest text-slate-500">{t('Features')}</th>
                  <th className="py-6 px-8 text-sm font-black text-primary uppercase tracking-wider bg-primary/5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      AILOGY
                    </div>
                  </th>
                  <th className="py-6 px-8 text-xs font-black text-slate-500 uppercase tracking-widest">{t('Legacy Gov Tech')}</th>
                  <th className="py-6 px-8 text-xs font-black text-slate-500 uppercase tracking-widest">{t('Public Cloud APIs')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-dark/50">
                {/* Row 1: Sovereignty */}
                <tr className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                  <td className="py-6 px-8">
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-900 dark:text-white">{t('Sovereignty & Compliance')}</span>
                      <span className="text-[10px] text-slate-500 font-medium uppercase mt-1">{t('Legal & Sustained Ops')}</span>
                    </div>
                  </td>
                  <td className="py-6 px-8 bg-primary/5">
                    <div className="flex items-center gap-2 text-primary font-black uppercase text-xs">
                      <span className="material-symbols-outlined text-sm font-bold">verified_user</span>
                      {t('Absolute')}
                    </div>
                  </td>
                  <td className="py-6 px-8 text-slate-500 text-sm">{t('Limited / Friction')}</td>
                  <td className="py-6 px-8">
                    <div className="flex items-center gap-2 text-red-500 font-bold uppercase text-xs">
                      <span className="material-symbols-outlined text-sm">error</span>
                      {t('Low Trust')}
                    </div>
                  </td>
                </tr>

                {/* Row 2: Integration */}
                <tr className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                  <td className="py-6 px-8">
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-900 dark:text-white">{t('Technological Supremacy')}</span>
                      <span className="text-[10px] text-slate-500 font-medium uppercase mt-1">API & Infrastructure</span>
                    </div>
                  </td>
                  <td className="py-6 px-8 bg-primary/5">
                    <div className="flex items-center gap-2 text-primary font-black uppercase text-xs">
                      <span className="material-symbols-outlined text-sm font-bold">api</span>
                      {t('Deep Integration')}
                    </div>
                  </td>
                  <td className="py-6 px-8 text-slate-500 text-sm">{t('Fragmented DBs')}</td>
                  <td className="py-6 px-8">
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <span className="material-symbols-outlined text-sm">link</span>
                      Surface API
                    </div>
                  </td>
                </tr>

                {/* Row 3: Accuracy */}
                <tr className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                  <td className="py-6 px-8">
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-900 dark:text-white">{t('Hallucination Reduction')}</span>
                      <span className="text-[10px] text-slate-500 font-medium uppercase mt-1">Foundational Trust</span>
                    </div>
                  </td>
                  <td className="py-6 px-8 bg-primary/5">
                    <div className="flex items-center gap-2 text-accent-success font-black uppercase text-xs">
                      <span className="material-symbols-outlined text-sm font-bold">security</span>
                      {t('Zero-Hallucination')}
                    </div>
                  </td>
                  <td className="py-6 px-8 text-slate-500 text-sm">{t('N/A (No AI)')}</td>
                  <td className="py-6 px-8">
                    <div className="flex items-center gap-2 text-red-500 font-bold uppercase text-xs">
                      <span className="material-symbols-outlined text-sm">warning</span>
                      {t('High Risk')}
                    </div>
                  </td>
                </tr>

                {/* Row 4: Customization */}
                <tr className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                  <td className="py-6 px-8">
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-900 dark:text-white">{t('High Customization')}</span>
                      <span className="text-[10px] text-slate-500 font-medium uppercase mt-1">Business Logic</span>
                    </div>
                  </td>
                  <td className="py-6 px-8 bg-primary/5">
                    <div className="flex items-center gap-2 text-primary font-black uppercase text-xs">
                      <span className="material-symbols-outlined text-sm font-bold">settings_suggest</span>
                      {t('Tailored')}
                    </div>
                  </td>
                  <td className="py-6 px-8 text-slate-500 text-sm font-bold">{t('Rigid')}</td>
                  <td className="py-6 px-8 text-slate-500 text-sm font-bold">{t('Generic')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>


    </div>
  );
};

// --- SCREEN 2: MARKET & PLATFORM ---
const Screen2 = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 flex flex-col gap-24 min-h-screen">

      <motion.header
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4 mt-8 relative"
      >
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 flex items-center gap-2 text-primary mb-2">
          <span className="material-symbols-outlined text-sm">hub</span>
          <span className="text-xs font-bold tracking-widest uppercase">{t('Market & Platform')}</span>
        </div>
        <h1 className="relative z-10 text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
          {t('Decoding the Sovereign Intelligence Market')}
        </h1>
        <p className="relative z-10 text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed">
          {t('General AI fails in secure, localized contexts. We address the core vulnerabilities of national and enterprise infrastructure with a purpose-built sovereign architecture.')}
        </p>
      </motion.header>

      {/* 4. Problem Statement: The Bottlenecks */}
      <section className="flex flex-col gap-10">
        <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white flex items-center gap-4 border-l-4 border-red-500 pl-4">
          {t('The Critical Bottlenecks')}
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Node 1 */}
          <motion.div variants={itemVariants} className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-red-500/20 hover:border-red-500/50 transition-colors shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
            <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">dns</span>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3">{t('Severe Data Fragmentation')}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {t('Valuable intelligence is locked across hundreds of siloed departmental servers, making cohesive cross-agency search biologically impossible.')}
            </p>
          </motion.div>

          {/* Node 2 */}
          <motion.div variants={itemVariants} className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-red-500/20 hover:border-red-500/50 transition-colors shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
            <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">policy</span>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3">{t('Sovereignty & Compliance')}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {t('Strict data localization laws (e.g., Decree 13/ND-CP) prohibit routing sensitive state or financial data through public cloud APIs like OpenAI or Google.')}
            </p>
          </motion.div>

          {/* Node 3 */}
          <motion.div variants={itemVariants} className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-red-500/20 hover:border-red-500/50 transition-colors shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
            <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3">{t('Exorbitant Legacy Costs')}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {t('Maintaining legacy on-premise relational databases and paying millions of dollars annually for rigid enterprise search indices.')}
            </p>
          </motion.div>

          {/* Node 4 */}
          <motion.div variants={itemVariants} className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-red-500/20 hover:border-red-500/50 transition-colors shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
            <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">psychology_alt</span>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3">{t('Dangerous Hallucinations')}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {t('When applied to legal or strategic frameworks, standard GenAI models frequently invent incorrect citations, rendering them useless for critical operations.')}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 5. The Architecture (AILOGY OS) */}
      <section className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-10 rounded-3xl border border-primary/30 bg-primary/5 relative overflow-hidden flex flex-col h-full justify-center"
        >
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
          <h2 className="text-2xl md:text-4xl font-black text-primary mb-6 relative z-10">
            {t('The AILOGY Platform Solution')}
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-8 relative z-10 leading-relaxed">
            {t('A 4-layer sovereign infrastructure that integrates with any existing legacy system:')}
          </p>

          <ul className="space-y-4 relative z-10 flex flex-col gap-2">
            <li className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-surface-dark/50 backdrop-blur shadow-sm border border-border-dark">
              <span className="material-symbols-outlined text-primary-light mt-1">check_circle</span>
              <div>
                <span className="font-bold text-slate-900 dark:text-white leading-tight block mb-1">{t('Unified Data Lakehouse')}</span>
                <p className="text-xs text-slate-600 dark:text-slate-400">{t('Indexing unstructured PDF, Excel, and SQL data into a central vector manifold.')}</p>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-surface-dark/50 backdrop-blur shadow-sm border border-border-dark">
              <span className="material-symbols-outlined text-primary-light mt-1">check_circle</span>
              <div>
                <span className="font-bold text-slate-900 dark:text-white leading-tight block mb-1">{t('Hardware-Agnostic Engine')}</span>
                <p className="text-xs text-slate-600 dark:text-slate-400">{t('Optimized to run on NVIDIA H100s or local private server clusters without internet.')}</p>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-surface-dark/50 backdrop-blur shadow-sm border border-border-dark">
              <span className="material-symbols-outlined text-primary-light mt-1">check_circle</span>
              <div>
                <span className="font-bold text-slate-900 dark:text-white leading-tight block mb-1">{t('Zero-Hallucination Framework')}</span>
                <p className="text-xs text-slate-600 dark:text-slate-400">{t('Deep RAG pipelines ensuring every output is grounded in verifiable legal/company data.')}</p>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-surface-light dark:bg-surface-dark rounded-3xl p-10 border border-border-dark shadow-xl h-full flex flex-col"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-3 h-3 rounded-full bg-accent-success animate-pulse"></span>
            <h3 className="font-black text-slate-900 dark:text-white text-xl uppercase tracking-wider">{t('TAM / SAM Analysis')}</h3>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-8">
            {/* Global TAM */}
            <div className="p-2">
              <div className="flex justify-between items-end mb-3">
                <span className="text-slate-500 font-black uppercase tracking-widest text-[10px]">{t('Global TAM (2030)')}</span>
                <span className="text-slate-900 dark:text-white font-black text-xl">$1.2 Trillion</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-slate-400 dark:bg-slate-600"></motion.div>
              </div>
              <p className="text-[10px] text-slate-500 mt-2 uppercase font-bold tracking-tighter">{t('Global AI and data infrastructure market.')}</p>
            </div>

            {/* Regional SAM */}
            <div className="p-2 border-l-2 border-primary/20 pl-4">
              <div className="flex justify-between items-end mb-3">
                <span className="text-primary font-black uppercase tracking-widest text-[10px]">{t('Regional SAM – Đông Nam Á')}</span>
                <span className="text-primary font-black text-xl">$12.5B</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '65%' }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }} className="h-full bg-primary"></motion.div>
              </div>
              <p className="text-[10px] text-slate-500 mt-2 uppercase font-bold tracking-tighter">{t('AI, data and GovTech investment rising sharply due to national digital transformation.')}</p>
            </div>

            {/* Vietnam SAM */}
            <div className="p-2 border-l-2 border-accent-success/20 pl-4">
              <div className="flex justify-between items-end mb-3">
                <span className="text-accent-success font-black uppercase tracking-widest text-[10px]">{t('Vietnam SAM (2025–2031)')}</span>
                <span className="text-accent-success font-black text-xl">$2.9B → $5.8B</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '45%' }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }} className="h-full bg-accent-success"></motion.div>
              </div>
              <p className="text-[10px] text-slate-500 mt-2 uppercase font-bold tracking-tighter">{t('Vietnam AI market growing over 26% annually.')}</p>
            </div>

            {/* AILOGY SOM */}
            <div className="p-2 border-l-2 border-accent/20 pl-4">
              <div className="flex justify-between items-end mb-3">
                <span className="text-accent font-black uppercase tracking-widest text-[10px]">{t('AILOGY SOM (5–7 years)')}</span>
                <span className="text-accent font-black text-xl">$1.2B</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '25%' }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }} className="h-full bg-accent"></motion.div>
              </div>
              <p className="text-[10px] text-slate-500 mt-2 uppercase font-bold tracking-tighter">{t('Sovereign AI market for government and large enterprises.')}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 pt-8 border-t border-border-dark mt-8 py-6">
            <div className="rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-100/30 dark:bg-slate-800/30 p-4 text-center">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{t('Global TAM')}</div>
              <div className="font-black text-lg text-slate-700 dark:text-white">$700B+</div>
            </div>
            <div className="rounded-2xl border border-accent-success/30 bg-accent-success/5 p-4 text-center animate-pulse-slow">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{t('Vietnam SAM')}</div>
              <div className="font-black text-lg text-accent-success">$5.8B</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 6. Milestones (Historical Roadmap) */}
      <section className="flex flex-col gap-10 py-16 border-t border-border-dark mt-8">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">
          {t('Các cột mốc quan trọng')}
        </h2>

        <div className="relative pl-4 border-l-2 border-border-dark dark:border-slate-800 ml-4 py-2 flex flex-col gap-8">
          {[
            { date: '02/2025', title: 'Thành lập công ty', desc: 'Chính thức thành lập công ty và xây dựng đội ngũ AI, Data và Product cốt lõi. Thu hút các nhân tài từ các tập đoàn công nghệ lớn.' },
            { date: '04/2025', title: 'Hoàn thiện MVP V.1', desc: 'Ra mắt phiên bản thử nghiệm đầu tiên của nền tảng AILOGY OS, tập trung vào khả năng xử lý dữ liệu phi cấu trúc.' },
            { date: '06/2025', title: 'Triển khai Pilot đầu tiên', desc: 'Bắt đầu triển khai thử nghiệm hệ thống tại một cơ quan cấp bộ, chứng minh hiệu quả thực tế.' },
            { date: '09/2025', title: 'Nhận đầu tư 1.500.000 USD', desc: 'Hoàn tất vòng gọi vốn Seed với tổng giá trị 1.500.000 USD từ các nhà đầu tư chiến lược.' },
            { date: '11/2025', title: 'Mở rộng hạ tầng', desc: 'Đầu tư hệ thống máy chủ GPU hiệu năng cao phục vụ việc đào tạo mô hình ngôn ngữ lớn riêng biệt.' },
            { date: '01/2026', title: 'Ra mắt AILOGY OS V.2', desc: 'Phiên bản chính thức với khả năng bảo mật đa lớp và tích hợp sâu RAG.' },
            { date: '02/2026', title: 'Ký kết hợp đồng với VNPost, VPQH, Finister', desc: 'Ký kết triển khai giải pháp AI với Tổng công ty Bưu điện Việt Nam, Văn phòng Quốc hội Việt Nam và tập đoàn Finister.' },
            { date: '03/2026', title: 'Kế hoạch mở rộng khu vực', desc: 'Bắt đầu nghiên cứu và tiếp cận thị trường Đông Nam Á (Lào, Campuchia).' }
          ].map((milestone, i) => (
            <div key={i} className="relative group">
              <div className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-primary/40 group-hover:bg-primary transition-colors border-2 border-bg-light dark:border-bg-dark shadow-[0_0_10px_rgba(64,48,232,0.3)]"></div>
              <div className="flex flex-col group-hover:translate-x-1 transition-transform">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-primary tracking-tight">{t(milestone.date)}</span>
                  <span className="text-slate-300">—</span>
                  <span className="font-bold text-slate-800 dark:text-white">{t(milestone.title)}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-1.5 max-w-2xl bg-white dark:bg-surface-dark/50 p-4 rounded-2xl border border-transparent group-hover:border-border-dark transition-colors">
                  {t(milestone.desc)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// --- SCREEN 6: TRACTION ---
const Screen6 = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 flex flex-col gap-20 min-h-screen overflow-hidden">

      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4 mt-8 relative"
      >
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 flex items-center gap-2 text-primary mb-2">
          <span className="material-symbols-outlined text-sm">rocket</span>
          <span className="text-xs font-bold tracking-widest uppercase">{t('Products & Traction')}</span>
        </div>
        <h1 className="relative z-10 text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
          {t('Real-World Deployment')}
        </h1>
        <p className="relative z-10 text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed">
          {t('We do not just build concepts. AILOGY is actively deployed in the most rigorous government agencies and top-tier enterprises in Vietnam, solving high-stake operational challenges.')}
        </p>
      </motion.header>

      {/* 7. Products & Real-World Implementations (With Demos) */}
      <section className="flex flex-col gap-10 relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white flex items-center gap-4"
        >
          {t('Core Products & Case Studies')}
          <span className="h-px bg-border-dark flex-1 ml-4 hidden md:block"></span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            { title: 'Orbyte', desc: 'Đọc văn bản và chuyển đổi thành metadata', icon: 'library_books' },
            { title: 'LLMs', desc: 'Xây dựng các mô hình từ đầu', icon: 'psychology' },
            { title: 'Camera Edu', desc: 'Mô hình giám sát an toàn học đường', icon: 'videocam' },
            { title: 'AI Portal', desc: 'AI Portal', icon: 'account_balance' },
            { title: 'Novaland Project', desc: 'Dự án với novaland', icon: 'location_city' },
            { title: 'EVN Standardizer', desc: 'Mô hình chuẩn hoá dữ liệu', icon: 'bolt' },
            { title: 'Finister', desc: 'Mô hình chấm điểm tài chính', icon: 'fact_check' },
            { title: 'Mô hình rủi ro', desc: 'Mô hình đánh giá rủi ro tài chính', icon: 'warning' },
            { title: 'Kiểm duyệt Nội dung', desc: 'Mô hình phát hiện nội dung độc hại', icon: 'gpp_bad' },
          ].map((prod, idx) => (
            <motion.div key={idx} variants={itemVariants} className="p-4 rounded-xl border border-border-dark bg-white dark:bg-surface-dark flex flex-row items-center gap-4 shadow-sm hover:border-primary/50 transition-colors">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <span className="material-symbols-outlined text-2xl">{prod.icon}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 leading-tight">{t(prod.title)}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed line-clamp-2">{t(prod.desc)}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Product Gallery */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-4 mt-16"
        >
          {t('Triển khai thực tế')}
          <span className="h-px bg-border-dark flex-1 ml-4 hidden md:block"></span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full overflow-hidden relative mt-8"
        >
          {/* Fade Masks */}
          <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-bg-light dark:from-bg-dark to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-bg-light dark:from-bg-dark to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max animate-scroll gap-4 py-2 hover:pause">
            {[
              'evn(2).png', 'evn.png', 'kiểm toán (1).png', 'kiểm toán .png', 'kiểm toán(1).png',
              'kiểm toán(3).png', 'kiểm toán(4).png', 'kiểm toán.png', 'thư viện số.png',
              'z7586005315882_2df0673084d0555202c67061c93d71db.jpg', 'z7586008061761_0dd51ac224605bfff0ecc7fe6c808930.jpg',
              'evn(2).png', 'evn.png', 'kiểm toán (1).png', 'kiểm toán .png', 'kiểm toán(1).png',
              'kiểm toán(3).png', 'kiểm toán(4).png', 'kiểm toán.png', 'thư viện số.png',
              'z7586005315882_2df0673084d0555202c67061c93d71db.jpg', 'z7586008061761_0dd51ac224605bfff0ecc7fe6c808930.jpg'
            ].map((img, i) => (
              <img key={i} src={`${import.meta.env.BASE_URL}assets/images/products/${img}`} className="w-72 md:w-80 h-40 md:h-48 object-cover rounded-xl border border-border-dark shadow-sm hover:scale-[1.02] transition-transform cursor-pointer" />
            ))}
          </div>
        </motion.div>

        {/* Seminar Gallery */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-4 mt-16"
        >
          {t('Các hoạt động')}
          <span className="h-px bg-border-dark flex-1 ml-4 hidden md:block"></span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full overflow-hidden relative mt-8"
        >
          {/* Fade Masks */}
          <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-bg-light dark:from-bg-dark to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-bg-light dark:from-bg-dark to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max animate-scroll gap-4 py-2 [animation-direction:reverse] hover:pause">
            {[
              'Bộ Y Tế.jpg', 'EVN.jpeg', 'bộ tài chính 2.JPG',
              'nam việt 3.JPG', 'quốc hội 2.jpg',
              'toshiba.JPG', 'đông đô.png',
              'Bộ Y Tế.jpg', 'EVN.jpeg', 'bộ tài chính 2.JPG',
              'nam việt 3.JPG', 'quốc hội 2.jpg',
              'toshiba.JPG', 'đông đô.png'
            ].map((img, i) => (
              <img key={i} src={`${import.meta.env.BASE_URL}assets/images/activities/${img}`} className="w-72 md:w-80 h-40 md:h-48 object-cover rounded-xl border border-border-dark shadow-sm hover:scale-[1.02] transition-transform cursor-pointer" />
            ))}
          </div>
        </motion.div>

        {/* Press & Articles Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-4 mt-8 max-w-4xl"
        >
          <a href="https://www.mof.gov.vn/cong-nghe-thong-tin-va-chuyen-doi-so/tin-tuc-su-kien-3/ai-trong-nganh-tai-chinh-viet-nam-tu-ha-tang-du-lieu-den-van-hanh-thong-minh" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 px-6 rounded-2xl bg-white dark:bg-surface-dark border border-border-dark hover:border-primary/50 shadow-sm transition-all duration-300 hover:shadow-md">
            <span className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors line-clamp-2 pr-4 text-sm md:text-base">
              {t('AI trong ngành tài chính Việt Nam: Từ hạ tầng dữ liệu đến vận hành thông minh')}
            </span>
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </a>

          <a href="https://cds.moh.gov.vn/trang-chu/-/asset_publisher/9VNAsbzkEbQA/content/hoi-thao-ai-y-te-thanh-cong-ra-mat-mang-luoi-v-rhain-va-thuc-ay-cac-giai-phap-ai-y-te-co-trach-nhiem/pop_up?_101_INSTANCE_9VNAsbzkEbQA_viewMode=print&_101_INSTANCE_9VNAsbzkEbQA_languageId=vi_VN" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 px-6 rounded-2xl bg-white dark:bg-surface-dark border border-border-dark hover:border-accent/50 shadow-sm transition-all duration-300 hover:shadow-md">
            <span className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-accent transition-colors line-clamp-2 pr-4 text-sm md:text-base">
              {t('Hội thảo AI Y tế thành công, ra mắt Mạng lưới V-RHAIN và thúc đẩy các giải pháp AI Y tế có trách nhiệm')}
            </span>
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors shrink-0">
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </a>
        </motion.div>
      </section>

      {/* 8. Trusted Partners */}
      <section className="flex flex-col gap-12 py-16 border-t border-border-dark mt-10 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-accent/5 rounded-[100%] blur-[120px] pointer-events-none"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center relative z-10"
        >
          <h2 className="text-2xl md:text-4xl font-black text-primary mb-4">
            {t('Đối tác')}
          </h2>
          <p className="text-slate-900 dark:text-white text-xl md:text-3xl font-bold">
            {t('Niềm Tin Của Các Trụ Cột Quốc Gia')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative z-10"
        >
          {/* Partners Logos */}
          {[
            { img: 'Emblem_of_Vietnam.svg.webp', name: 'Văn Phòng Quốc Hội' },
            { img: 'Logo_Bộ_Tài_chính.png', name: 'Bộ Tài Chính' },
            { img: 'Ministry_of_Health_(Vietnam)_Logo.svg.png', name: 'Bộ Y Tế' },
            { img: 'env.webp', name: 'EVN' },
            { img: 'Vietnam_Post_logo.png', name: 'VNPOST' },
            { img: 'Logo_Kiểm_toán_nhà_nước_Việt_Nam.jpg', name: 'Kiểm toán nhà nước' },
            { img: 'tongcucthue.png', name: 'Tổng cục thuế' },
            { img: 'Novaland_Logo.svg', name: 'NOVALAND' },
            { img: 'haui.png', name: 'ĐH Công Nghiệp HN' },
            { img: 'huit.jpeg', name: 'ĐH Công Thương HCM' },
            { img: 'Học_viện_tài_chính.jpg', name: 'Học Viện Tài Chính' },
            { img: 'Navico.png', name: 'Công ty CP Nam Việt' }
          ].map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl border border-border-dark bg-white/80 dark:bg-surface-dark/80 backdrop-blur-md shadow-lg shadow-black/5 flex flex-col items-center justify-center gap-4 cursor-default hover:border-primary/50 transition-colors text-center"
            >
              <div className="h-16 flex items-center justify-center">
                <img src={`${import.meta.env.BASE_URL}assets/images/partners/${partner.img}`} alt={partner.name} className="max-h-full max-w-full object-contain drop-shadow-sm" />
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-sm">{t(partner.name)}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
};

// --- SCREEN 3: FINANCIALS ---
const Screen3 = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 flex flex-col gap-24 min-h-screen">

      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4 mt-8 relative"
      >
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-success/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 flex items-center gap-2 text-accent-success mb-2">
          <span className="material-symbols-outlined text-sm">trending_up</span>
          <span className="text-xs font-bold tracking-widest uppercase">{t('Strategy & Financials')}</span>
        </div>
        <h1 className="relative z-10 text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
          {t('A High-Margin Enterprise Profile')}
        </h1>
        <p className="relative z-10 text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed">
          {t('Recurring licensing revenue scaled across compounding infrastructure deployments. We run a deeply fortified B2B/B2G operational structure.')}
        </p>
      </motion.header>

      {/* 11. Revenue Model */}
      <section className="flex flex-col gap-10">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white"
        >
          {t('Four Pillars of Revenue')}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Revenue Stream 1 */}
          <motion.div variants={itemVariants} className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-border-dark group hover:border-accent-success/50 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-success/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
            <div className="w-12 h-12 rounded-xl bg-accent-success/20 text-accent-success flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">key</span>
            </div>
            <h3 className="font-black text-xl text-slate-900 dark:text-white mb-2">{t('Enterprise Licensing (SaaS/PaaS)')}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{t('Monthly/Annual recurring fees for access to our core LLM APIs and Analytics dashboards.')}</p>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t('Est. Margin: ')}<span className="text-accent-success">85%</span></div>
          </motion.div>

          {/* Revenue Stream 2 */}
          <motion.div variants={itemVariants} className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-border-dark group hover:border-primary/50 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
            <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">architecture</span>
            </div>
            <h3 className="font-black text-xl text-slate-900 dark:text-white mb-2">{t('Tailored Enterprise AI')}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{t('Upfront development and deployment fees for isolated, on-premise custom model tuning.')}</p>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t('Est. Margin: ')}<span className="text-primary">60%</span></div>
          </motion.div>

          {/* Revenue Stream 3 */}
          <motion.div variants={itemVariants} className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-border-dark group hover:border-accent/50 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
            <div className="w-12 h-12 rounded-xl bg-accent/20 text-accent flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">analytics</span>
            </div>
            <h3 className="font-black text-xl text-slate-900 dark:text-white mb-2">{t('Data Infrastructure')}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{t('Structuring APIs and vectorization pipelines sold sequentially to legacy Gov bodies.')}</p>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t('Est. Margin: ')}<span className="text-accent">75%</span></div>
          </motion.div>

          {/* Revenue Stream 4 */}
          <motion.div variants={itemVariants} className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-border-dark group hover:border-primary-light/50 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-light/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
            <div className="w-12 h-12 rounded-xl bg-primary-light/20 text-primary-light flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">switch_account</span>
            </div>
            <h3 className="font-black text-xl text-slate-900 dark:text-white mb-2">{t('Premium Outsourcing')}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{t('Elite dedicated tech-teams generating immediate cash-flow to fund primary R&D.')}</p>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t('Est. Margin: ')}<span className="text-primary-light">40%</span></div>
          </motion.div>
        </motion.div>
      </section>

      {/* 12 & 13. Financials & Road to $1B */}
      <section className="py-10 border-t border-border-dark flex flex-col max-w-4xl mx-auto w-full">
        {/* Current Financials Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white dark:bg-slate-950 p-10 border border-border-dark dark:border-slate-800 shadow-2xl relative overflow-hidden"
        >
          {/* Abstract Grid Background */}
          <div className="absolute inset-0 opacity-5 dark:opacity-20 transition-opacity duration-300" style={{ backgroundImage: 'linear-gradient(to right, #4030e8 1px, transparent 1px), linear-gradient(to bottom, #4030e8 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

          <h3 className="text-slate-900 dark:text-white text-2xl font-black mb-8 relative z-10 text-center">{t('Financial Health Snapshot')}</h3>

          <div className="flex flex-col gap-4 relative z-10">
            {/* Top Row: 3 small boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Box 1 */}
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur border border-border-dark dark:border-slate-700 p-5 rounded-2xl flex flex-col justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm text-slate-900 dark:text-white">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">{t('Gross Margin')}</span>
                <span className="text-3xl font-black text-accent-success">72%</span>
              </div>
              {/* Box 2 */}
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur border border-border-dark dark:border-slate-700 p-5 rounded-2xl flex flex-col justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm text-slate-900 dark:text-white">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">{t('Chi phí năm 2025')}</span>
                <span className="text-3xl font-black text-slate-900 dark:text-white">{t('1 Triệu USD')}</span>
              </div>
              {/* Box 3 */}
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur border border-border-dark dark:border-slate-700 p-5 rounded-2xl flex flex-col justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm text-slate-900 dark:text-white">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">{t('Burn Rate')}</span>
                <span className="text-3xl font-black text-slate-900 dark:text-white">{t('Low')}</span>
                <span className="text-xs text-slate-500 dark:text-slate-500 mt-1">{t('Offset by Outsourcing')}</span>
              </div>
            </div>

            {/* Bottom Row: 2 big boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Box 1 */}
              <div className="bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/20 border border-border-dark dark:border-primary/50 p-6 rounded-2xl flex flex-col justify-center items-center text-center group shadow-sm text-slate-900 dark:text-white min-h-[140px]">
                <span className="block text-slate-600 dark:text-slate-300 text-sm font-bold tracking-wider mb-2 uppercase">{t('Current Revenue (End Q1 2026)')}</span>
                <span className="block text-4xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">{t('$2 Million USD')}</span>
              </div>
              {/* Box 2 */}
              <div className="bg-gradient-to-br from-accent/5 to-transparent dark:from-accent/20 border border-border-dark dark:border-accent/50 p-6 rounded-2xl flex flex-col justify-center items-center text-center group shadow-sm text-slate-900 dark:text-white min-h-[140px]">
                <span className="block text-slate-600 dark:text-slate-300 text-sm font-bold tracking-wider mb-2 uppercase">{t('Total Costs (End Q1 2026)')}</span>
                <span className="block text-4xl font-black text-slate-900 dark:text-white group-hover:text-accent transition-colors">{t('500K USD')}</span>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-border-dark dark:border-slate-800 rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-2xl rounded-full group-hover:scale-150 transition-transform"></div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider">{t('Chiến lược mở rộng thị trường')}</h3>

            <div className="grid sm:grid-cols-2 gap-6 relative z-10">
              <div className="bg-white/90 dark:bg-surface-dark/90 backdrop-blur rounded-2xl p-6 shadow-sm border border-border-dark">
                <div className="text-primary text-sm font-bold uppercase tracking-widest mb-2">{t('Mục tiêu Doanh thu 2026')}</div>
                <div className="text-4xl font-black text-slate-900 dark:text-white">{t('30 Triệu USD')}</div>
              </div>

              <div className="bg-white/90 dark:bg-surface-dark/90 backdrop-blur rounded-2xl p-6 shadow-sm border border-border-dark">
                <div className="text-accent text-sm font-bold uppercase tracking-widest mb-2">{t('Kỳ vọng Định giá')}</div>
                <div className="text-4xl font-black text-slate-900 dark:text-white">{t('1 Tỷ USD')}</div>
                <div className="text-xs text-slate-500 font-medium mt-1 uppercase">{t('Đến hết năm 2028')}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="grid lg:grid-cols-2 gap-8 py-10 border-t border-border-dark">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 md:p-12 rounded-3xl border border-primary-light/30 bg-primary/5 shadow-inner">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-primary-light/20 flex items-center justify-center"><span className="material-symbols-outlined text-primary-light text-3xl">corporate_fare</span></div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">{t('Hiveres Support')}</h2>
          </div>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">{t('AILOGY receives unparalleled structural leverage from its parent holding, utilizing the Hiveres Technology Institute to establish deep-seated bureaucratic network pipelines.')}</p>
          <div className="flex flex-wrap gap-3">{['Bộ Tài Chính', 'Bộ Công An', 'Bộ Nội Vụ', 'Viện trí tuệ nhân tạo', 'Bộ KHCN'].map((min, idx) => (<span key={idx} className="px-4 py-2 border border-primary-light/30 bg-white/50 dark:bg-surface-dark/50 backdrop-blur rounded-full text-sm font-bold shadow-sm">{t(min)}</span>))}</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 rounded-3xl border border-accent-success/30 bg-accent-success/5 flex flex-col justify-center relative overflow-hidden shadow-inner">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8 relative z-10">{t('Exit Path & Assurances')}</h2>
          <div className="space-y-6 relative z-10">
            <div className="flex items-start gap-5 p-6 border border-border-dark bg-white/80 dark:bg-surface-dark/80 backdrop-blur-md rounded-2xl shadow-xl hover:scale-[1.02] transition-transform">
              <div className="w-12 h-12 shrink-0 rounded-full bg-accent-success/20 flex items-center justify-center mt-1"><span className="material-symbols-outlined text-accent-success font-bold">account_balance</span></div>
              <div><h4 className="font-black text-lg text-slate-900 dark:text-white mb-2">{t('M&A and IPO Potential')}</h4><p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t('Highly attractive target for strategic acquisition by telecom giants or international firms aiming to shortcut Vietnam’s regulatory data walls.')}</p></div>
            </div>
            <div className="flex items-start gap-5 p-6 border border-accent/30 bg-gradient-to-br from-white/90 to-accent/5 dark:from-surface-dark/90 dark:to-accent/10 backdrop-blur-md rounded-2xl shadow-xl hover:scale-[1.02] transition-transform">
              <div className="w-12 h-12 shrink-0 rounded-full bg-accent/20 flex items-center justify-center mt-1"><span className="material-symbols-outlined text-accent font-bold">policy</span></div>
              <div><h4 className="font-black text-lg text-slate-900 dark:text-white mb-2">{t('3-Year Capital Return Guarantee')}</h4><p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{t('If the company is not listed or has not experienced a liquidity event within 3 years, the founders commit to repurchasing the shares at original value plus the average commercial bank interest rate.')}</p></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* New Strategy Focus Section */}
      <section className="py-16 border-t border-border-dark mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">{t('Go-To-Market Strategy')}</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-border-dark shadow-sm hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">explore</span>
            </div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4">{t('Chiến lược tiếp cận thị trường')}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t('Tập trung vào làm các dự án lớn của chính phủ và triển khai các công nghệ dữ liệu.')}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-border-dark shadow-sm hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">group</span>
            </div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4">{t('Phân khúc khách hàng')}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t('Chính phủ và các tập đoàn lớn.')}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-border-dark shadow-sm hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-full bg-accent-success/10 text-accent-success flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">business_center</span>
            </div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4">{t('Kênh bán hàng')}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t('Chính phủ, các công ty công nghệ uy tín.')}</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 16 & 17. The Ask & Use of Funds */}
      <section className="py-16 mt-10 rounded-3xl bg-surface-light dark:bg-surface-dark border border-border-dark relative overflow-hidden flex flex-col items-center text-center px-6">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 w-full max-w-4xl flex flex-col items-center"
        >
          <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-bold tracking-widest uppercase mb-8 inline-block shadow-sm">
            {t('The Investment Opportunity')}
          </span>

          <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6">
            2 Triệu USD
          </h2>
          <p className="text-2xl text-slate-600 dark:text-slate-400 font-medium mb-12">
            {t('For')} <strong className="text-slate-900 dark:text-white">10%</strong> {t('Equity Selection')}
          </p>

          <div className="flex gap-4 mb-12">
            <span className="px-5 py-2 rounded-xl bg-white dark:bg-surface-dark border border-border-dark font-bold tracking-wide text-slate-900 dark:text-white shadow-sm">{t('Direct Equity Sale')}</span>
            <span className="px-5 py-2 rounded-xl bg-white dark:bg-surface-dark border border-border-dark font-bold tracking-wide text-slate-900 dark:text-white shadow-sm">{t('Angel Round')}</span>
          </div>

          {/* Use of Funds Bar */}
          <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-8 md:h-12 flex overflow-hidden mb-8 border border-border-dark shadow-inner">
            <div className="bg-primary h-full flex items-center justify-center text-[10px] md:text-xs text-white font-bold w-[45%]" title="45% R&D + Infrastructure">R&D & Infra (45%)</div>
            <div className="bg-accent h-full flex items-center justify-center text-[10px] md:text-xs text-slate-900 font-bold w-[35%]" title="35% Sales & Expansion">Growth (35%)</div>
            <div className="bg-slate-700 dark:bg-slate-400 h-full flex items-center justify-center text-[10px] md:text-xs text-white dark:text-slate-900 font-bold w-[20%]" title="20% Buffer & Ops">Operations (20%)</div>
          </div>

          {/* Legend */}
          <div className="grid grid-cols-3 gap-2 md:gap-8 w-full">
            <div className="flex flex-col items-center text-center">
              <span className="w-4 h-4 rounded bg-primary mb-2"></span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">{t('Hạ tầng & R&D')}</span>
              <span className="text-xs text-slate-500 mt-1 hidden sm:block">{t('Cụm H100 & Phát Triển Mô Hình')}</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="w-4 h-4 rounded bg-accent mb-2"></span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">{t('Pipeline Expansion')}</span>
              <span className="text-xs text-slate-500 mt-1 hidden sm:block">{t('Enterprise Sales Ops')}</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="w-4 h-4 rounded bg-slate-700 dark:bg-slate-400 mb-2"></span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">{t('Working Capital')}</span>
              <span className="text-xs text-slate-500 mt-1 hidden sm:block">{t('Legal & Sustained Ops')}</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

// --- APPLICATION COMPONENT ---
function App() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased transition-colors duration-300">
      <TopNavbar />
      <main className="flex-1 w-full relative pt-0">
        <section className="w-full"><Screen1 /></section>
        <section id="team" className="w-full"><Screen4 /></section>
        <section id="market-platform" className="w-full"><Screen2 /></section>
        <section id="company" className="w-full"><Screen6 /></section>
        <section id="financials-ask" className="w-full"><Screen3 /></section>
      </main>

      <footer className="bg-surface-light dark:bg-surface-dark border-t border-border-dark py-8 mt-auto w-full z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-500 dark:text-slate-400">
            <p>© 2026 AILOGY Inc. {t('All rights reserved.')}</p>
            <div className="flex gap-4 uppercase tracking-widest">
              <span>{t('Strictly Confidential')}</span>
              <span className="hidden sm:inline">•</span>
              <span>{t('Investor Relations')}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Basic Error Boundary to prevent full-page white screen on React crashes
class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', textAlign: 'center', color: '#ef4444' }}>
          <h2>Oops! Something went wrong.</h2>
          <p>Please try refreshing the page. If the issue persists, check the console for details.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  );
  console.log('AILOGY App mounted successfully');
} else {
  console.error('Failed to find the root element to mount the app.');
}
