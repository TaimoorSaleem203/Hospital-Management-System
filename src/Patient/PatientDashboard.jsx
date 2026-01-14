import PatientPanel from "./PatientPanel"
import PatientTable from "./PatientTable"
import PatientHeader from "./PatientHeader"

const PatientDashboard = () => {
  return (
    <section className="flex min-h-screen font-poppins bg-[#E5E7EB]">

      {/* Sidebar */}
      <PatientPanel />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">

        <PatientHeader />

        <div className="px-4 sm:px-6 lg:px-10 max-w-[1300px] ml-auto">
          <div className="flex flex-col gap-10">

            {/* Welcome Card */}
            <div className="mt-8 rounded-lg p-10 min-h-[180px]
              shadow-lg shadow-text-body/30
              bg-gradient-to-tr from-[#0FB9B1] to-[#009E9A]">

              <h1 className="text-3xl font-semibold text-white">
                Welcome back, Alex Johnson!
              </h1>

              <p className="mt-2 max-w-[800px] text-white/70">
                Your health summary is looking great this week.
              </p>

              <button className="mt-8 bg-text-heading text-white px-6 py-2 rounded-lg active:scale-95">
                View Records
              </button>
            </div>

            <PatientTable />

          </div>
        </div>

      </main>
    </section>
  )
}


export default PatientDashboard