import DoctorHeader from "./DoctorHeader"
import DoctorPanel from "./DoctorPanel"
import DoctorTable from "./DoctorTable"
import AppointmentsForm from "./AppointmentsForm"

const DoctorAppointments = () => {
  return (
    <section className="flex min-h-screen font-poppins bg-[#E5E7EB]">
        <DoctorPanel />
        <main className="flex-1 overflow-y-auto">
          <DoctorHeader />
          <div className="relative flex gap-5 px-10 mt-10 max-w-[960px] sm:max-w-[1300px] w-full ml-auto">
            {/* <button className="bg-primary-dark text-white max-w-[200px] ml-auto font-medium p-2 px-6 active:scale-[98%] rounded-lg">Add Appointment</button> */}
            <AppointmentsForm />
            <DoctorTable />
          </div>
        </main>
    </section>
  )
}

export default DoctorAppointments   