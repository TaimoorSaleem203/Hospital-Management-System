import React from 'react'
import AdminPanel from "./AdminPanel.jsx";
import AdminHeader from "./AdminHeader.jsx";
import AdminDoctorsTable from "./AdminDoctorsTable.jsx";

const AdminDoctorsDirectory = () => {
    return (
        <section className="flex min-h-screen font-poppins bg-[#E5E7EB]">
            <AdminPanel />
            <main className="flex-1 overflow-y-auto">
                <AdminHeader />
                <div className={`relative flex lg:flex-col max-w-[1080px] sm:max-w-[1330px] justify-center pb-10 gap-5 px-10 mt-10 w-full ml-auto`}>
                    <AdminDoctorsTable />
                </div>
            </main>
        </section>
    )
}
export default AdminDoctorsDirectory
