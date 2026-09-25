function StatusBar() {
  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">

      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
        <span className="text-white font-medium">
          All Sensors Online
        </span>
      </div>

      <div className="text-center">
        <p className="text-gray-400 text-sm">Last Updated</p>
        <p className="text-cyan-400 font-semibold">09:45 PM</p>
      </div>

      <div className="text-center">
        <p className="text-gray-400 text-sm">AI Prediction</p>
        <p className="text-green-400 font-semibold">
          Moderate Pollution
        </p>
      </div>

      <div className="flex items-center gap-2">

<span className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></span>

<p className="text-green-400">
LIVE SENSOR CONNECTION
</p>

</div>

    </div>
  );
}

export default StatusBar;