function PublicNavbar() {
    return (
        <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* LOGO */}
                <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-xl">
                        ⚓
                    </div>

                    <div>
                        <h1 className="text-lg font-bold tracking-wide text-white">
                            <span className="text-cyan-400">PORTGUARD</span>
                        </h1>

                        <p className="text-[9px] uppercase tracking-[0.25em] text-slate-500">
                            Environmental Intelligence
                        </p>
                    </div>

                </div>


                {/* NAVIGATION */}
                <div className="hidden items-center gap-7 md:flex">

                    <a
                        href="#home"
                        className="text-sm text-slate-300 transition hover:text-cyan-400"
                    >
                        Home
                    </a>

                    <a
                        href="#monitoring"
                        className="text-sm text-slate-300 transition hover:text-cyan-400"
                    >
                        Live Monitoring
                    </a>

                    <a
                        href="#air"
                        className="text-sm text-slate-300 transition hover:text-cyan-400"
                    >
                        Air Quality
                    </a>

                    <a
                        href="#water"
                        className="text-sm text-slate-300 transition hover:text-cyan-400"
                    >
                        Water Quality
                    </a>

                    <a
                        href="#alerts"
                        className="text-sm text-slate-300 transition hover:text-cyan-400"
                    >
                        Alerts
                    </a>

                    <a
                        href="#reports"
                        className="text-sm text-slate-300 transition hover:text-cyan-400"
                    >
                        Reports
                    </a>

                </div>


                {/* LIVE STATUS */}
                <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2">

                    <span className="relative flex h-2.5 w-2.5">

                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>

                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>

                    </span>

                    <span className="text-xs font-semibold text-emerald-400">
                        LIVE
                    </span>

                </div>

            </div>
        </nav>
    );
}

export default PublicNavbar;