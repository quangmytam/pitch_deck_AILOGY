export default function Screen5() {
  return (
    <div className="p-6 lg:p-12 overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto space-y-12">
        {/* Header Section */}
        <header className="flex flex-col gap-4 mb-8">
          <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Strictly Confidential
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Leadership with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Government & AI Depth</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-accent max-w-2xl">
            Pioneering AI infrastructure for national security and enterprise scale. Our leadership combines decades of high-stakes technical execution with deep institutional relationships.
          </p>
        </header>

        {/* Founders Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group bg-card-dark rounded-xl border border-border-dark p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(175,37,244,0.15)] flex flex-col h-full">
            <div className="mb-6 relative w-full pt-[100%] rounded-lg overflow-hidden bg-slate-800">
              <img
                alt="Professional portrait of Asian male executive in suit"
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWFqqO6kGvlrc6HZFE6BX3wM16Mh65JYtxhCHUGx0lrA6v2rpDnPdQ3LqszCZVozIgZzgCfvGrmV95heAeBdX1BpEdG5hk_TclU6Pqy3p6CDcTWJeWpunmW78yYtQdfG0FSYvIpisu-Txf5zq3FrghDzro2rYNr_IlxG4Js3pGvvHOqud5F_BohUiB8TFm_lB9q_oc1tNEcDBCTLJPfBwLPrubgyhKxwGSvBqPs8bcvT3acCARLw1mIFPy9EkNIuSRB1dazP-gx2uw"
              />
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-xl font-bold text-white mb-1">Đỗ Tiến Đăng</h3>
              <p className="text-primary text-sm font-medium mb-4">Founder & CEO</p>
              <div className="h-px w-full bg-border-dark mb-4"></div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-1">
                AI Architect & Strategist with 15+ years building national-scale data systems. Former lead architect for government digital transformation initiatives.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 rounded bg-slate-800 text-xs text-slate-400 border border-slate-700">AI Strategy</span>
                <span className="px-2 py-1 rounded bg-slate-800 text-xs text-slate-400 border border-slate-700">GovTech</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-card-dark rounded-xl border border-border-dark p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(175,37,244,0.15)] flex flex-col h-full">
            <div className="mb-6 relative w-full pt-[100%] rounded-lg overflow-hidden bg-slate-800">
              <img
                alt="Professional portrait of male executive in business attire"
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0hIlPFUawt5Ny4CihTYm0Ae_tWf_Ai4myJoW1IlgQINBP9EFAtjZkRlpE_HILTKjVs8KcudelDk4AQfkdCoEUHzY36HivFJRCXC3lmjpv_Ujqupgx1q1-wjllk--4hq5DAVtN5CLJJhAn8bFQE4DLerbya01cbz0P5pJcvR0ljPNCH58CYn4KbFEqHA4Rcj3_zB95qb8dnIx5O2Eqi2XmBdI4OtiycOZM96CDLjXwoUrPCSUfgGHb5Wafa1uceKogRpNnaiVEyjeM"
              />
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-xl font-bold text-white mb-1">Nguyễn Thanh Bình</h3>
              <p className="text-primary text-sm font-medium mb-4">Co-Founder</p>
              <div className="h-px w-full bg-border-dark mb-4"></div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-1">
                Institutional Relations Lead. Bridges the gap between complex technology and policy frameworks. Previously advised key ministry departments on tech adoption.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 rounded bg-slate-800 text-xs text-slate-400 border border-slate-700">Policy</span>
                <span className="px-2 py-1 rounded bg-slate-800 text-xs text-slate-400 border border-slate-700">Partnerships</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-card-dark rounded-xl border border-border-dark p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(175,37,244,0.15)] flex flex-col h-full">
            <div className="mb-6 relative w-full pt-[100%] rounded-lg overflow-hidden bg-slate-800">
              <img
                alt="Professional portrait of male CTO with glasses"
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCroUrf0-nsaxjs1AY0IHVfY0yOPRH8KuP_L43T_wMAMag5dG36HNgTHmHCeq5-TLknABcKgGc0Fe9LPWRljhuZ1scyndO7tz5emaMz2xhiveMEIYWLieFrTbS-LPEo4yjt9EdPPz6Upmo6kVXgFRpSe06f8xscvJGVdWm8vLRT4sj7q_HRINbBc2MyfrUGvyvsJOE8pDye1TJFoiyhGqNJPyil0Dz7mlTiKEJnlkxe5Qe2MakKK9UwlddVtFjUNdkoHXLh7t2stVG5"
              />
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-xl font-bold text-white mb-1">Huỳnh Thái Học</h3>
              <p className="text-primary text-sm font-medium mb-4">Co-Founder & CTO</p>
              <div className="h-px w-full bg-border-dark mb-4"></div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-1">
                Deep Tech Specialist overseeing the core AILOGY engine. Expert in large language model fine-tuning and secure data architecture for sensitive sectors.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 rounded bg-slate-800 text-xs text-slate-400 border border-slate-700">R&D</span>
                <span className="px-2 py-1 rounded bg-slate-800 text-xs text-slate-400 border border-slate-700">Security</span>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Excellence Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-border-dark pb-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">Leadership & Technical Excellence</h3>
            <div className="text-accent text-sm hidden sm:block">Operational Execution</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tech Lead 1 */}
            <div className="bg-card-dark/50 rounded-lg p-5 border border-border-dark flex items-start gap-5 hover:bg-card-dark transition-colors">
              <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-slate-700">
                <img
                  alt="Portrait of male project manager"
                  className="w-full h-full object-cover filter grayscale opacity-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUEYHbzBKHzFaPnWwuF1mgoeEMKXIDtlg2HardQNryDvhRAlLeUEcDiyurM32_4KmAxp2Wb8QTZESMk9Y39TSqQQ4BHiW3ITdGNPZmiWX3VmDtFsntrGPgq0jjgNj5K8lPpRcMjc7bB7F2IxhB3JV9se65M-83Og-QWPbyb0zMx6BLEWdmfi0CRyHa-16RO0t7xSjPGwDqFf5tNv6f2GvueLfAMjVjcPuWrX5lqC7rsPuNe_qRLkfMjH0wPP5-Rdj5XAl4lm61gTYB"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Nguyễn Phú Bình</h4>
                <p className="text-accent text-sm mb-2">Head of Project Management</p>
                <p className="text-slate-400 text-sm leading-snug">
                  High Stakes Deployment specialist ensuring zero-downtime integration for critical infrastructure clients.
                </p>
              </div>
            </div>

            {/* Tech Lead 2 */}
            <div className="bg-card-dark/50 rounded-lg p-5 border border-border-dark flex items-start gap-5 hover:bg-card-dark transition-colors">
              <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-slate-700">
                <img
                  alt="Portrait of female operations director"
                  className="w-full h-full object-cover filter grayscale opacity-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB3SYDY9OP5ptkW8rF6lQASEqdJjad6k2KQUo2d0Ej7jTGbk12lGa2SlNSbx_VmwBsMO5LW_41ImTLxTec9o1k6Gx75oWhPjKphmyVPWVCeovCUbkaBx6YjVKrSwgHMc6bvln8j6CIO5LpZadFLhmE8B2mq0hqFf4nXCjNFGlb7m1eMZQaYnj9FVbndO4FiTMOadAUsaXaNjKNfM2dJEvblvNgiNWswLTJZEL7YiYm7WjwKo95tGcfSiEYtgkoDdoadpVWUiOR6cxx"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Nguyễn Lan Anh</h4>
                <p className="text-accent text-sm mb-2">Director of Operations</p>
                <p className="text-slate-400 text-sm leading-snug">
                  Enterprise Solutions expert managing cross-functional teams to deliver scalable AI implementations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Backing & Network */}
        <section className="rounded-2xl bg-gradient-to-br from-[#2b1834] to-[#150a1a] border border-border-dark p-8 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

          <div className="flex flex-col lg:flex-row gap-12 relative z-10">
            {/* Left: Ecosystem Info */}
            <div className="lg:w-1/3 flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Strategic Backing</h3>
                <p className="text-slate-400 text-sm">Powered by the Hiveres Ecosystem</p>
              </div>

              <div className="p-6 rounded-xl bg-background-dark/80 border border-primary/20 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded bg-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-black">hub</span>
                  </div>
                  <div className="font-bold text-white text-lg tracking-tight">HIVERES</div>
                </div>
                <p className="text-slate-300 text-sm mb-4">
                  Providing access to deep-tier computational resources and a pre-established network of 200+ enterprise partners.
                </p>
                <div className="flex gap-4 text-xs font-mono text-primary">
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Infra Access</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Data Lakes</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1 p-3 rounded-lg border border-border-dark bg-background-dark/50">
                  <span className="material-symbols-outlined text-accent mb-1 text-[20px]">account_balance</span>
                  <span className="text-white font-bold text-lg">12+</span>
                  <span className="text-slate-500 text-xs">Gov Ministries</span>
                </div>
                <div className="flex flex-col gap-1 p-3 rounded-lg border border-border-dark bg-background-dark/50">
                  <span className="material-symbols-outlined text-accent mb-1 text-[20px]">corporate_fare</span>
                  <span className="text-white font-bold text-lg">45+</span>
                  <span className="text-slate-500 text-xs">Enterprise Clients</span>
                </div>
              </div>
            </div>

            {/* Right: Visual Map */}
            <div className="lg:w-2/3 relative min-h-[400px] rounded-xl bg-[#1a0f21] border border-border-dark overflow-hidden flex items-center justify-center">
              {/* Abstract Map Background */}
              <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(#563168 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

              {/* Map Content */}
              <div className="relative w-full h-full p-8">
                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                  <div className="w-16 h-16 rounded-full bg-primary shadow-[0_0_30px_rgba(175,37,244,0.6)] flex items-center justify-center text-white font-bold z-10 border-4 border-[#2b1834]">
                    AI
                  </div>
                  <div className="mt-2 px-3 py-1 rounded-full bg-[#2b1834] border border-primary/30 text-white text-xs font-bold shadow-lg">AILOGY HQ</div>
                </div>

                {/* Connection Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: '#af25f4', stopOpacity: 0}} />
                      <stop offset="50%" style={{stopColor: '#af25f4', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#af25f4', stopOpacity: 0}} />
                    </linearGradient>
                  </defs>
                  <line x1="50%" y1="50%" x2="20%" y2="30%" stroke="url(#grad1)" strokeWidth="1.5" strokeDasharray="4 2" className="opacity-60" />
                  <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="url(#grad1)" strokeWidth="1.5" strokeDasharray="4 2" className="opacity-60" />
                  <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="url(#grad1)" strokeWidth="1.5" strokeDasharray="4 2" className="opacity-60" />
                  <line x1="50%" y1="50%" x2="25%" y2="70%" stroke="url(#grad1)" strokeWidth="1.5" strokeDasharray="4 2" className="opacity-60" />
                </svg>

                {/* Nodes */}
                <div className="absolute top-[30%] left-[20%] flex items-center gap-2 animate-[pulse_4s_ease-in-out_infinite]">
                  <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                  <span className="text-[10px] text-slate-300 bg-[#1a0f21]/80 px-1 rounded backdrop-blur-sm border border-slate-700">Ministry of Finance</span>
                </div>
                <div className="absolute top-[25%] right-[20%] flex items-center gap-2 animate-[pulse_5s_ease-in-out_infinite]">
                  <span className="text-[10px] text-slate-300 bg-[#1a0f21]/80 px-1 rounded backdrop-blur-sm border border-slate-700">Strategic Banking Partner</span>
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                </div>
                <div className="absolute bottom-[25%] right-[25%] flex items-center gap-2 animate-[pulse_3s_ease-in-out_infinite]">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
                  <span className="text-[10px] text-slate-300 bg-[#1a0f21]/80 px-1 rounded backdrop-blur-sm border border-slate-700">Telecommunications</span>
                </div>
                <div className="absolute bottom-[30%] left-[25%] flex items-center gap-2 animate-[pulse_6s_ease-in-out_infinite]">
                  <span className="text-[10px] text-slate-300 bg-[#1a0f21]/80 px-1 rounded backdrop-blur-sm border border-slate-700">National Data Center</span>
                  <div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
