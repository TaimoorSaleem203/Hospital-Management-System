import AdminPanel from "./AdminPanel.jsx";
import AdminHeader from "./AdminHeader.jsx";
import AdminDoctorsForm from "./AdminDoctorsForm.jsx";
const AdminDoctors = () => {
    return (
        <section className="flex min-h-screen font-poppins bg-[#E5E7EB]">
            <AdminPanel />
            <main className="flex-1 overflow-y-auto">
                <AdminHeader />
                <div className="relative flex gap-5 px-10 mt-10 max-w-[960px] sm:max-w-[1300px] max-h-full w-full ml-auto">
                    {/* <button className="bg-primary-dark text-white max-w-[200px] ml-auto font-medium p-2 px-6 active:scale-[98%] rounded-lg">Add Appointment</button> */}
                    <AdminDoctorsForm/>
                </div>
            </main>
        </section>
    )
}
export default AdminDoctors
