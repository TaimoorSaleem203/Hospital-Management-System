import LandPage from './components/LandPage';
import Auth from './components/Auth'
import {Route,Routes} from 'react-router-dom'
import Layout from './components/Layout';
import PatientDashboard from './Patient/PatientDashboard';
import Appointments from './Patient/Appointments'
import DoctorDashboard from './Doctor/DoctorDashboard';
import DoctorAppointments from './Doctor/DoctorAppointments';
import PatientPage from './Doctor/PatientPage';
import PatientsDirectory from './Doctor/PatientsDirectory';

const App = () => {
  return (

    <>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<LandPage />}></Route>
        <Route path='/portal' element={<Auth />}></Route>
      </Route>

      <Route>
        <Route path='/patient/dashboard' element={<PatientDashboard />}></Route>
        <Route path='/patient/appointment' element={<Appointments />}></Route>
      </Route>

      <Route>
        <Route path='/doctor/dashboard' element={<DoctorDashboard />}></Route>
        <Route path='/doctors/patients/registration' element={<PatientPage />}></Route>
        <Route path='/doctors/patients/directory' element={<PatientsDirectory />}></Route>
        {/* <Route path='/doctor/appointment' element={<DoctorAppointments />}></Route> */}
      </Route>
    </Routes>
    
    </>

  );
}

export default App