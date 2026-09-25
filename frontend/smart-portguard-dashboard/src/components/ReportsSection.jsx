function ReportsSection({ sensorData }) {

    const temperature = sensorData?.temperature?.value ?? "--";
    const humidity = sensorData?.humidity?.value ?? "--";
    const aqi = sensorData?.airQuality?.aqi ?? "--";
    const turbidity = sensorData?.waterQuality?.turbidity ?? "--";
    const pm25 = sensorData?.pm25 ?? "--";
    const pm10 = sensorData?.pm10 ?? "--";
    const co = sensorData?.co ?? "--";
    const no2 = sensorData?.no2 ?? "--";

    return (
        <section
            id="reports"
            className="border-b border-slate-800 bg-slate-950 px-6 py-16"
        >
            <div className="mx-auto max-w-7xl">

                {/* HEADER */}
                <div className="mb-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                        Reports & Data Transparency
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                        Environmental Data Centre
                    </h2>

                    <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                        Explore the environmental parameters monitored by
                        PortGuard and understand how sensor data is
                        processed and presented through the system.
                    </p>
                </div>

                {/* LIVE DATA SUMMARY */}
                <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">

                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

                        <div>
                            <p className="text-xs uppercase tracking-wider text-slate-500">
                                Live Monitoring Snapshot
                            </p>

                            <h3 className="mt-2 text-xl font-bold text-white">
                                Current Environmental Readings
                            </h3>
                        </div>

                        <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                            </span>

                            <span className="text-xs font-semibold text-emerald-400">
                                DATA STREAM ACTIVE
                            </span>
                        </div>

                    </div>

                    {/* DATA GRID */}
                    <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-4">

                        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                            <p className="text-xs text-slate-500">
                                AIR QUALITY
                            </p>
                            <p className="mt-2 text-2xl font-bold text-white">
                                {aqi}
                            </p>
                            <p className="mt-1 text-[11px] text-slate-500">
                                AQI
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                            <p className="text-xs text-slate-500">
                                TEMPERATURE
                            </p>
                            <p className="mt-2 text-2xl font-bold text-white">
                                {temperature}°C
                            </p>
                            <p className="mt-1 text-[11px] text-slate-500">
                                Ambient
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                            <p className="text-xs text-slate-500">
                                HUMIDITY
                            </p>
                            <p className="mt-2 text-2xl font-bold text-white">
                                {humidity}%
                            </p>
                            <p className="mt-1 text-[11px] text-slate-500">
                                Relative
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                            <p className="text-xs text-slate-500">
                                TURBIDITY
                            </p>
                            <p className="mt-2 text-2xl font-bold text-white">
                                {turbidity}
                            </p>
                            <p className="mt-1 text-[11px] text-slate-500">
                                NTU
                            </p>
                        </div>

                    </div>

                    {/* AIR PARAMETERS */}
                    <div className="mt-6">

                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Air Quality Parameters
                        </p>

                        <div className="mt-3 grid grid-cols-2 gap-4 md:grid-cols-4">

                            <div className="rounded-xl bg-slate-950 p-4">
                                <p className="text-xs text-slate-500">
                                    PM2.5
                                </p>
                                <p className="mt-2 text-xl font-bold text-white">
                                    {pm25}
                                </p>
                            </div>

                            <div className="rounded-xl bg-slate-950 p-4">
                                <p className="text-xs text-slate-500">
                                    PM10
                                </p>
                                <p className="mt-2 text-xl font-bold text-white">
                                    {pm10}
                                </p>
                            </div>

                            <div className="rounded-xl bg-slate-950 p-4">
                                <p className="text-xs text-slate-500">
                                    CO
                                </p>
                                <p className="mt-2 text-xl font-bold text-white">
                                    {co}
                                </p>
                            </div>

                            <div className="rounded-xl bg-slate-950 p-4">
                                <p className="text-xs text-slate-500">
                                    NO₂
                                </p>
                                <p className="mt-2 text-xl font-bold text-white">
                                    {no2}
                                </p>
                            </div>

                        </div>
                    </div>

                </div>

                {/* TRANSPARENCY CARDS */}
                <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">

                    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
                            📡
                        </div>

                        <h3 className="mt-5 text-lg font-bold text-white">
                            Data Collection
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                            Environmental readings are collected from
                            connected monitoring sensors and transmitted
                            to the PortGuard backend.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-400/10 text-xl">
                            🧠
                        </div>

                        <h3 className="mt-5 text-lg font-bold text-white">
                            Data Analysis
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                            Multiple environmental parameters are processed
                            by the monitoring system and used by the machine
                            learning model for condition classification.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-xl">
                            🔄
                        </div>

                        <h3 className="mt-5 text-lg font-bold text-white">
                            Continuous Updates
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                            The prototype dashboard refreshes environmental
                            information automatically so users can observe
                            changing conditions in near real time.
                        </p>
                    </div>

                </div>

                {/* METHODOLOGY */}
                <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8">

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                                Methodology
                            </p>

                            <h3 className="mt-3 text-2xl font-bold text-white">
                                How Environmental Information Is Generated
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-slate-400">
                                PortGuard follows a structured pipeline
                                from environmental sensing to public
                                information. Sensor measurements are received
                                by the backend, processed into a consistent
                                data format and displayed through the web
                                interface.
                            </p>
                        </div>

                        <div className="space-y-3">

                            <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4">
                                <span className="text-cyan-400">01</span>
                                <span className="text-sm text-slate-300">
                                    Environmental sensing
                                </span>
                            </div>

                            <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4">
                                <span className="text-cyan-400">02</span>
                                <span className="text-sm text-slate-300">
                                    Backend data processing
                                </span>
                            </div>

                            <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4">
                                <span className="text-cyan-400">03</span>
                                <span className="text-sm text-slate-300">
                                    Machine learning analysis
                                </span>
                            </div>

                            <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4">
                                <span className="text-cyan-400">04</span>
                                <span className="text-sm text-slate-300">
                                    Public environmental visualization
                                </span>
                            </div>

                        </div>

                    </div>

                </div>

                {/* DISCLAIMER */}
                <div className="mt-6 rounded-2xl border border-yellow-400/10 bg-yellow-400/5 p-5">

                    <div className="flex gap-4">

                        <div className="text-xl">
                            ⚠️
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-yellow-300">
                                Data & Methodology Notice
                            </p>

                            <p className="mt-2 text-xs leading-6 text-slate-400">
                                PortGuard is an academic prototype for
                                environmental monitoring and research.
                                Displayed readings, classifications and
                                visualizations are intended for demonstration
                                and system evaluation and should not be
                                interpreted as official environmental
                                advisories or regulatory measurements.
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default ReportsSection;