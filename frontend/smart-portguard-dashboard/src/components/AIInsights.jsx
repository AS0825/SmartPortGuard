import { useEffect, useState } from "react";
import { getPrediction } from "../services/api";

function AIInsights({ sensorData }) {

    const [prediction, setPrediction] = useState("Analyzing...");
    const [loading, setLoading] = useState(false);

    const fetchPrediction = async () => {

        if (!sensorData) return;

        try {

            setLoading(true);

            const result = await getPrediction({

                temperature:
                    sensorData?.temperature?.value ?? 0,

                humidity:
                    sensorData?.humidity?.value ?? 0,

                air_quality:
                    sensorData?.airQuality?.aqi ?? 0,

                pm25:
                    sensorData?.pm25 ?? 0,

                pm10:
                    sensorData?.pm10 ?? 0,

                co:
                    sensorData?.co ?? 0,

                no2:
                    sensorData?.no2 ?? 0,

                turbidity:
                    sensorData?.waterQuality?.turbidity ?? 0

            });

            if (result?.prediction) {
                setPrediction(result.prediction);
            }

        } catch (error) {

            console.error(
                "Prediction error:",
                error
            );

            setPrediction("Unavailable");

        } finally {

            setLoading(false);

        }
    };


    useEffect(() => {

        fetchPrediction();

        const interval = setInterval(() => {
            fetchPrediction();
        }, 10000);

        return () => clearInterval(interval);

    }, [sensorData]);


    const getPredictionStyle = () => {

        if (prediction === "Low") {

            return {
                border: "border-emerald-400/20",
                background: "bg-emerald-400/10",
                text: "text-emerald-400",
                icon: "✓"
            };

        }

        if (prediction === "Moderate") {

            return {
                border: "border-yellow-400/20",
                background: "bg-yellow-400/10",
                text: "text-yellow-400",
                icon: "!"
            };

        }

        if (prediction === "High") {

            return {
                border: "border-red-400/20",
                background: "bg-red-400/10",
                text: "text-red-400",
                icon: "!"
            };

        }

        return {
            border: "border-slate-700",
            background: "bg-slate-800/50",
            text: "text-slate-400",
            icon: "..."
        };
    };


    const style = getPredictionStyle();


    return (
        <section
            id="alerts"
            className="border-b border-slate-800 bg-slate-900/30 px-6 py-16"
        >

            <div className="mx-auto max-w-7xl">


                {/* HEADER */}

                <div className="mb-10">

                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                        Artificial Intelligence
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                        Environmental Risk Intelligence
                    </h2>

                    <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                        PortGuard uses a machine learning model to
                        analyze environmental parameters and classify the
                        current environmental condition.
                    </p>

                </div>


                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">


                    {/* MAIN PREDICTION */}

                    <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-7 lg:col-span-2">

                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-4">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
                                    🤖
                                </div>

                                <div>

                                    <p className="text-xs uppercase tracking-wider text-slate-500">
                                        Machine Learning Prediction
                                    </p>

                                    <h3 className="mt-1 text-xl font-bold text-white">
                                        Current Environmental Condition
                                    </h3>

                                </div>

                            </div>


                            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                                AI MODEL
                            </span>

                        </div>


                        {/* RESULT */}

                        <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/60 px-6 py-10 text-center">

                            <div
                                className={`flex h-24 w-24 items-center justify-center rounded-full border ${style.border} ${style.background}`}
                            >

                                <span
                                    className={`text-4xl font-bold ${style.text}`}
                                >
                                    {loading ? "..." : style.icon}
                                </span>

                            </div>


                            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-slate-500">
                                Predicted Condition
                            </p>


                            <h3
                                className={`mt-2 text-4xl font-bold ${style.text}`}
                            >
                                {prediction}
                            </h3>


                            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">

                                {prediction === "Low" &&
                                    "Current monitored parameters indicate a lower environmental risk condition."
                                }

                                {prediction === "Moderate" &&
                                    "Current monitored parameters indicate a moderate environmental condition requiring continued observation."
                                }

                                {prediction === "High" &&
                                    "Current monitored parameters indicate a higher environmental risk condition requiring closer monitoring."
                                }

                                {(prediction === "Analyzing..." ||
                                    prediction === "Unavailable") &&
                                    "The monitoring system is analyzing the latest sensor readings."
                                }

                            </p>

                        </div>

                    </div>


                    {/* MODEL INFORMATION */}

                    <div className="space-y-5">


                        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">

                            <p className="text-xs uppercase tracking-wider text-slate-500">
                                Model
                            </p>

                            <p className="mt-3 text-xl font-bold text-white">
                                Random Forest
                            </p>

                            <p className="mt-2 text-xs leading-5 text-slate-500">
                                A supervised machine learning model trained
                                using environmental monitoring parameters.
                            </p>

                        </div>


                        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">

                            <p className="text-xs uppercase tracking-wider text-slate-500">
                                Input Parameters
                            </p>

                            <div className="mt-4 grid grid-cols-2 gap-3">

                                <div className="rounded-lg bg-slate-900 p-3">
                                    <p className="text-xs text-slate-500">
                                        Temperature
                                    </p>
                                    <p className="mt-1 text-sm font-semibold text-white">
                                        Updated
                                    </p>
                                </div>

                                <div className="rounded-lg bg-slate-900 p-3">
                                    <p className="text-xs text-slate-500">
                                        Humidity
                                    </p>
                                    <p className="mt-1 text-sm font-semibold text-white">
                                        Updated
                                    </p>
                                </div>

                                <div className="rounded-lg bg-slate-900 p-3">
                                    <p className="text-xs text-slate-500">
                                        PM2.5 / PM10
                                    </p>
                                    <p className="mt-1 text-sm font-semibold text-white">
                                        Updated
                                    </p>
                                </div>

                                <div className="rounded-lg bg-slate-900 p-3">
                                    <p className="text-xs text-slate-500">
                                        Gas Sensors
                                    </p>
                                    <p className="mt-1 text-sm font-semibold text-white">
                                            Updated
                                    </p>
                                </div>

                            </div>

                        </div>


                        <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-6">

                            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                                System Insight
                            </p>

                            <p className="mt-3 text-sm leading-6 text-slate-400">

                                The prediction is generated from the latest
                                environmental sensor readings and is updated
                                automatically as new data becomes available.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default AIInsights;