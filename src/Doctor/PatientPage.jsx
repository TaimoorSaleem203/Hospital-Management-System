import { useState } from 'react'
import PatientsForm from './PatientsForm'
import PatientTable from './PatientTable'
import DoctorPanel from './DoctorPanel'
import DoctorHeader from './DoctorHeader'
import styles from '../styles'

const PatientPage = () => {

  const [patients, setPatients] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null)

  return (
    <>


      <section className="flex min-h-screen font-poppins bg-[#E5E7EB]">
        <DoctorPanel />
        <main className="flex-1 overflow-y-auto">
          <DoctorHeader />
          <div className={`relative flex justify-center pb-10 gap-5 px-10 mt-10 max-w-[960px] sm:max-w-[1300px] w-full ml-auto`}>
            <PatientsForm />
            <PatientTable />

            
          </div>

          
        </main>

        
      </section>

    </>
  )
}

export default PatientPage