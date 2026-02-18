import DoctorPanel from "../Doctor/DoctorPanel"
import DoctorHeader from "../Doctor/DoctorHeader"
import { Link } from 'react-router-dom';
import DoctorAnalytics from "./DoctorAnalytics";

const DoctorDashboard = () => {
 return (
    <section className="flex relative overflow-hidden h-screen font-poppins bg-[#E5E7EB]">

      <DoctorPanel className="shrink-0" />

      <main className="relative flex flex-col flex-1 overflow-y-auto">

        <DoctorHeader />

        <div className="max-w-full w-[1320px] mt-[70px] px-4 sm:px-6 lg:px-12 ml-auto">
          <div className="flex flex-col justify-center gap-10 lg:mb-10 mb-0">

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

                <Link to="/doctor/patients/directory">
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