import NavBar from "./NavBar"
import { Outlet } from "react-router-dom"
import bg from "../assets/bg.png"


const Layout = () => {
  return (
    <>
    <section className={`relative overflow-hidden mx-auto w-full h-screen font-poppins bg-no-repeat bg-cover bg-center`} style={{backgroundImage:`url(${bg})`}}>
        <NavBar />
        <Outlet />
    </section>

    </>
  )
}

export default Layout