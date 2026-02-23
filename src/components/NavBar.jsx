import { useState } from "react"
import styles from "../styles"
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Portal", link: `/portal` }
  ]

  const [open, setOpen] = useState(false)

  return (
    <nav className={`px-8 sm:px-12 py-8 font-poppins`}>
      <div className="max-w-7xl mx-auto flex gap-5 items-center sm:justify-center">
        <Link to="/" className="text-[25px] md:text-[30px] cursor-pointer text-primary-dark font-medium">Medi<span className="font-semibold">Core</span></Link>

        <div className="mx-auto sm:-translate-x-24">

          <ul
            className="
              relative hidden sm:flex items-center p-3 px-1
              rounded-full border border-border
              bg-gradient-to-l from-white via-[#e6f7f6ab] to-white
              shadow-text-body
            "
          >
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink to={item.link} end={item.link === "/"} className="relative transition z-10 px-10 py-2 cursor-pointer">
                  {({ isActive }) => (
                    <>
                      <span
                        className={`
                    absolute inset-0 rounded-full
                    bg-gradient-to-r to-[#e5e7eb57] from-[#0fb9b059]
                    transition-all duration-300 ease-out
                    ${isActive ? "translate-x-0 opacity-100" : "opacity-0"}`}
                      />

                    <span className={`
                    relative z-10 transition-all duration-150
                      ${isActive ? "text-text-heading font-medium" : "text-text-body"}
                    `}>{item.name}</span>
                    </>
                  )}
                </NavLink>

              </li>

            ))}
          </ul>
        </div>
        <i onClick={()=>setOpen(!open)} className={`block md:hidden ${open ?"ri-close-line":"ri-menu-line"} text-xl cursor-pointer`}></i>
        {open && 
          (
            <div className="flex md:hidden flex-col gap-3 drop-shadow-md absolute right-0 -translate-x-8 translate-y-20 transition-transform duration-300 ease-in-out z-10 w-32 h-28 rounded-xl bg-primary">
              {menuItems.map((item,indx) => (
              <li key={item.name} className={`${menuItems.length - 1 !== indx && "border-b border-b-white py-4"} list-none flex items-center justify-center`}>
                <NavLink to={item.link} end={item.link === "/"} className="relative transition z-10 cursor-pointer">
                  {({ isActive }) => (
                    <>

                    <span className={`
                    relative text-white hover:text-accent transition-all duration-150
                      ${isActive ? "text-text-heading font-medium" : "text-text-body"}
                    `}>{item.name}</span>
                    </>
                  )}
                </NavLink>

              </li>

            ))}
            </div>
          )
        }
      </div>
    </nav >
  )
}

export default NavBar
