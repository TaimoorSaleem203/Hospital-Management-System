export const setPatient = (patientData) => {
    localStorage.setItem("patientData", JSON.stringify(patientData))
}

export const getPatient = () => {
    try {
        const rawData = localStorage.getItem("patientData")
        return rawData ? JSON.parse(rawData) : []
    } catch {
        return []
    }
}

export const setAppointment = (appointData) => {
    localStorage.setItem("appointData", JSON.stringify(appointData))
}

export const getAppointment = () => {
    try {
        const rawData = localStorage.getItem("appointData")
        return rawData ? JSON.parse(rawData) : []
    } catch {
        return []
    }
}