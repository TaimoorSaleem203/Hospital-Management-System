import doctorProfile from '../assets/doctorProfile.png'
const DoctorHeader = () => {
    return (
        <header className='fixed top-0 left-0 w-full bg-white border-b border-[#d7d9dd]'>
            <div className="max-w-[1320px] ml-auto min-h-[82px] flex justify-between items-center px-4 md:px-6 lg:px-10">
                <h1 className="text-text-heading ml-5 text-2xl font-semibold">Health Overview</h1>
                <div className="relative">
                    <i className="cursor-pointer ri-notification-line font-semibold pr-5 text-xl border-r border-[#d7d9dd]"></i>
                    <span className="absolute right-[20px] bg-red-500 w-[10px] h-[10px] rounded-full"></span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="text-right">
                        <h4 className="text-text-heading font-semibold text-sm">Dr Smith</h4>
                        <p className="text-text-body text-xs font-medium tracking-wider">PREMIUM MEMBER</p>
                    </div>
                    <img src={doctorProfile} className="max-w-[50px] mx-auto w-full cursor-pointer" alt="patientImg" />
                </div>
            </div>

        </header>
    )
}

export default DoctorHeader