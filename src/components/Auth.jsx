import AuthRect from "../assets/AuthRect.png"
import DoctorImg from "./DoctorImg"
import {useState} from "react";

const Auth = () => {

  const [selectedRole, setSelectedRole] = useState("");
  const roles = ["Doctor", "Patient", "Admin"];
  const [role, setRole] = useState("doctor");

 

  return (
    <>

    <div className={`relative font-poppins min-h-screen w-full flex items-center justify-center`}>
      <DoctorImg />
      <div style={{background:`url(${AuthRect}) center / cover no-repeat`}} className="max-w-[380px] w-full shadow-md bg-cover bg-no-repeat bg-center p-10 rounded-2xl absolute top-0">
        <h1 className="text-primary-dark text-2xl font-semibold">Sign In</h1>
        <span className="text-text-body">Please enter your staff credentials</span>
        <div className="flex items-center justify-between mt-4">
          {roles.map((role)=>{
            return (
                <div className="flex items-center gap-2">
                  <input type="radio" onClick={()=>setRole(role)} className={`w-4 h-4 accent-primary-dark outline-none`} onChange={()=>setSelectedRole(role)} checked={selectedRole===role}/>
                  <label className={`${selectedRole === role? "text-text-heading":"text-text-body"}`}>{role}</label>
                </div>
            )
          })}
        </div>
        <div className="flex flex-col gap-5 mt-4">
          <div className="flex flex-col gap-2">
            <label className="text-text-heading">Username or Staff ID</label>
            <input className="p-3 rounded-xl text-text-heading focus:ring-2 focus:ring-primary outline-none" type="text" placeholder="e.g Taimoor1234"/>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-text-heading">Password</label>
            <input className="p-3 rounded-xl text-text-heading focus:ring-2 focus:ring-primary outline-none" type="password" placeholder="••••••••" />
          </div>

          <button onClick={()=> (window.location.href = `${role.toLowerCase()}/dashboard`)}
           className="bg-primary hover:bg-primary/90 transition focus:ring-2 focus:ring-primary focus:outline-none active:scale-95 rounded-xl p-3 text-white mt-5">Access Portal</button>
        </div>
      </div>
    </div>

    </>
  )
}

export default Auth