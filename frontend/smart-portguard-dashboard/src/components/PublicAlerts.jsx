function PublicAlerts({ sensorData }) {

    const aqi = Number(
        sensorData?.airQuality?.aqi ?? 0
    );

    const turbidity = Number(
        sensorData?.waterQuality?.turbidity ?? 0
    );

    const pm25 = Number(
        sensorData?.pm25 ?? 0
    );

    // Determine alert level from monitored values
    let alertLevel = "Normal";
    let alertColor = "emerald";
    let alertMessage =
        "Current monitored conditions are being continuously observed.";

    if (aqi > 200 || turbidity > 15 || pm25 > 90) {

        alertLevel = "High Attention";
        alertColor = "red";

        alertMessage =
            "One or more monitored environmental parameters are elevated. Continued observation is recommended.";

    } else if (aqi > 100 || turbidity > 5 || pm25 > 60) {

        alertLevel = "Moderate Attention";
        alertColor = "yellow";

        alertMessage =
            "Some environmental parameters are above lower monitoring ranges. The system is continuing to observe conditions.";

    }


    return (
        <section
            id="alerts"
            className="border-b border-slate-800 bg-slate-950 px-6 py-16"
        >

            <div className="mx-auto max-w-7xl">

                {/* HEADER */}

                <div className="mb-10">

                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                        Public Environmental Alerts
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                        Environmental Alert Centre
                    </h2>

                    <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                        A simplified public view of environmental conditions
                        detected by the PortGuard monitoring system.
                    </p>

                </div>


                {/* ALERT BANNER */}

                <div
                    className={`rounded-3xl border p-7 ${
                        alertColor === "red"
                            ? "border-red-400/20 bg-red-400/5"
                            : alertColor === "yellow"
                            ? "border-yellow-400/20 bg-yellow-400/5"
                            : "border-emerald-400/20 bg-emerald-400/5"
                    }`}
                >

                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                        <div className="flex items-start gap-5">

                            <div
                                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                                    alertColor === "red"
                                        ? "bg-red-400/10"
                                        : alertColor === "yellow"
                                        ? "bg-yellow-400/10"
                                        : "bg-emerald-400/10"
                                }`}
                            >

                                <span className="text-2xl">
                                    {alertColor === "red"
                                        ? "⚠️"
                                        : alertColor === "yellow"
                                        ? "⚠️"
                                        : "✓"}
                                </span>

                            </div>


                            <div>

                                <p className="text-xs uppercase tracking-wider text-slate-500">
                                    Current Status
                                </p>

                                <h3
                                    className={`mt-1 text-2xl font-bold ${
                                        alertColor === "red"
                                            ? "text-red-400"
                                            : alertColor === "yellow"
                                            ? "text-yellow-400"
                                            : "text-emerald-400"
                                    }`}
                                >
                                    {alertLevel}
                                </h3>

                                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                                    {alertMessage}
                                </p>

                            </div>

                        </div>


                        <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2">

                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                            <span className="text-xs font-semibold text-slate-300">
                                MONITORING ACTIVE
                            </span>

                        </div>

                    </div>

                </div>


                {/* INDICATOR CARDS */}

                <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">


                    {/* AQI */}

                    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">

                        <div className="flex items-center justify-between">

                            <p className="text-xs uppercase tracking-wider text-slate-500">
                                Air Quality
                            </p>

                            <span className="text-xl">
                                🌫️
                            </span>

                        </div>

                        <p className="mt-4 text-3xl font-bold text-white">
                            {aqi}
                        </p>

                        <p className="mt-2 text-xs text-slate-500">
                            Current AQI reading
                        </p>

                    </div>


                    {/* PM2.5 */}

                    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">

                        <div className="flex items-center justify-between">

                            <p className="text-xs uppercase tracking-wider text-slate-500">
                                PM2.5
                            </p>

                            <span className="text-xl">
                                🔬
                            </span>

                        </div>

                        <p className="mt-4 text-3xl font-bold text-white">
                            {pm25}
                        </p>

                        <p className="mt-2 text-xs text-slate-500">
                            Fine particulate matter
                        </p>

                    </div>


                    {/* TURBIDITY */}

                    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">

                        <div className="flex items-center justify-between">

                            <p className="text-xs uppercase tracking-wider text-slate-500">
                                Water Turbidity
                            </p>

                            <span className="text-xl">
                                🌊
                            </span>

                        </div>

                        <p className="mt-4 text-3xl font-bold text-white">
                            {turbidity}
                        </p>

                        <p className="mt-2 text-xs text-slate-500">
                            NTU • Current reading
                        </p>

                    </div>

                </div>


                {/* CITIZEN INFORMATION */}

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">


                    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">

                        <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                            For Citizens
                        </p>

                        <h3 className="mt-2 text-xl font-bold text-white">
                            What does this information mean?
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                            PortGuard presents environmental sensor
                            information in a simplified format so that
                            citizens can observe changing environmental
                            conditions around the monitored port area.
                        </p>

                        <div className="mt-5 space-y-3">

                            <div className="flex gap-3">

                                <span className="text-cyan-400">
                                    →
                                </span>

                                <p className="text-sm text-slate-400">
                                    Air quality indicators help track changes
                                    in monitored atmospheric conditions.
                                </p>

                            </div>

                            <div className="flex gap-3">

                                <span className="text-cyan-400">
                                    →
                                </span>

                                <p className="text-sm text-slate-400">
                                    Water turbidity provides an indication of
                                    suspended particles in monitored water.
                                </p>

                            </div>

                            <div className="flex gap-3">

                                <span className="text-cyan-400">
                                    →
                                </span>

                                <p className="text-sm text-slate-400">
                                    Continuous monitoring helps identify
                                    changing environmental conditions.
                                </p>

                            </div>

                        </div>

                    </div>


                    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">

                        <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                            Important Notice
                        </p>

                        <h3 className="mt-2 text-xl font-bold text-white">
                            Understanding the data
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                            PortGuard is a prototype environmental
                            monitoring system developed for academic and
                            research purposes. Sensor readings and model
                            predictions should be interpreted as monitoring
                            information and not as an official environmental
                            advisory.
                        </p>

                        <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950 p-4">

                            <p className="text-xs text-slate-500">
                                DATA STATUS
                            </p>

                            <p className="mt-1 text-sm font-semibold text-emerald-400">
                                Live prototype monitoring active
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default PublicAlerts;