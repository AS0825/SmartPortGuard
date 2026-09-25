import { useEffect, useState } from "react";

import { getSensorData } from "../services/sensorService";

import Navbar from "../components/Navbar";
import SensorCard from "../components/SensorCard";
import StatusBar from "../components/StatusBar";
import SensorChart from "../components/Charts/SensorChart";
import PredictionCard from "../components/PredictionCard";
import AlertCard from "../components/AlertCard";
import NMPMap from "../components/NMPMap";


function Dashboard() {

    // ============================================================
    // SENSOR DATA
    // ============================================================

    const [sensorData, setSensorData] = useState({

        temperature: {
            value: 0
        },

        humidity: {
            value: 0
        },

        airQuality: {
            aqi: 0
        },

        waterQuality: {
            turbidity: 0
        },

        pm25: 0,
        pm10: 0,
        co: 0,
        no2: 0

    });


    // ============================================================
    // AI PREDICTION
    // ============================================================

    const [prediction, setPrediction] = useState(null);


    // ============================================================
    // CHART HISTORY
    // ============================================================

    const [history, setHistory] = useState({

        temperature: [
            28,
            29,
            30,
            31,
            29,
            30
        ],

        pollution: [
            390,
            410,
            430,
            420,
            415,
            425
        ]

    });

    
    {/* =========================
    NMPT LIVE MONITORING
========================= */}

<div className="mt-10">

  <NMPMap
    sensorData={sensorData}
    prediction={prediction}
  />

</div>


    // ============================================================
    // GET SENSOR DATA FROM FLASK
    // ============================================================

    const fetchSensorData = async () => {

        try {

            const newData = await getSensorData();


            // Update sensor cards

            setSensorData(newData);


            // Update chart history

            setHistory(prev => ({

                temperature: [

                    ...prev.temperature.slice(-19),

                    Number(newData.temperature.value)

                ],


                pollution: [

                    ...prev.pollution.slice(-19),

                    Number(newData.airQuality.aqi)

                ]

            }));


        }

        catch (error) {

            console.error(
                "Failed to fetch sensor data:",
                error
            );

        }

    };


    // ============================================================
    // REAL-TIME UPDATES
    // ============================================================

    useEffect(() => {


        // Get data immediately
        fetchSensorData();


        // Get new data every 5 seconds

        const interval = setInterval(() => {

            fetchSensorData();

        }, 5000);


        // Cleanup

        return () => {

            clearInterval(interval);

        };


    }, []);


    // ============================================================
    // DASHBOARD
    // ============================================================

    return (

        <div className="min-h-screen bg-slate-950">


            {/* ====================================================
                NAVBAR
            ==================================================== */}

            <Navbar />


            <main className="max-w-7xl mx-auto px-6 py-8">


                {/* =================================================
                    STATUS BAR
                ================================================= */}

                <StatusBar />


                {/* =================================================
                    SENSOR CARDS
                ================================================= */}

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">


                    <SensorCard

                        title="🌡 Temperature"

                        value={sensorData.temperature.value}

                        unit="°C"

                        color="text-red-400"

                    />


                    <SensorCard

                        title="💧 Humidity"

                        value={sensorData.humidity.value}

                        unit="%"

                        color="text-blue-400"

                    />


                    <SensorCard

                        title="🌫 Air Quality"

                        value={sensorData.airQuality.aqi}

                        unit="AQI"

                        color="text-green-400"

                    />


                    <SensorCard

                        title="🌊 Turbidity"

                        value={sensorData.waterQuality.turbidity}

                        unit="NTU"

                        color="text-cyan-400"

                    />


                </div>


                {/* =================================================
                    CHARTS
                ================================================= */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">


                    <SensorChart

                        title="Environmental Conditions"

                        values={history.temperature}

                        color="#3b82f6"

                    />


                    <SensorChart

                        title="Pollution Indicators"

                        values={history.pollution}

                        color="#22c55e"

                    />


                </div>


                {/* =================================================
                    AI + ALERT SYSTEM
                ================================================= */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">


                    <PredictionCard

                        sensorData={sensorData}

                        setPrediction={setPrediction}

                    />


                    <AlertCard

                        sensorData={sensorData}

                        prediction={prediction}

                    />


                </div>


            </main>


        </div>

    );

}


export default Dashboard;