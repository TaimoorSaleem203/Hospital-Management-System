import bg from "../assets/bg.png"
import ladyDoctor from "../assets/ladyDoctor.png"
import maleDoctor from "../assets/maleDoctor.png"
import Content from "./Content.jsx"

const LandPage = () => (
  <section
    className="relative mx-auto w-full font-poppins bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <div className="relative z-10 flex items-center justify-center">

      {/* Male Doctor */}
      <img
        src={maleDoctor}
        alt="male doctor"
        className="hidden sm:block absolute bottom-0 left-10 lg:left-24 max-h-[100vh] object-contain"
      />

      {/* Center Content */}
      <Content />

      {/* Female Doctor */}
      <img
        src={ladyDoctor}
        alt="lady doctor"
        className="hidden sm:block absolute bottom-0 right-10 lg:right-20 max-h-[100vh] object-contain"
      />

    </div>
  </section>
)

export default LandPage
