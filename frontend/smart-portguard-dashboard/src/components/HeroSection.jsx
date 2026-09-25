function HeroSection({ sensorData }) {
    const temperature = sensorData?.temperature?.value ?? "--";
    const humidity = sensorData?.humidity?.value ?? "--";
    const aqi = sensorData?.airQuality?.aqi ?? "--";
    const turbidity = sensorData?.waterQuality?.turbidity ?? "--";

    return (
        <section
            id="home"
            className="relative overflow-hidden border-b border-slate-800 bg-slate-950"
        >
            {/* Background glow */}
            <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />

            {/* Grid background */}
            <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage:
                        "linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                }}
            />

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">

                {/* LEFT SIDE */}
                <div>

                    {/* Location badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">

                        <span className="text-sm">📍</span>

                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                            New Mangalore Port • Karnataka
                        </span>

                    </div>


                    {/* Main heading */}
                    <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">

                        Environmental
                        <span className="block text-cyan-400">
                            Intelligence
                        </span>

                        <span className="block text-slate-300">
                            for a Sustainable Port City
                        </span>

                    </h1>


                    {/* Description */}
                    <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">

                        PortGuard provides real-time environmental
                        monitoring and AI-assisted insights for air,
                        water and climatic conditions around New Mangalore Port.

                    </p>


                    {/* Buttons */}
                    <div className="mt-9 flex flex-wrap gap-4">

                        <a
                            href="#monitoring"
                            className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                        >
                            Explore Live Data →
                        </a>

                        <a
                            href="#about"
                            className="rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"
                        >
                            About PortGuard
                        </a>

                    </div>


                    {/* Status */}
                    <div className="mt-8 flex items-center gap-3">

                        <span className="relative flex h-3 w-3">

                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />

                        </span>

                        <span className="text-sm text-slate-400">
                            Environmental monitoring system active
                        </span>

                    </div>

                </div>


                {/* RIGHT SIDE */}
                <div className="relative">

                    {/* Main monitoring panel */}
                    <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl">

                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-slate-800 pb-5">

                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                    Live Environment
                                </p>

                                <h2 className="mt-1 text-lg font-semibold text-white">
                                    NMPT Monitoring
                                </h2>
                            </div>

                            <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5">

                                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                                <span className="text-xs font-semibold text-emerald-400">
                                    ONLINE
                                </span>

                            </div>

                        </div>


                        {/* Main AQI */}
                        <div className="mt-7 rounded-2xl border border-slate-800 bg-slate-950/70 p-6">

                            <div className="flex items-end justify-between">

                                <div>

                                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                                        Current Air Quality
                                    </p>

                                    <p className="mt-2 text-5xl font-bold text-white">
                                        {aqi}
                                    </p>

                                    <p className="mt-2 text-sm text-yellow-400">
                                        Environmental condition monitored
                                    </p>

                                </div>

                                <div className="text-5xl">
                                    🌫️
                                </div>

                            </div>

                        </div>


                        {/* Mini cards */}
                        <div className="mt-4 grid grid-cols-3 gap-3">

                            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">

                                <p className="text-xs text-slate-500">
                                    TEMP
                                </p>

                                <p className="mt-2 text-xl font-bold text-red-300">
                                    {temperature}°
                                </p>

                                <p className="text-[10px] text-slate-500">
                                    Celsius
                                </p>

                            </div>


                            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">

                                <p className="text-xs text-slate-500">
                                    HUMIDITY
                                </p>

                                <p className="mt-2 text-xl font-bold text-blue-300">
                                    {humidity}%
                                </p>

                                <p className="text-[10px] text-slate-500">
                                    Relative
                                </p>

                            </div>


                            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">

                                <p className="text-xs text-slate-500">
                                    TURBIDITY
                                </p>

                                <p className="mt-2 text-xl font-bold text-cyan-300">
                                    {turbidity}
                                </p>

                                <p className="text-[10px] text-slate-500">
                                    NTU
                                </p>

                            </div>

                        </div>


                        {/* Footer */}
                        <div className="mt-5 flex items-center justify-between">

                            <span className="text-xs text-slate-500">
                                📡 Sensor network
                            </span>

                            <span className="text-xs text-slate-500">
                                Real-time prototype data
                            </span>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default HeroSection;