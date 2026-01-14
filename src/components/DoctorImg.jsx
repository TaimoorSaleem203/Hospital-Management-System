import ladyDoctor from "../assets/ladyDoctor.png"
import maleDoctor from "../assets/maleDoctor.png"

const DoctorImg = () => {
  return (

    <>
      <div className="min-h-screen w-full relative flex items-center justify-center">
        <img src={maleDoctor} alt="male" className="sm:block hidden max-w-full max-h-full absolute bottom-0 left-[100px]" />
        <img src={ladyDoctor} alt="lady" className="sm:block hidden max-w-full max-h-full absolute bottom-0 right-[70px]" />
      </div>
    </>
  )
}

export default DoctorImg