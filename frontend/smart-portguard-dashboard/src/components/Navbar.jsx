function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-5 flex justify-between items-center shadow-lg">

      <div>

        <h1 className="text-3xl font-bold text-cyan-400">
          PortGuard
        </h1>

        <p className="text-gray-400 text-sm">
          Environmental Monitoring Dashboard
        </p>

      </div>

      <div className="flex gap-5">

        <button className="bg-cyan-500 px-4 py-2 rounded-lg">
          Alerts
        </button>

        <button className="bg-gray-700 px-4 py-2 rounded-lg">
          Admin
        </button>

      </div>

    </nav>
  );
}

export default Navbar;