import DoctorPanel from "../Doctor/DoctorPanel"
import DoctorHeader from "../Doctor/DoctorHeader"
import { Link } from 'react-router-dom';
import DoctorAnalytics from "./DoctorAnalytics";

const DoctorDashboard = () => {
 return (
    <section className="flex min-h-screen font-poppins bg-[#E5E7EB]">

      {/* Sidebar */}
      <DoctorPanel />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">

        <DoctorHeader />

        <div className="px-4 sm:px-6 lg:px-10 max-w-[1300px] mx-auto">
          <div className="flex flex-col gap-10">

            {/* Welcome Card */}
            <div className="mt-8 rounded-lg p-10 min-h-[180px]
              shadow-lg shadow-text-body/30
              bg-gradient-to-tr from-[#0FB9B1] to-[#009E9A]">

              <h1 className="text-3xl font-semibold text-white">
                Welcome back, Dr Smith!
              </h1>

              <p className="mt-2 max-w-[800px] text-white/70">
                Here's an overview of your patients and clinic today.
              </p>

              <div className="flex items-center gap-5">

                <Link to="/doctors/patients/directory">
                  <button className="mt-8 bg-white text-primary font-semibold px-6 py-2 rounded-lg active:scale-95">
                    View Patients
                  </button>
                </Link>
                <Link to="/doctor/appointment/list">
                  <button className="mt-8 bg-text-heading text-white px-6 py-2 rounded-lg active:scale-95">
                    View Appointments 
                  </button>
                </Link>
              </div>
            </div>

            <DoctorAnalytics />
          </div>
        </div>

      </main>
    </section>
  )
}

export default DoctorDashboard