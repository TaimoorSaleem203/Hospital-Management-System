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

    const countStatus = () => {

    let actions = patients.map((patient)=>{
      return patient.active
    })
    
    const countMap = {
      Active: 0,
      Inactive: 0
    }

    for (let i = 0; i < actions.length; i++) {
      countMap[actions[i]]++
    }

    return Object.values(countMap)
  }

  const countAction = () => {

    let actions = patients.map((patient)=>{
      return patient.action
    })
    actions.sort()    
    
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
  const countAppoint = () => {

    let apptLen = appointments.length
    let patientLen = patients.length

    return [apptLen,patientLen]
  }

  const actionData = {
    labels: ["Admitted","Recovering", "Critical","Discharged"],
    datasets: [
      {
        label: "Patients",
        data: countAction(),
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

  const appointData = {
    labels: ["No.Of Appointments"],
    datasets: [
      {
        label: "Patients",
        data: countAppoint(),
        backgroundColor: [
          "#3BAFDA",
          "#E5E7EB" // green
        ],
        borderWidth: 1,
      },
    ],
  };
  const statusData = {
    labels: ["Active","Block"],
    datasets: [
      {
        label: "Patients",
        data: countStatus(),
        backgroundColor: [
          "#0FB9B1", // green
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
    <div className="bg-white flex flex-col justify-center gap-6 sm:gap-8 shadow-sm rounded-lg p-8 max-w-[1300px] w-full mx-auto">
      <h1 className="text-2xl font-bold text-text-heading">Analytics Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full mx-auto">
        <Doughnut data={actionData} options={options} className="max-w-[300px] max-h-[300px]"/>
        <Doughnut data={statusData} options={options} className="max-w-[300px] max-h-[300px]"/>
        <Doughnut data={appointData} options={options} className="max-w-[300px] max-h-[300px]"/>
      </div>
    </div>
  );

};


export default DoctorAnalytics