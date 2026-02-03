
export const setLocalStorage = (patientData) =>{
    return localStorage.setItem("patientData",JSON.stringify(patientData))
}

export const getLocalStorage = () => {
    const rawData = localStorage.getItem("patientData")
    if(!rawData) return []
    return JSON.parse(rawDasta)
}

export const setAppointment = (appointData) =>{
    return localStorage.setItem("appointData",JSON.stringify(appointData))
}

export const getAppointment = () =>{
    const rawData = localStorage.getItem("appointData")
    if(!rawData) return []
    return JSON.parse(rawData)
}