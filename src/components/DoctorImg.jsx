import ladyDoctor from "../assets/ladyDoctor.png"
import maleDoctor from "../assets/maleDoctor.png"

const DoctorImg = () => {
  return (
    <div className="relative flex items-center max-w-7xl mx-auto w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <img
        src={maleDoctor}
        alt="Male healthcare professional"
        className="hidden sm:block -translate-x-[80px] w-full h-full object-contain object-bottom"
      />

      <img
        src={ladyDoctor}
        alt="Female healthcare professional"
        className="hidden sm:block translate-x-[80px] w-full h-full object-contain object-bottom"
      />
    </div>
  )
}

export default DoctorImg