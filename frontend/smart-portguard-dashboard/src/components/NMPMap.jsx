import React from "react";

function NMPMap({ sensorData, prediction }) {
  const pollutionLevel =
    prediction?.prediction ||
    prediction ||
    "Moderate";

  const getStatus = () => {
    const level = String(pollutionLevel).toLowerCase();

    if (level.includes("high")) return "high";
    if (level.includes("low")) return "low";

    return "moderate";
  };

  const status = getStatus();

  const statusConfig = {
    low: {
      label: "LOW RISK",
      marker: "bg-emerald-400",
      glow: "shadow-emerald-400/50",
      text: "text-emerald-400",
    },

    moderate: {
      label: "MODERATE RISK",
      marker: "bg-yellow-400",
      glow: "shadow-yellow-400/50",
      text: "text-yellow-400",
    },

    high: {
      label: "HIGH RISK",
      marker: "bg-red-500",
      glow: "shadow-red-500/50",
      text: "text-red-400",
    },
  };

  const currentStatus = statusConfig[status];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-xl">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Geographic Monitoring
          </p>

          <h2 className="mt-1 text-lg font-semibold text-white">
            NMPT Environmental Map
          </h2>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5">

          <span className="relative flex h-2.5 w-2.5">
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full ${currentStatus.marker} opacity-75`}
            />

            <span
              className={`relative inline-flex h-2.5 w-2.5 rounded-full ${currentStatus.marker}`}
            />
          </span>

          <span className={`text-xs font-semibold ${currentStatus.text}`}>
            {currentStatus.label}
          </span>

        </div>

      </div>


      {/* Map Area */}
      <div className="relative h-[360px] overflow-hidden bg-slate-950">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Decorative coastline */}
        <div className="absolute -right-20 top-[-60px] h-[500px] w-[300px] rotate-12 rounded-[45%] border border-cyan-900/40 bg-cyan-950/20" />

        <div className="absolute -right-32 top-20 h-[420px] w-[250px] rotate-[18deg] rounded-[50%] border border-cyan-800/30 bg-cyan-950/10" />


        {/* Port label */}
        <div className="absolute left-5 top-5 rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 backdrop-blur">

          <p className="text-xs text-slate-400">
            MONITORING LOCATION
          </p>

          <p className="mt-1 text-sm font-semibold text-white">
            New Mangalore Port
          </p>

          <p className="text-xs text-slate-500">
            NMPT • Karnataka, India
          </p>

        </div>


        {/* Sensor Zone 1 */}
        <div className="absolute left-[24%] top-[38%]">

          <div className="group relative">

            <div
              className={`absolute -inset-3 animate-pulse rounded-full ${currentStatus.marker} opacity-20`}
            />

            <div
              className={`relative flex h-10 w-10 items-center justify-center rounded-full border-4 border-slate-950 ${currentStatus.marker} shadow-lg ${currentStatus.glow}`}
            >
              <span className="text-sm">
                📡
              </span>
            </div>

            <div className="absolute left-12 top-0 w-32 rounded-lg border border-slate-700 bg-slate-950/95 p-2 opacity-0 shadow-xl transition group-hover:opacity-100">

              <p className="text-xs font-semibold text-white">
                Sensor Zone A
              </p>

              <p className="mt-1 text-[11px] text-slate-400">
                Temperature: {sensorData?.temperature?.value ?? "--"} °C
              </p>

              <p className="text-[11px] text-slate-400">
                AQI: {sensorData?.airQuality?.aqi ?? "--"}
              </p>

            </div>

          </div>

        </div>


        {/* Sensor Zone 2 */}
        <div className="absolute left-[47%] top-[58%]">

          <div className="group relative">

            <div
              className={`absolute -inset-3 animate-pulse rounded-full ${currentStatus.marker} opacity-20`}
            />

            <div
              className={`relative flex h-10 w-10 items-center justify-center rounded-full border-4 border-slate-950 ${currentStatus.marker} shadow-lg ${currentStatus.glow}`}
            >
              <span className="text-sm">
                📡
              </span>
            </div>

            <div className="absolute left-12 top-0 w-32 rounded-lg border border-slate-700 bg-slate-950/95 p-2 opacity-0 shadow-xl transition group-hover:opacity-100">

              <p className="text-xs font-semibold text-white">
                Sensor Zone B
              </p>

              <p className="mt-1 text-[11px] text-slate-400">
                Humidity: {sensorData?.humidity?.value ?? "--"} %
              </p>

              <p className="text-[11px] text-slate-400">
                Turbidity: {sensorData?.waterQuality?.turbidity ?? "--"} NTU
              </p>

            </div>

          </div>

        </div>


        {/* Port Zone */}
        <div className="absolute left-[63%] top-[28%]">

          <div className="flex items-center gap-2 rounded-lg border border-cyan-800/50 bg-cyan-950/60 px-3 py-2 backdrop-blur">

            <span className="text-lg">
              ⚓
            </span>

            <div>
              <p className="text-xs font-semibold text-cyan-300">
                PORT AREA
              </p>

              <p className="text-[10px] text-slate-400">
                NMPT Monitoring Zone
              </p>
            </div>

          </div>

        </div>


        {/* Bottom legend */}
        <div className="absolute bottom-4 left-4 flex items-center gap-4 rounded-lg border border-slate-700 bg-slate-950/90 px-4 py-2 backdrop-blur">

          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="text-[11px] text-slate-400">
              Low
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="text-[11px] text-slate-400">
              Moderate
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <span className="text-[11px] text-slate-400">
              High
            </span>
          </div>

        </div>

      </div>


      {/* Footer statistics */}
      <div className="grid grid-cols-3 divide-x divide-slate-800 border-t border-slate-800">

        <div className="p-4 text-center">

          <p className="text-xs text-slate-500">
            ACTIVE ZONES
          </p>

          <p className="mt-1 text-lg font-semibold text-white">
            2
          </p>

        </div>

        <div className="p-4 text-center">

          <p className="text-xs text-slate-500">
            AQI
          </p>

          <p className={`mt-1 text-lg font-semibold ${currentStatus.text}`}>
            {sensorData?.airQuality?.aqi ?? "--"}
          </p>

        </div>

        <div className="p-4 text-center">

          <p className="text-xs text-slate-500">
            TURBIDITY
          </p>

          <p className="mt-1 text-lg font-semibold text-cyan-400">
            {sensorData?.waterQuality?.turbidity ?? "--"} NTU
          </p>

        </div>

      </div>

    </div>
  );
}

export default NMPMap;