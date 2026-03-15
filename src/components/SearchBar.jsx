import { useState } from 'react'
import { getPatient } from './addLocalStorage'

const SearchBar = ({setFName,setLName,setEmail,setDOB,setGender,setContact,setBlood,setAge,setActive,setAction}) => {

    const [search, setSearch] = useState("")
    const [result, setResult] = useState([])
    const [disabled, setDisabled] = useState(false)

    const searchData = (value) => {
        let patients = getPatient()
        let searchValue = value.toLowerCase()

        setSearch(searchValue)

        let result = patients.filter((patient) =>
            patient.fname.toLowerCase().includes(searchValue) ||
            patient.lname.toLowerCase().includes(searchValue) ||
            patient.id.toLowerCase().includes(searchValue)
        )

        setResult(result)
    }

    const fetchData = (patient) => {
        setFName(patient.fname)
        setLName(patient.lname)
        setDOB(patient.dob)
        setEmail(patient.email)
        setAge(patient.age)
        setGender(patient.gender)
        setBlood(patient.blood)
        setContact(patient.contact)
        setAction(patient.action)
        setActive(patient.active)

        setDisabled(true)
        setSearch("")
        setResult([])
    }

    return (
        <div className="relative border-b border-slate-200 pb-4">
            <i className="absolute flex items-center top-[9px] left-3 ri-search-line text-slate-500"></i>
            <input value={search} onChange={(e) => searchData(e.target.value)} type="text" placeholder="ID or Patients Name" className="min-w-full w-full pl-10 pr-50 outline-none bg-slate-50 px-4 py-2 border border-slate-200 mx-auto rounded-lg focus:ring-2 focus:ring-blue-500/20" />
            <span className={`${search.length == 0 && "hidden"} transition-all delay-150 duration-300 ease-in-out absolute p-3 flex flex-col gap-2 shadow-md min-w-full overflow-y-auto max-h-[300px] top-[50px] rounded-sm left-0 -z-1 bg-white`}>
                {search.length > 0 && result.map((item) => {
                    return (
                        <p onClick={() => { fetchData(item) }} className="w-full transition-all duration-150 p-3 rounded-lg cursor-pointer hover:bg-slate-100">{item.id}: {item.fname} {item.lname}</p>
                    )
                })}
            </span>
        </div>
    )
}

export default SearchBar