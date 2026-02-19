import styles from "../styles"
import { Link, NavLink, Outlet } from 'react-router-dom'

const NavBar = () => {

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Portal", link: `/portal` }
  ]

  return (
    <nav className={`${styles.paddingX} py-8 font-poppins`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-[30px] cursor-pointer text-primary-dark font-medium">Medi<span className="font-semibold">Core</span></Link>

        <div className="mx-auto -translate-x-20">

          <ul
            className="
              relative flex items-center p-3 px-1
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


      </div>
    </nav >
  )
}

export default NavBar
