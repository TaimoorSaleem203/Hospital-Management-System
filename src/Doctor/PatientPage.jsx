import { useState } from 'react'
import PatientsForm from './PatientsForm'
import DoctorPanel from './DoctorPanel'
import DoctorHeader from './DoctorHeader'
import { getLocalStorage } from "../components/addLocalStorage"

const PatientPage = () => {

  const [patientData, setPatientData] = useState(()=>getLocalStorage())

  return (
    <>

      <section className="flex overflow-hidden min-h-screen h-full font-poppins bg-[#E5E7EB]">
        <DoctorPanel />
        <main className="relative flex-1">
          <DoctorHeader />
          <div className={`flex mt-10 flex-col max-w-[1080px] xl:max-w-7xl ml-auto pb-2 gap-5 px-10 w-full`}>
            <PatientsForm  patientData={patientData} setPatientData={setPatientData}/>
            {/* <PatientTable /> */}
          </div>          
        </main>
      </section>

    </>
  )
}

export default PatientPage