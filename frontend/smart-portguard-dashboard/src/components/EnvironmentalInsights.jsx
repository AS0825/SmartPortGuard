function EnvironmentalInsights({ sensorData }) {

    const aqi = sensorData?.airQuality?.aqi ?? "--";
    const pm25 = sensorData?.pm25 ?? "--";
    const pm10 = sensorData?.pm10 ?? "--";
    const co = sensorData?.co ?? "--";
    const no2 = sensorData?.no2 ?? "--";
    const turbidity = sensorData?.waterQuality?.turbidity ?? "--";

    return (
        <section
            id="air"
            className="border-b border-slate-800 bg-slate-900/30 px-6 py-16"
        >
            <div className="mx-auto max-w-7xl">

                {/* HEADER */}
                <div className="mb-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                        Environmental Intelligence
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                        Air & Water Quality
                    </h2>

                    <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                        Detailed environmental indicators collected by the
                        PortGuard monitoring system.
                    </p>
                </div>


                {/* MAIN GRID */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">


                    {/* AIR QUALITY */}
                    <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-7">

                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-4">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
                                    🌫️
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-wider text-slate-500">
                                        Atmospheric Monitoring
                                    </p>

                                    <h3 className="mt-1 text-xl font-bold text-white">
                                        Air Quality
                                    </h3>
                                </div>

                            </div>

                            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                                LIVE
                            </span>

                        </div>


                        {/* AQI */}
                        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">

                            <div className="flex items-end justify-between">

                                <div>
                                    <p className="text-xs uppercase tracking-wider text-slate-500">
                                        Air Quality Index
                                    </p>

                                    <p className="mt-2 text-5xl font-bold text-white">
                                        {aqi}
                                    </p>
                                </div>

                                <div className="text-right">
                                    <p className="text-xs text-slate-500">
                                        Current reading
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-yellow-400">
                                        Monitoring active
                                    </p>
                                </div>

                            </div>

                        </div>


                        {/* POLLUTANTS */}
                        <div className="mt-5 grid grid-cols-2 gap-4">

                            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                                <p className="text-xs text-slate-500">
                                    PM2.5
                                </p>

                                <p className="mt-2 text-2xl font-bold text-white">
                                    {pm25}
                                </p>

                                <p className="mt-1 text-[10px] text-slate-500">
                                    Fine particulate matter
                                </p>
                            </div>


                            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                                <p className="text-xs text-slate-500">
                                    PM10
                                </p>

                                <p className="mt-2 text-2xl font-bold text-white">
                                    {pm10}
                                </p>

                                <p className="mt-1 text-[10px] text-slate-500">
                                    Particulate matter
                                </p>
                            </div>


                            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                                <p className="text-xs text-slate-500">
                                    CO
                                </p>

                                <p className="mt-2 text-2xl font-bold text-white">
                                    {co}
                                </p>

                                <p className="mt-1 text-[10px] text-slate-500">
                                    Carbon monoxide
                                </p>
                            </div>


                            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                                <p className="text-xs text-slate-500">
                                    NO₂
                                </p>

                                <p className="mt-2 text-2xl font-bold text-white">
                                    {no2}
                                </p>

                                <p className="mt-1 text-[10px] text-slate-500">
                                    Nitrogen dioxide
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* WATER QUALITY */}
                    <div
                        id="water"
                        className="rounded-3xl border border-slate-800 bg-slate-950/70 p-7"
                    >

                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-4">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-400/10 text-2xl">
                                    🌊
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-wider text-slate-500">
                                        Marine Monitoring
                                    </p>

                                    <h3 className="mt-1 text-xl font-bold text-white">
                                        Water Quality
                                    </h3>
                                </div>

                            </div>

                            <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-400">
                                LIVE
                            </span>

                        </div>


                        {/* TURBIDITY */}
                        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">

                            <p className="text-xs uppercase tracking-wider text-slate-500">
                                Water Turbidity
                            </p>

                            <div className="mt-3 flex items-end gap-3">

                                <p className="text-5xl font-bold text-white">
                                    {turbidity}
                                </p>

                                <p className="mb-1 text-sm text-slate-500">
                                    NTU
                                </p>

                            </div>

                            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
                                <div
                                    className="h-full rounded-full bg-cyan-400"
                                    style={{
                                        width: `${Math.min(
                                            Number(turbidity) * 4,
                                            100
                                        )}%`
                                    }}
                                />
                            </div>

                            <p className="mt-3 text-xs text-slate-500">
                                Turbidity indicates the presence of suspended
                                particles in water.
                            </p>

                        </div>


                        {/* WATER INFORMATION */}
                        <div className="mt-5 space-y-3">

                            <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                                <div>
                                    <p className="text-sm font-semibold text-white">
                                        Marine observation
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        Continuous turbidity monitoring
                                    </p>
                                </div>

                                <span className="text-emerald-400">
                                    ●
                                </span>
                            </div>


                            <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                                <div>
                                    <p className="text-sm font-semibold text-white">
                                        Sensor status
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        Water monitoring node active
                                    </p>
                                </div>

                                <span className="text-emerald-400">
                                    ONLINE
                                </span>
                            </div>


                            <div className="rounded-xl border border-cyan-400/10 bg-cyan-400/5 p-4">

                                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                                    Why it matters
                                </p>

                                <p className="mt-2 text-sm leading-6 text-slate-400">
                                    Monitoring water turbidity can help identify
                                    changes in suspended particles and support
                                    environmental observation around port
                                    waters.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default EnvironmentalInsights;