import { useEffect, useState } from "react";

import PublicNavbar from "../components/PublicNavbar";
import HeroSection from "../components/HeroSection";
import LiveOverview from "../components/LiveOverview";
import PublicMonitoringMap from "../components/PublicMonitoringMap";
import EnvironmentalInsights from "../components/EnvironmentalInsights";
import HistoricalTrends from "../components/HistoricalTrends";
import AIInsights from "../components/AIInsights";
import PublicAlerts from "../components/PublicAlerts";
import AboutMonitoring from "../components/AboutMonitoring";
import ReportsSection from "../components/ReportsSection";
import PublicFooter from "../components/PublicFooter";
import { getSensorData } from "../services/sensorService";

function Home() {

    const [sensorData, setSensorData] = useState({
        temperature: { value: 0 },
        humidity: { value: 0 },
        airQuality: { aqi: 0 },
        waterQuality: { turbidity: 0 }
    });

    const fetchSensorData = async () => {
        try {

            const data = await getSensorData();

            setSensorData(data);

        } catch (error) {

            console.error(
                "Failed to fetch sensor data:",
                error
            );

        }
    };

    useEffect(() => {

        fetchSensorData();

        const interval = setInterval(() => {
            fetchSensorData();
        }, 5000);

        return () => clearInterval(interval);

    }, []);

    return (
        <div className="min-h-screen bg-slate-950">

            <PublicNavbar />

            <HeroSection
                sensorData={sensorData}
            />

            <LiveOverview
                sensorData={sensorData}
            />
            <PublicMonitoringMap
                sensorData={sensorData}
            />
            <EnvironmentalInsights
                sensorData={sensorData}
            />
            <HistoricalTrends
                sensorData={sensorData}
            />
            <AIInsights
                sensorData={sensorData}
            />
            <PublicAlerts
                sensorData={sensorData}
            />
            <AboutMonitoring />
            <ReportsSection sensorData={sensorData} />
            <PublicFooter />

        </div>
    );
}

export default Home;