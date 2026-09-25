import { useEffect, useState } from "react";
import { Brain } from "lucide-react";

import { getPrediction } from "../services/api";


function PredictionCard({
    sensorData,
    setPrediction
}) {

    // Store prediction locally for displaying
    const [predictionResult, setPredictionResult] = useState(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);


    useEffect(() => {

        if (!sensorData) {
            return;
        }


        const fetchPrediction = async () => {

            try {

                setLoading(true);
                setError(null);


                // -----------------------------
                // Prepare 8 ML features
                // -----------------------------

                const data = {

                    temperature:
                        Number(sensorData.temperature.value),

                    humidity:
                        Number(sensorData.humidity.value),

                    air_quality:
                        Number(sensorData.airQuality.aqi),

                    pm25:
                        Number(sensorData.airQuality.pm25),

                    pm10:
                        Number(sensorData.airQuality.pm10),

                    co:
                        Number(sensorData.airQuality.co),

                    no2:
                        Number(sensorData.airQuality.no2),

                    turbidity:
                        Number(
                            sensorData.waterQuality.turbidity
                        )

                };


                // -----------------------------
                // Send data to Flask
                // -----------------------------

                const result =
                    await getPrediction(data);


                console.log(
                    "AI Prediction:",
                    result
                );


                // Store locally
                setPredictionResult(result);


                // Send prediction to Dashboard
                setPrediction(result);


            }

            catch (err) {

                console.error(
                    "Prediction Error:",
                    err
                );

                setError(
                    "Unable to connect to AI model"
                );

            }

            finally {

                setLoading(false);

            }

        };


        fetchPrediction();

    }, [sensorData, setPrediction]);


    return (

        <div className="bg-slate-900 border border-cyan-500/30 rounded-xl p-6 shadow-lg">


            {/* =========================
                HEADER
            ========================== */}

            <div className="flex items-center gap-3 mb-5">

                <Brain
                    className="text-cyan-400"
                    size={28}
                />

                <h2 className="text-xl font-bold text-white">

                    AI Pollution Prediction

                </h2>

            </div>



            {/* =========================
                LOADING
            ========================== */}

            {loading && (

                <p className="text-gray-400">

                    Analyzing live sensor data...

                </p>

            )}



            {/* =========================
                ERROR
            ========================== */}

            {!loading && error && (

                <p className="text-red-400">

                    {error}

                </p>

            )}



            {/* =========================
                PREDICTION
            ========================== */}

            {!loading && !error && (

                <div className="space-y-5">


                    {/* Pollution Level */}

                    <div>

                        <p className="text-gray-400 text-sm">

                            Pollution Level

                        </p>


                        <p
                            className={`
                                text-3xl
                                font-bold
                                mt-1
                                ${
                                    !predictionResult
                                        ? "text-gray-400"

                                        : predictionResult.prediction === "High"
                                            ? "text-red-400"

                                            : predictionResult.prediction === "Moderate"
                                                ? "text-yellow-400"

                                                : "text-green-400"
                                }
                            `}
                        >

                            {predictionResult
                                ? predictionResult.prediction
                                : "Waiting..."
                            }

                        </p>

                    </div>



                    {/* AI Model */}

                    <div>

                        <p className="text-gray-400 text-sm">

                            AI Model

                        </p>


                        <p className="text-cyan-400 font-semibold">

                            Random Forest

                        </p>

                    </div>


                </div>

            )}


        </div>

    );

}


export default PredictionCard;