
const DoctorAnalytics = () => {
    return (
        <>
        <div className="bg-white shadow-sm w-full rounded-lg p-8 max-w-[1200px] mx-auto">
            <h1 className="text-2xl font-bold text-text-heading">Analytics Overview</h1>
            <div className="relative w-full grid grid-cols-1 sm:grid-cols-3 justify-items-center mt-10">
                <svg width="200" height="200" className="scale-125">
                    <circle r="70" cx="100" cy="100" fill="transparent" stroke="lightgrey" stroke-width="1.5rem" stroke-dasharray="439.8" stroke-dashoffset="0"></circle>
                    <circle r="70" cx="100" cy="100" fill="transparent" stroke="#0FB9B1" stroke-width="1.5rem" stroke-dasharray="439.8" stroke-dashoffset="80"></circle>
                </svg>
                <svg width="200" height="200" className="scale-125">
                    <circle r="70" cx="100" cy="100" fill="transparent" stroke="lightgrey" stroke-width="1.5rem" stroke-dasharray="439.8" stroke-dashoffset="0"></circle>
                    <circle r="70" cx="100" cy="100" fill="transparent" stroke="#3BAFDA" stroke-width="1.5rem" stroke-dasharray="439.8" stroke-dashoffset="100"></circle>
                </svg>
                <svg width="200" height="200" className="scale-125">
                    <circle r="70" cx="100" cy="100" fill="transparent" stroke="lightgrey" stroke-width="1.5rem" stroke-dasharray="439.8" stroke-dashoffset="0"></circle>
                    <circle r="70" cx="100" cy="100" fill="transparent" stroke="#1F2D3D" stroke-width="1.5rem" stroke-dasharray="439.8" stroke-dashoffset="100"></circle>
                </svg>

            </div>
        </div>

        </>

    )
};


export default DoctorAnalytics