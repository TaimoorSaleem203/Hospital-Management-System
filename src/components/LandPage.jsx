import bg from "../assets/bg.png"
import ladyDoctor from "../assets/ladyDoctor.png"
import maleDoctor from "../assets/maleDoctor.png"
import Content from "./Content.jsx"

const LandPage = () => (

  <section
    className="relative overflow-hidden max-w-7xl mx-auto w-full font-poppins bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <div className="flex flex-1 items-center justify-center">

      {/* Male Doctor */}
      <img
        src={maleDoctor}
        alt="male doctor"
        className="hidden sm:block absolute bottom-0 -translate-x-[380px] h-full w-full object-contain"
      />

      {/* Center Content */}
      <Content />

      {/* Female Doctor */}
      <img
        src={ladyDoctor}
        alt="lady doctor"
        className="hidden sm:block absolute bottom-0 w-full h-full object-contain translate-x-[380px]"
      />

    </div>
  </section>
)

export default LandPage
