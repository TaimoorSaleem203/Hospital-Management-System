import DoctorImg from "./DoctorImg.jsx"
import ladyDoctor from "../assets/ladyDoctor.png"
import maleDoctor from "../assets/maleDoctor.png"
import Content from "./Content.jsx"

const LandPage = () => (

  <section
    className="relative overflow-hidden max-w-7xl mx-auto w-full font-poppins bg-no-repeat bg-cover bg-center"
    >
    <DoctorImg />
    <div className="flex flex-1 absolute inset-0 items-center justify-center">
      <Content />
    </div>
  </section>
)

export default LandPage
