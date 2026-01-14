import NavBar from "./NavBar"
import { Outlet } from "react-router-dom"
import bg from "../assets/bg.png"


const Layout = () => {
  return (
    <>
    <section className="relative font-poppins w-full bg-center bg-cover" style={{backgroundImage:`url(${bg})`}}>
        <NavBar />
        <Outlet />
    </section>

    </>
  )
}

export default Layout