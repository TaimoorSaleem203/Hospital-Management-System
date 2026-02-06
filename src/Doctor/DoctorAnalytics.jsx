import React from "react";
import { getLocalStorage, getAppointment } from "../components/addLocalStorage";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoctorAnalytics = () => {
    let patients = getLocalStorage()
    let appointments = getAppointment()

      const data = {
    labels: ["Recovered", "Active", "Critical"],
    datasets: [
      {
        label: "Patients",
        // data: patients.map((patient)=>{
        //     if(patient.action)
        // }),
        data:[20,30,50],
        backgroundColor: [
          "#0FB9B1", // green
          "#3b82f6", // blue
          "#ef4444", // red
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="bg-white flex items-start flex-col gap-6 shadow-sm rounded-lg p-8 max-w-[1200px] w-full mx-auto">
      <h1 className="text-2xl font-bold text-text-heading">Analytics Overview</h1>
      <div className="flex items-center justify-between max-w-[300px]">
        <Doughnut data={data} options={options} />
        <Doughnut data={data} options={options} />
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
    
    // return (
        // <>
        {/* <div className="bg-white shadow-sm w-full rounded-lg p-8 max-w-[1200px] mx-auto">
            <h1 className="text-2xl font-bold text-text-heading">Analytics Overview</h1>
            <div className="relative w-full grid grid-cols-1 sm:grid-cols-3 justify-items-center mt-10">
                <svg width="200" height="200" className="scale-125">
                    <circle r="70" cx="100" cy="100" fill="transparent" stroke="lightgrey" stroke-width="1.5rem" stroke-dasharray="439.8" stroke-dashoffset="0"></circle>
                    <circle r="70" cx="100" cy="100" fill="transparent" stroke="#0FB9B1" stroke-width="1.5rem" stroke-dasharray="439.8" stroke-dashoffset={3000-patients.length}></circle>
                </svg>
                <svg width="200" height="200" className="scale-125">
                    <circle r="70" cx="100" cy="100" fill="transparent" stroke="lightgrey" stroke-width="1.5rem" stroke-dasharray="439.8" stroke-dashoffset="0"></circle>
                    <circle r="70" cx="100" cy="100" fill="transparent" stroke="#3BAFDA" stroke-width="1.5rem" stroke-dasharray="439.8" stroke-dashoffset={3000-appointments.length}></circle>
                </svg>
                <svg width="200" height="200" className="scale-125">
                    <circle r="70" cx="100" cy="100" fill="transparent" stroke="lightgrey" stroke-width="1.5rem" stroke-dasharray="439.8" stroke-dashoffset="0"></circle>
                    <circle r="70" cx="100" cy="100" fill="transparent" stroke="#1F2D3D" stroke-width="1.5rem" stroke-dasharray="439.8" stroke-dashoffset="100"></circle>
                </svg>
            </div>
        </div> */}

        

        {/* </> */}

    // )
};


export default DoctorAnalytics