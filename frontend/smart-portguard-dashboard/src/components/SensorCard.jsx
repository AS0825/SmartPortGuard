function SensorCard({ title, value, unit, color }) {
  return (
    <div className="bg-slate-900 rounded-xl p-6 shadow-lg border border-slate-800 hover:scale-105 transition duration-300">

      <h3 className="text-gray-400 text-lg">
        {title}
      </h3>

      <h1 className={`text-4xl font-bold mt-3 ${color}`}>
        {value}
      </h1>

      <p className="text-gray-500 mt-2">
        {unit}
      </p>

    </div>
  );
}

export default SensorCard;