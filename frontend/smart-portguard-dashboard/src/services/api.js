import axios from "axios";


const API = axios.create({

    baseURL:"http://localhost:5000"

});



export const getPrediction = async(sensorData)=>{

    try{

        const response = await API.post(
            "/predict",
            sensorData
        );


        return response.data;


    }
    catch(error){

        console.error(
            "Prediction API Error:",
            error
        );


        return null;

    }

};

export const getLatestSensorData = async () => {

    const response = await API.get(
        "/sensor-data"
    );

    return response.data;

};