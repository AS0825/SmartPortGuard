function PublicMonitoringMap({ sensorData }) {

    const aqi = sensorData?.airQuality?.aqi ?? "--";
    const turbidity = sensorData?.waterQuality?.turbidity ?? "--";

    const getStatus = (value, type) => {

        if (value === "--") return "No Data";

        if (type === "air") {
            if (value <= 100) return "Good";
            if (value <= 200) return "Moderate";
            return "High";
        }

        if (type === "water") {
            if (value <= 5) return "Good";
            if (value <= 15) return "Moderate";
            return "High";
        }

        return "Monitoring";
    };

    const airStatus = getStatus(aqi, "air");
    const waterStatus = getStatus(turbidity, "water");

    return (
        <section
            id="map"
            className="border-b border-slate-800 bg-slate-950 px-6 py-16"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section Header */}
                <div className="mb-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                        Spatial Environmental Monitoring
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                        New Mangalore Port Monitoring Area
                    </h2>

                    <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                        A visual representation of environmental monitoring
                        zones around the port. Sensor readings are updated
                        continuously through the Smart PortGuard system.
                    </p>
                </div>


                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

                    {/* MAP */}
                    <div className="relative min-h-[480px] overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 lg:col-span-2">

                        {/* Grid */}
                        <div
                            className="absolute inset-0 opacity-[0.12]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)",
                                backgroundSize: "45px 45px",
                            }}
                        />

                        {/* Water */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-slate-950 to-blue-950/40" />

                        {/* Port area */}
                        <div className="absolute left-[12%] top-[25%] h-[55%] w-[70%] rounded-[40%] border border-cyan-400/20 bg-slate-800/40 rotate-[-5deg]" />

                        {/* Port label */}
                        <div className="absolute left-[40%] top-[43%] rounded-xl border border-slate-700 bg-slate-950/90 px-5 py-3 text-center shadow-xl backdrop-blur">
                            <p className="text-xs uppercase tracking-widest text-slate-500">
                                Port Zone
                            </p>
                            <p className="mt-1 font-semibold text-white">
                                New Mangalore Port
                            </p>
                        </div>


                        {/* Sensor 1 */}
                        <div className="absolute left-[22%] top-[32%]">
                            <div className="relative">
                                <span className="absolute -inset-3 animate-ping rounded-full bg-emerald-400/20" />
                                <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400 bg-emerald-400/20 text-sm">
                                    🌫️
                                </span>
                            </div>

                            <div className="mt-2 rounded-lg border border-slate-700 bg-slate-950/90 px-3 py-2 backdrop-blur">
                                <p className="text-[10px] text-slate-500">
                                    AIR SENSOR
                                </p>
                                <p className="text-xs font-semibold text-white">
                                    AQI {aqi}
                                </p>
                            </div>
                        </div>


                        {/* Sensor 2 */}
                        <div className="absolute right-[20%] top-[55%]">
                            <div className="relative">
                                <span className="absolute -inset-3 animate-ping rounded-full bg-cyan-400/20" />
                                <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400 bg-cyan-400/20 text-sm">
                                    🌊
                                </span>
                            </div>

                            <div className="mt-2 rounded-lg border border-slate-700 bg-slate-950/90 px-3 py-2 backdrop-blur">
                                <p className="text-[10px] text-slate-500">
                                    WATER SENSOR
                                </p>
                                <p className="text-xs font-semibold text-white">
                                    {turbidity} NTU
                                </p>
                            </div>
                        </div>


                        {/* Sensor 3 */}
                        <div className="absolute left-[55%] bottom-[14%]">
                            <div className="relative">
                                <span className="absolute -inset-3 animate-ping rounded-full bg-blue-400/20" />
                                <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-blue-400 bg-blue-400/20 text-sm">
                                    🌡️
                                </span>
                            </div>

                            <div className="mt-2 rounded-lg border border-slate-700 bg-slate-950/90 px-3 py-2 backdrop-blur">
                                <p className="text-[10px] text-slate-500">
                                    CLIMATE SENSOR
                                </p>
                                <p className="text-xs font-semibold text-white">
                                    Temperature
                                </p>
                            </div>
                        </div>


                        {/* Map controls */}
                        <div className="absolute right-5 top-5 flex flex-col gap-2">

                            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-950/90 text-slate-300 hover:border-cyan-400 hover:text-cyan-400">
                                +
                            </button>

                            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-950/90 text-slate-300 hover:border-cyan-400 hover:text-cyan-400">
                                −
                            </button>

                        </div>


                        {/* Legend */}
                        <div className="absolute bottom-5 left-5 rounded-xl border border-slate-700 bg-slate-950/90 p-4 backdrop-blur">

                            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Monitoring Legend
                            </p>

                            <div className="space-y-2 text-xs">

                                <div className="flex items-center gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                                    <span className="text-slate-300">
                                        Air monitoring
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                                    <span className="text-slate-300">
                                        Water monitoring
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                                    <span className="text-slate-300">
                                        Climate monitoring
                                    </span>
                                </div>

                            </div>
                        </div>

                    </div>


                    {/* STATUS PANEL */}
                    <div className="space-y-5">

                        {/* Air */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">

                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-xl">
                                        🌫️
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-white">
                                            Air Monitoring
                                        </p>

                                        <p className="text-xs text-slate-500">
                                            Current AQI
                                        </p>
                                    </div>
                                </div>

                                <span className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-400">
                                    {airStatus}
                                </span>

                            </div>

                            <div className="mt-6">
                                <p className="text-4xl font-bold text-white">
                                    {aqi}
                                </p>

                                <p className="mt-1 text-xs text-slate-500">
                                    Air Quality Index
                                </p>
                            </div>

                        </div>


                        {/* Water */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">

                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
                                        🌊
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-white">
                                            Water Monitoring
                                        </p>

                                        <p className="text-xs text-slate-500">
                                            Turbidity level
                                        </p>
                                    </div>
                                </div>

                                <span className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-400">
                                    {waterStatus}
                                </span>

                            </div>

                            <div className="mt-6">
                                <p className="text-4xl font-bold text-white">
                                    {turbidity}
                                </p>

                                <p className="mt-1 text-xs text-slate-500">
                                    NTU
                                </p>
                            </div>

                        </div>


                        {/* Location */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">

                            <p className="text-xs uppercase tracking-wider text-slate-500">
                                Monitoring Location
                            </p>

                            <div className="mt-4 flex items-center gap-4">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
                                    📍
                                </div>

                                <div>
                                    <p className="font-semibold text-white">
                                        New Mangalore Port
                                    </p>

                                    <p className="text-xs text-slate-500">
                                        Panambur, Mangaluru, Karnataka
                                    </p>
                                </div>

                            </div>

                            <div className="mt-5 flex items-center gap-2 text-xs text-emerald-400">
                                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                3 monitoring zones active
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default PublicMonitoringMap;