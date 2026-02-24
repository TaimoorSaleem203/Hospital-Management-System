import { useState } from "react"
import { getAppointment } from "../components/addLocalStorage"
import DoctorHeader from "./DoctorHeader"
import DoctorPanel from "./DoctorPanel"
import DoctorTable from "./DoctorTable"

const DoctorPatientList = () => {
  const [appoint, setAppoint] = useState(() => getAppointment())

  return (

      <section className="flex overflow-hidden min-h-screen h-full font-poppins bg-[#E5E7EB]">
        <DoctorPanel />
        <main className="relative flex-1">
          <DoctorHeader />
          <div className={`flex px-12 mt-28 flex-col max-w-[1080px] xl:max-w-7xl justify-center pb-8 gap-5 w-full ml-auto`}>
            <DoctorTable appoint={appoint} setAppoint={setAppoint} />
          </div>
        </main>
      </section>
  )
}

export default DoctorPatientList