import ladyDoctor from "../assets/ladyDoctor.png"
import maleDoctor from "../assets/maleDoctor.png"

const DoctorImg = () => {
  return (

    <>
      <div className="w-full max-w-7xl mx-auto relative flex items-center justify-center">
        <img
          src={maleDoctor}
          alt="maleDoctor"
          className="hidden sm:block absolute bottom-0 h-full w-full object-contain"
        />
        <img
          src={ladyDoctor}
          alt="ladyDoctor"
          className="hidden sm:block absolute bottom-0 w-full h-full object-contain"
        />
      </div>
    </>
  )
}

export default DoctorImg