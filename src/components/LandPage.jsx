import DoctorImg from "./DoctorImg.jsx"
import Content from "./Content.jsx"

const LandPage = () => (

  <section
    className={`relative overflow-hidden mx-auto w-full h-screen font-poppins`}
  >
    <DoctorImg />
    <div className="flex flex-1 absolute inset-0 items-center justify-center">
      <Content />
    </div>
  </section>
)

export default LandPage
