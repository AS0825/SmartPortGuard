import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
    const [page, setPage] = useState("home");

    return (
        <>
            {page === "home" ? (
                <Home />
            ) : (
                <Dashboard />
            )}
        </>
    );
}

export default App;