import React from "react";

import {
  Line
} from "react-chartjs-2";


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";



ChartJS.register(

  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler

);





function SensorChart({ title, values, labels, color }) {



  const data = {


    labels: labels || values.map(
      (_, index)=>`Reading ${index+1}`
    ),



    datasets:[


      {

        label:title,

        data:values,


        borderColor:color,


        backgroundColor:`${color}33`,


        fill:true,


        tension:0.4,


        pointRadius:4,


        pointHoverRadius:7


      }


    ]

  };








  const options = {


    responsive:true,


    maintainAspectRatio:false,



    animation:{


      duration:1000


    },



    plugins:{



      legend:{


        display:true,


        position:"top",



        labels:{


          color:"#e2e8f0"


        }


      },





      title:{


        display:true,


        text:title,


        color:"#ffffff",



        font:{


          size:18,


          weight:"bold"


        }


      }





    },







    scales:{



      x:{


        ticks:{


          color:"#94a3b8",


          maxTicksLimit:6


        },



        grid:{


          color:"rgba(148,163,184,0.1)"


        }



      },







      y:{


        ticks:{


          color:"#94a3b8"


        },



        grid:{


          color:"rgba(148,163,184,0.1)"


        }



      }



    }



  };









  return (


    <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 shadow-lg h-[350px]">


      <Line

        data={data}

        options={options}

      />


    </div>


  );


}



export default SensorChart;