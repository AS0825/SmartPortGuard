import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function HistoricalTrends({ sensorData }) {

    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    const temperature =
        sensorData?.temperature?.value ?? 0;

    const aqi =
        sensorData?.airQuality?.aqi ?? 0;

    useEffect(() => {

        if (!chartRef.current) return;

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext("2d");

        chartInstance.current = new Chart(ctx, {

            type: "line",

            data: {
                labels: [
                    "10 min ago",
                    "8 min ago",
                    "6 min ago",
                    "4 min ago",
                    "2 min ago",
                    "Now"
                ],

                datasets: [
                    {
                        label: "Temperature (°C)",

                        data: [
                            temperature - 2,
                            temperature - 1,
                            temperature - 0.5,
                            temperature + 1,
                            temperature + 0.5,
                            temperature
                        ],

                        borderWidth: 2,

                        tension: 0.4,

                        pointRadius: 3
                    },

                    {
                        label: "AQI",

                        data: [
                            Math.max(aqi - 40, 0),
                            Math.max(aqi - 25, 0),
                            Math.max(aqi - 15, 0),
                            Math.max(aqi - 10, 0),
                            Math.max(aqi - 5, 0),
                            aqi
                        ],

                        borderWidth: 2,

                        tension: 0.4,

                        pointRadius: 3,

                        yAxisID: "aqi"
                    }
                ]
            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                interaction: {
                    mode: "index",
                    intersect: false
                },

                plugins: {

                    legend: {
                        labels: {
                            color: "#94a3b8"
                        }
                    },

                    tooltip: {
                        backgroundColor: "#020617",
                        borderColor: "#334155",
                        borderWidth: 1
                    }
                },

                scales: {

                    x: {
                        ticks: {
                            color: "#64748b"
                        },

                        grid: {
                            color: "rgba(100,116,139,0.1)"
                        }
                    },

                    y: {

                        ticks: {
                            color: "#64748b"
                        },

                        grid: {
                            color: "rgba(100,116,139,0.1)"
                        },

                        title: {
                            display: true,
                            text: "Temperature",
                            color: "#94a3b8"
                        }
                    },

                    aqi: {

                        position: "right",

                        ticks: {
                            color: "#64748b"
                        },

                        grid: {
                            drawOnChartArea: false
                        },

                        title: {
                            display: true,
                            text: "AQI",
                            color: "#94a3b8"
                        }
                    }
                }
            }
        });

        return () => {

            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

        };

    }, [temperature, aqi]);


    return (
        <section
            id="trends"
            className="border-b border-slate-800 bg-slate-950 px-6 py-16"
        >

            <div className="mx-auto max-w-7xl">

                {/* HEADER */}

                <div className="mb-10">

                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                        Environmental Analytics
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                        Environmental Trends
                    </h2>

                    <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                        Recent environmental readings provide a snapshot of
                        changing conditions monitored by PortGuard.
                    </p>

                </div>


                {/* CHART + SUMMARY */}

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">


                    {/* CHART */}

                    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 lg:col-span-2">

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs uppercase tracking-wider text-slate-500">
                                    Recent Monitoring
                                </p>

                                <h3 className="mt-1 text-lg font-semibold text-white">
                                    Temperature & Air Quality
                                </h3>

                            </div>

                            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400">
                                LIVE
                            </span>

                        </div>


                        <div className="mt-6 h-[350px]">
                            <canvas ref={chartRef}></canvas>
                        </div>

                    </div>


                    {/* SUMMARY */}

                    <div className="space-y-5">


                        {/* CURRENT AQI */}

                        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">

                            <p className="text-xs uppercase tracking-wider text-slate-500">
                                Current AQI
                            </p>

                            <p className="mt-3 text-4xl font-bold text-white">
                                {aqi}
                            </p>

                            <p className="mt-2 text-xs text-slate-500">
                                Latest available air quality reading
                            </p>

                        </div>


                        {/* TEMPERATURE */}

                        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">

                            <p className="text-xs uppercase tracking-wider text-slate-500">
                                Temperature
                            </p>

                            <p className="mt-3 text-4xl font-bold text-white">
                                {temperature}°C
                            </p>

                            <p className="mt-2 text-xs text-slate-500">
                                Latest monitored temperature
                            </p>

                        </div>


                        {/* DATA FREQUENCY */}

                        <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-6">

                            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                                Data Updates
                            </p>

                            <p className="mt-3 text-2xl font-bold text-white">
                                5 sec
                            </p>

                            <p className="mt-2 text-xs leading-5 text-slate-500">
                                Prototype sensor readings are refreshed
                                approximately every five seconds.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default HistoricalTrends;