const patients = [
  {
    id: "P001",
    fname: "Ali",
    lname: "Khan",
    age: "20",
    gender: "Male",
    blood: "A+",
    contact: "03011234501",
    email: "ali.khan1@gmail.com",
    active: "Active",
    action: "Recovering"
  },
  {
    id: "P002",
    fname: "Sara",
    lname: "Ahmed",
    age: "24",
    gender: "Female",
    blood: "B+",
    contact: "03011234502",
    email: "sara.ahmed2@gmail.com",
    active: "Active",
    action: "Admitted"
  },
  {
    id: "P003",
    fname: "Usman",
    lname: "Malik",
    age: "32",
    gender: "Male",
    blood: "O+",
    contact: "03011234503",
    email: "usman.malik3@gmail.com",
    active: "Inactive",
    action: "Discharged"
  },
  {
    id: "P004",
    fname: "Ayesha",
    lname: "Sheikh",
    age: "27",
    gender: "Female",
    blood: "AB+",
    contact: "03011234504",
    email: "ayesha.sheikh4@gmail.com",
    active: "Active",
    action: "Recovering"
  },
  {
    id: "P005",
    fname: "Bilal",
    lname: "Hussain",
    age: "40",
    gender: "Male",
    blood: "A-",
    contact: "03011234505",
    email: "bilal.hussain5@gmail.com",
    active: "Active",
    action: "Critical"
  },

  // --- pattern continues ---

  {
    id: "P096",
    fname: "Nimra",
    lname: "Rashid",
    age: "23",
    gender: "Female",
    blood: "B-",
    contact: "03011234596",
    email: "nimra.rashid96@gmail.com",
    active: "Active",
    action: "Recovering"
  },
  {
    id: "P097",
    fname: "Farhan",
    lname: "Qureshi",
    age: "36",
    gender: "Male",
    blood: "O+",
    contact: "03011234597",
    email: "farhan.qureshi97@gmail.com",
    active: "Inactive",
    action: "Discharged"
  },
  {
    id: "P098",
    fname: "Sana",
    lname: "Iqbal",
    age: "29",
    gender: "Female",
    blood: "A+",
    contact: "03011234598",
    email: "sana.iqbal98@gmail.com",
    active: "Active",
    action: "Admitted"
  },
  {
    id: "P099",
    fname: "Hamza",
    lname: "Nawaz",
    age: "34",
    gender: "Male",
    blood: "AB-",
    contact: "03011234599",
    email: "hamza.nawaz99@gmail.com",
    active: "Active",
    action: "Recovering"
  },
  {
    id: "P100",
    fname: "Hina",
    lname: "Saleem",
    age: "26",
    gender: "Female",
    blood: "O-",
    contact: "03011234600",
    email: "hina.saleem100@gmail.com",
    active: "Active",
    action: "Admitted"
  }
]

export const setLocalStorage = (patientData) =>{
    return localStorage.setItem("patientData",JSON.stringify(patientData))
}

export const getLocalStorage = () => {
    const rawData = localStorage.getItem("patientData")
    if(!rawData) return []
    return JSON.parse(rawData)
}

export const setAppointment = (appointData) =>{
    return localStorage.setItem("appointData",JSON.stringify(appointData))
}

export const getAppointment = () =>{
    const rawData = localStorage.getItem("appointData")
    if(!rawData) return []
    return JSON.parse(rawData)
}

