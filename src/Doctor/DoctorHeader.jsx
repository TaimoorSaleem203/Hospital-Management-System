import doctorProfile from '../assets/doctorProfile.png'
const DoctorHeader = () => {
    return (
        <div className="relative max-w-[1080px] sm:max-w-[1330px] min-h-[82px] bg-white flex justify-between items-center px-10 border-b border-[#d7d9dd]">
            <h1 className="text-text-heading text-2xl font-semibold">Health Overview</h1>
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
    )
}

export default DoctorHeader