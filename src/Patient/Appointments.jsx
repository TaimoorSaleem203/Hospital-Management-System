import PatientPanel from "./PatientPanel"
import PatientTable from "./PatientTable"
import PatientHeader from "./PatientHeader"

const Appointments = () => {
  return (
    <section className="flex min-h-screen font-poppins bg-[#E5E7EB]">
        <PatientPanel />
        <main className="flex-1 overflow-y-auto">
          <PatientHeader />
          <div className="relative flex flex-col gap-5 px-10 mt-10 max-w-[1300px] w-full ml-auto">
            {/* <button className="bg-primary-dark text-white max-w-[200px] ml-auto font-medium p-2 px-6 active:scale-[98%] rounded-lg">Add Appointment</button> */}
            <PatientTable />

          </div>
        </main>
    </section>
  )
}

export default Appointments