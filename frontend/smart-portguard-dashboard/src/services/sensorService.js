import { getLatestSensorData } from "./api";


// ============================================================
// GET SENSOR DATA FROM FLASK
// ============================================================

export const getSensorData = async () => {

    try {

        const response = await getLatestSensorData();


        // Flask response
        const data = response.data;


        // Convert Flask format
        // into the format used by our React dashboard

        return {

            temperature: {

                value: data.temperature

            },


            humidity: {

                value: data.humidity

            },


            airQuality: {

                aqi: data.air_quality

            },


            waterQuality: {

                turbidity: data.turbidity

            },


            pm25: data.pm25,

            pm10: data.pm10,

            co: data.co,

            no2: data.no2

        };

    }


    catch (error) {

        console.error(
            "Error fetching sensor data:",
            error
        );


        // Return safe fallback values
        // so dashboard does not become blank

        return {

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

        };

    }

};