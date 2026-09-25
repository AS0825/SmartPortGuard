function PublicFooter() {
    return (
        <footer className="bg-slate-950">

            {/* MAIN FOOTER */}
            <div className="mx-auto max-w-7xl px-6 py-12">

                <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

                    {/* BRAND */}
                    <div className="md:col-span-2">

                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-xl">
                                ⚓
                            </div>

                            <div>
                                <h2 className="text-lg font-bold tracking-wide text-white">
                                    <span className="text-cyan-400">PORTGUARD</span>
                                </h2>

                                <p className="text-[9px] uppercase tracking-[0.25em] text-slate-500">
                                    Environmental Intelligence
                                </p>
                            </div>
                        </div>

                        <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                            A predictive environmental monitoring prototype
                            designed to explore IoT sensing, machine learning
                            and data-driven environmental intelligence for
                            sustainable port-city development.
                        </p>

                        <div className="mt-5 flex items-center gap-2 text-xs text-emerald-400">
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            Monitoring prototype active
                        </div>

                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Quick Links
                        </h3>

                        <div className="mt-5 space-y-3">

                            <a
                                href="#home"
                                className="block text-sm text-slate-400 transition hover:text-cyan-400"
                            >
                                Home
                            </a>

                            <a
                                href="#monitoring"
                                className="block text-sm text-slate-400 transition hover:text-cyan-400"
                            >
                                Live Monitoring
                            </a>

                            <a
                                href="#air"
                                className="block text-sm text-slate-400 transition hover:text-cyan-400"
                            >
                                Air Quality
                            </a>

                            <a
                                href="#water"
                                className="block text-sm text-slate-400 transition hover:text-cyan-400"
                            >
                                Water Quality
                            </a>

                            <a
                                href="#alerts"
                                className="block text-sm text-slate-400 transition hover:text-cyan-400"
                            >
                                Alerts
                            </a>

                            <a
                                href="#reports"
                                className="block text-sm text-slate-400 transition hover:text-cyan-400"
                            >
                                Reports & Data
                            </a>

                        </div>
                    </div>

                    {/* PROJECT INFO */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Project Information
                        </h3>

                        <div className="mt-5 space-y-4">

                            <div>
                                <p className="text-xs text-slate-500">
                                    MONITORING LOCATION
                                </p>

                                <p className="mt-1 text-sm text-slate-300">
                                    New Mangalore Port
                                </p>

                                <p className="text-xs text-slate-500">
                                    Karnataka, India
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-slate-500">
                                    TECHNOLOGY
                                </p>

                                <p className="mt-1 text-sm text-slate-300">
                                    IoT • Flask • React • Machine Learning
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-slate-500">
                                    DEVELOPMENT FOCUS
                                </p>

                                <p className="mt-1 text-sm text-slate-300">
                                    SDG 11 • Sustainable Cities
                                </p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-slate-800">

                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs md:flex-row md:items-center md:justify-between">

                    <p className="text-slate-500">
                        © 2026 PortGuard. Academic Project Prototype.
                    </p>

                    <div className="flex flex-wrap items-center gap-5">

                        <span className="text-slate-500">
                            Environmental Monitoring
                        </span>

                        <span className="text-slate-700">
                            |
                        </span>

                        <span className="text-slate-500">
                            Sustainable Port Cities
                        </span>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default PublicFooter;