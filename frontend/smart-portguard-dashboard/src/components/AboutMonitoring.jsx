function AboutMonitoring() {

    return (
        <section
            id="about"
            className="border-b border-slate-800 bg-slate-900/30 px-6 py-16"
        >

            <div className="mx-auto max-w-7xl">

                {/* HEADER */}

                <div className="mb-10">

                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                        About PortGuard
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                        Building a Smarter Environmental Future
                    </h2>

                    <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                        PortGuard combines IoT sensing, data analytics
                        and machine learning to support environmental
                        observation around port cities.
                    </p>

                </div>


                {/* WHY MONITORING */}

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

                    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl">
                            🌫️
                        </div>

                        <h3 className="mt-5 text-lg font-bold text-white">
                            Monitor Air
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                            Continuous observation of air-quality indicators
                            can help identify changes in atmospheric
                            conditions around monitored areas.
                        </p>

                    </div>


                    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400/10 text-2xl">
                            🌊
                        </div>

                        <h3 className="mt-5 text-lg font-bold text-white">
                            Monitor Water
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                            Water-quality observations such as turbidity can
                            help track changes in suspended particles in
                            monitored marine environments.
                        </p>

                    </div>


                    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-2xl">
                            🤖
                        </div>

                        <h3 className="mt-5 text-lg font-bold text-white">
                            Predict Conditions
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                            Machine learning analyzes multiple environmental
                            parameters to classify the observed condition
                            into Low, Moderate or High categories.
                        </p>

                    </div>

                </div>


                {/* HOW IT WORKS */}

                <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-950/70 p-7 md:p-9">

                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">

                        <div>

                            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                                System Workflow
                            </p>

                            <h3 className="mt-3 text-2xl font-bold text-white">
                                From Sensor to Environmental Insight
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-slate-400">
                                PortGuard follows a connected monitoring
                                pipeline in which environmental measurements
                                are collected, processed and presented through
                                a public-facing interface.
                            </p>

                        </div>


                        <div className="space-y-4">

                            {/* STEP 1 */}

                            <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4">

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 font-bold text-cyan-400">
                                    01
                                </div>

                                <div>

                                    <p className="font-semibold text-white">
                                        IoT Sensors
                                    </p>

                                    <p className="text-xs text-slate-500">
                                        Environmental parameters are measured.
                                    </p>

                                </div>

                            </div>


                            {/* STEP 2 */}

                            <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4">

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 font-bold text-cyan-400">
                                    02
                                </div>

                                <div>

                                    <p className="font-semibold text-white">
                                        Data Processing
                                    </p>

                                    <p className="text-xs text-slate-500">
                                        Sensor readings are received by the
                                        monitoring backend.
                                    </p>

                                </div>

                            </div>


                            {/* STEP 3 */}

                            <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4">

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 font-bold text-cyan-400">
                                    03
                                </div>

                                <div>

                                    <p className="font-semibold text-white">
                                        Machine Learning
                                    </p>

                                    <p className="text-xs text-slate-500">
                                        Environmental conditions are classified.
                                    </p>

                                </div>

                            </div>


                            {/* STEP 4 */}

                            <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4">

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 font-bold text-cyan-400">
                                    04
                                </div>

                                <div>

                                    <p className="font-semibold text-white">
                                        Public Dashboard
                                    </p>

                                    <p className="text-xs text-slate-500">
                                        Environmental information is displayed
                                        for users.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* SDG */}

                <div className="mt-6 rounded-2xl border border-emerald-400/10 bg-emerald-400/5 p-6">

                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                        <div>

                            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                                Sustainable Development Goal
                            </p>

                            <h3 className="mt-2 text-xl font-bold text-white">
                                Supporting SDG 11 — Sustainable Cities and Communities
                            </h3>

                            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                                The project explores how connected environmental
                                monitoring and data-driven insights can support
                                more sustainable and resilient port-city
                                environments.
                            </p>

                        </div>


                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-xl font-bold text-emerald-400">
                            SDG
                            <br />
                            11
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default AboutMonitoring;