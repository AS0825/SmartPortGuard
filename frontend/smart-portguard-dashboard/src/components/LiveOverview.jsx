function LiveOverview({ sensorData }) {

    const temperature =
        sensorData?.temperature?.value ?? "--";

    const humidity =
        sensorData?.humidity?.value ?? "--";

    const aqi =
        sensorData?.airQuality?.aqi ?? "--";

    const turbidity =
        sensorData?.waterQuality?.turbidity ?? "--";

    const pm25 =
        sensorData?.pm25 ?? "--";

    const pm10 =
        sensorData?.pm10 ?? "--";


    return (
        <section
            id="monitoring"
            className="border-b border-slate-800 bg-slate-950 px-6 py-16"
        >

            <div className="mx-auto max-w-7xl">

                {/* SECTION HEADER */}

                <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">

                    <div>

                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                            Live Environmental Monitoring
                        </p>

                        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                            Current Conditions
                        </h2>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                            Environmental parameters currently received
                            from the PortGuard monitoring system.
                        </p>

                    </div>


                    {/* LIVE INDICATOR */}

                    <div className="flex items-center gap-2 self-start rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 md:self-auto">

                        <span className="relative flex h-2.5 w-2.5">

                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />

                        </span>

                        <span className="text-xs font-semibold text-emerald-400">
                            LIVE SENSOR DATA
                        </span>

                    </div>

                </div>


                {/* MAIN CARDS */}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">


                    {/* AIR QUALITY */}

                    <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">

                        <div className="flex items-start justify-between">

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
                                🌫️
                            </div>

                            <span className="text-xs text-slate-500">
                                AQI
                            </span>

                        </div>

                        <p className="mt-6 text-sm text-slate-400">
                            Air Quality
                        </p>

                        <p className="mt-1 text-4xl font-bold text-white">
                            {aqi}
                        </p>

                        <p className="mt-2 text-xs text-slate-500">
                            Current air quality index
                        </p>

                    </div>


                    {/* TEMPERATURE */}

                    <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-red-400/30">

                        <div className="flex items-start justify-between">

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-400/10 text-xl">
                                🌡️
                            </div>

                            <span className="text-xs text-slate-500">
                                CLIMATE
                            </span>

                        </div>

                        <p className="mt-6 text-sm text-slate-400">
                            Temperature
                        </p>

                        <p className="mt-1 text-4xl font-bold text-white">
                            {temperature}°C
                        </p>

                        <p className="mt-2 text-xs text-slate-500">
                            Current monitored temperature
                        </p>

                    </div>


                    {/* HUMIDITY */}

                    <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30">

                        <div className="flex items-start justify-between">

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-400/10 text-xl">
                                💧
                            </div>

                            <span className="text-xs text-slate-500">
                                CLIMATE
                            </span>

                        </div>

                        <p className="mt-6 text-sm text-slate-400">
                            Humidity
                        </p>

                        <p className="mt-1 text-4xl font-bold text-white">
                            {humidity}%
                        </p>

                        <p className="mt-2 text-xs text-slate-500">
                            Relative humidity
                        </p>

                    </div>


                    {/* TURBIDITY */}

                    <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">

                        <div className="flex items-start justify-between">

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
                                🌊
                            </div>

                            <span className="text-xs text-slate-500">
                                WATER
                            </span>

                        </div>

                        <p className="mt-6 text-sm text-slate-400">
                            Water Turbidity
                        </p>

                        <p className="mt-1 text-4xl font-bold text-white">
                            {turbidity}
                        </p>

                        <p className="mt-2 text-xs text-slate-500">
                            NTU • Current reading
                        </p>

                    </div>

                </div>


                {/* SECONDARY PARAMETERS */}

                <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">


                    {/* PM */}

                    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs uppercase tracking-wider text-slate-500">
                                    Particulate Matter
                                </p>

                                <p className="mt-1 text-sm text-slate-300">
                                    Fine particles monitored in ambient air
                                </p>

                            </div>

                            <span className="text-2xl">
                                🔬
                            </span>

                        </div>


                        <div className="mt-5 grid grid-cols-2 gap-4">

                            <div className="rounded-xl bg-slate-950 p-4">

                                <p className="text-xs text-slate-500">
                                    PM2.5
                                </p>

                                <p className="mt-1 text-2xl font-bold text-white">
                                    {pm25}
                                </p>

                            </div>


                            <div className="rounded-xl bg-slate-950 p-4">

                                <p className="text-xs text-slate-500">
                                    PM10
                                </p>

                                <p className="mt-1 text-2xl font-bold text-white">
                                    {pm10}
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* LOCATION */}

                    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">

                        <p className="text-xs uppercase tracking-wider text-slate-500">
                            Monitoring Location
                        </p>

                        <div className="mt-4 flex items-center gap-4">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
                                ⚓
                            </div>

                            <div>

                                <h3 className="font-semibold text-white">
                                    New Mangalore Port
                                </h3>

                                <p className="mt-1 text-sm text-slate-400">
                                    Karnataka, India
                                </p>

                            </div>

                        </div>


                        <div className="mt-5 flex items-center gap-2 text-xs text-emerald-400">

                            <span className="h-2 w-2 rounded-full bg-emerald-400" />

                            Monitoring system active

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default LiveOverview;