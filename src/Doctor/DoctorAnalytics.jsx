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

  const countActions = () => {

    let actions = patients.map((patient)=>{
      return patient.action
    })
    const countMap = {
      Admitted: 0,
      Recovering: 0,
      Critical: 0,
      Discharged: 0
    }

    for (let i = 0; i < actions.length; i++) {
      countMap[actions[i]]++
    }

    return Object.values(countMap)
  }

  const data = {
    labels: ["Admitted","Recovering", "Critical","Discharged"],
    datasets: [
      {
        label: "Patients",
        data: countActions(),
        backgroundColor: [
          "#1F2D3D", // green
          "#0FB9B1", // red
          "#ef4444",
          "#3BAFDA"
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

};


export default DoctorAnalytics