import { AlertTriangle, CheckCircle } from "lucide-react";


function AlertCard({
    sensorData,
    prediction
}) {


    // -----------------------------
    // Get AI Prediction
    // -----------------------------

    const pollutionLevel =
        prediction?.prediction;



    // -----------------------------
    // Sensor Values
    // -----------------------------

    const pm25 =
        Number(sensorData?.airQuality?.pm25 || 0);


    const pm10 =
        Number(sensorData?.airQuality?.pm10 || 0);


    const turbidity =
        Number(
            sensorData?.waterQuality?.turbidity || 0
        );



    // -----------------------------
    // Generate Alert
    // -----------------------------

    let alertType = "safe";

    let alertTitle =
        "Environmental Conditions Normal";

    let alertMessage =
        "No significant environmental risks detected.";



    // HIGH PRIORITY

    if (
        pollutionLevel === "High" ||
        pm25 > 100 ||
        pm10 > 150
    ) {


        alertType = "danger";


        alertTitle =
            "High Pollution Risk";


        alertMessage =
            "High pollution levels detected. Immediate monitoring is recommended.";

    }



    // MODERATE PRIORITY

    else if (
        pollutionLevel === "Moderate" ||
        pm25 > 50 ||
        pm10 > 100 ||
        turbidity > 10
    ) {


        alertType = "warning";


        alertTitle =
            "Moderate Environmental Risk";


        alertMessage =
            "Environmental conditions require monitoring.";

    }



    // -----------------------------
    // UI
    // -----------------------------

    return (

        <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 shadow-lg">


            {/* Header */}

            <div className="flex items-center gap-3 mb-5">


                {alertType === "safe" ? (

                    <CheckCircle
                        className="text-green-400"
                        size={28}
                    />

                ) : (

                    <AlertTriangle
                        className={
                            alertType === "danger"
                                ? "text-red-400"
                                : "text-yellow-400"
                        }
                        size={28}
                    />

                )}


                <h2 className="text-xl font-bold text-white">

                    Environmental Alerts

                </h2>


            </div>



            {/* Alert Status */}

            <div className="space-y-4">


                <p
                    className={`
                        text-xl
                        font-bold
                        ${
                            alertType === "safe"
                                ? "text-green-400"
                                : alertType === "danger"
                                    ? "text-red-400"
                                    : "text-yellow-400"
                        }
                    `}
                >

                    {alertTitle}

                </p>



                <p className="text-gray-400">

                    {alertMessage}

                </p>



                {/* AI Prediction */}

                <div className="border-t border-slate-700 pt-4">


                    <p className="text-gray-400 text-sm">

                        AI Prediction

                    </p>


                    <p
                        className={`
                            text-lg
                            font-semibold
                            ${
                                pollutionLevel === "High"
                                    ? "text-red-400"
                                    : pollutionLevel === "Moderate"
                                        ? "text-yellow-400"
                                        : pollutionLevel === "Low"
                                            ? "text-green-400"
                                            : "text-gray-400"
                            }
                        `}
                    >

                        {pollutionLevel || "Analyzing..."}

                    </p>


                </div>



                {/* Sensor Warning */}

                {(pm25 > 50 ||
                    pm10 > 100 ||
                    turbidity > 10) && (

                    <div className="border-t border-slate-700 pt-4">


                        <p className="text-yellow-400 font-semibold">

                            Sensor Warning

                        </p>


                        <ul className="text-gray-400 text-sm mt-2 space-y-1">


                            {pm25 > 50 && (

                                <li>

                                    • PM2.5 level is elevated

                                </li>

                            )}


                            {pm10 > 100 && (

                                <li>

                                    • PM10 level is elevated

                                </li>

                            )}


                            {turbidity > 10 && (

                                <li>

                                    • Water turbidity is high

                                </li>

                            )}


                        </ul>


                    </div>

                )}


            </div>


        </div>

    );

}


export default AlertCard;