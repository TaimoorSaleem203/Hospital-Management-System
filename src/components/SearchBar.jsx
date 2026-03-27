import { useState } from 'react'
import { getPatient } from './addLocalStorage'

const SearchBar = ({ onSelectPatient }) => {

    const [search, setSearch] = useState("")
    const [result, setResult] = useState([])
    const [activeIndex, setActiveIndex] = useState(-1)
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

    const handleKeyDown = (e) => {
        if (result.length == 0) return

        switch (e.key) {
            case 'ArrowUp':
                e.preventDefault()
                setActiveIndex((prev) => prev <= 0 ? result.length - 1 : prev - 1)
                break
            case 'ArrowDown':
                e.preventDefault()
                setActiveIndex((prev) => prev == result.length - 1 ? 0 : prev + 1)
                break
            case 'Enter':
                e.preventDefault()
                if (activeIndex >= 0) {
                    fetchData(result[activeIndex])
                }
                break
            default:
                break
        }
    }

    const fetchData = (patient) => {
        onSelectPatient(patient)
        setDisabled(true)
        setSearch("")
        setResult([])
    }


    return (
        <div className='relative pb-4'>
            <i className="absolute flex items-center top-[9px] left-3 ri-search-line text-slate-500"></i>
            <input
                onKeyDown={handleKeyDown} value={search} onChange={(e) => searchData(e.target.value)} type="text" placeholder="Search patients by name or ID..." className="max-w-full w-96 pl-10 pr-50 outline-none bg-slate-50 px-4 py-2 border-b-2 border border-slate-200 mx-auto rounded-lg focus:ring-2 focus:ring-blue-500/20" />
            <span className={`${search.length == 0 && "hidden"} transition-all delay-150 duration-300 ease-in-out absolute p-3 flex flex-col gap-2 shadow-md min-w-full overflow-y-auto max-h-[300px] top-[50px] rounded-sm left-0 -z-1 bg-white`}>
                {search.length > 0 && result.map((item, indx) => {
                    return (
                        <p key={item.id} onClick={() => {fetchData(item)}} className={`w-full transition-all duration-150 p-3 rounded-lg cursor-pointer ${indx == activeIndex ? "bg-blue-100" : "hover:bg-slate-100"}`}>{item.id}: {item.fname} {item.lname}</p>
                    )
                })}
            </span>
        </div>
    )
}

export default SearchBar