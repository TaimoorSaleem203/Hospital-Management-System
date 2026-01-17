import AdminHeader from "./AdminHeader.jsx";
import AdminPanel from "./AdminPanel.jsx"
import {Link} from "react-router-dom";
import AdminAnalytics from "./AdminAnalytics.jsx";
const AdminDashboard = () => {
    return (
        <section className="flex min-h-screen font-poppins bg-[#E5E7EB]">

            {/* Sidebar */}
            <AdminPanel />

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">

                <AdminHeader />

                <div className="px-4 sm:px-6 lg:px-10 max-w-[1300px] mx-auto mb-10">
                    <div className="flex flex-col gap-10">

                        <div className="mt-8 rounded-lg p-10 min-h-[180px]
              shadow-lg shadow-text-body/30
              bg-gradient-to-tr from-[#0FB9B1] to-[#009E9A]">

                            <h1 className="text-3xl font-semibold text-white">
                                Welcome back, William Parker!
                            </h1>

                            <p className="mt-2 max-w-[800px] text-white/70">
                                Your health summary is looking great this week.
                            </p>

                            <div className="flex items-center gap-5">
                                <Link to="/admin/patients/directory" className="mt-8 bg-text-heading text-white px-6 py-2 rounded-lg active:scale-95">
                                    View Patients
                                </Link>
                                <Link to="/admin/doctors/directory" className="mt-8 bg-white font-semibold text-primary px-6 py-2 rounded-lg active:scale-95">
                                    View Doctors
                                </Link>
                            </div>

                        </div>

                        <AdminAnalytics />

                    </div>
                </div>

            </main>
        </section>
    )
}
export default AdminDashboard
