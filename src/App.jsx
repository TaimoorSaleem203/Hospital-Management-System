import LandPage from './components/LandPage';
import Auth from './components/Auth';

import {Route,Routes} from 'react-router-dom';

import Layout from './components/Layout';
import PatientDashboard from './Patient/PatientDashboard';
import Appointments from './Patient/Appointments'
import DoctorDashboard from './Doctor/DoctorDashboard';
import DoctorAppointments from './Doctor/DoctorAppointments';
import PatientPage from './Doctor/PatientPage';
import PatientsDirectory from './Doctor/PatientsDirectory';
import DoctorPatientList from './Doctor/DoctorPatientList';

import AdminDashboard from "./Admin/AdminDashboard.jsx";
import AdminDoctors from "./Admin/AdminDoctors.jsx";
import AdminDoctorsDirectory from "./Admin/AdminDoctorsDirectory.jsx";


const App = () => {

  return (

    <>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<LandPage />} />
        <Route path='/portal' element={<Auth />} />
      </Route>

      <Route>
        <Route path='/patient/dashboard' element={<PatientDashboard />}></Route>
        <Route path='/patient/appointment' element={<Appointments />}></Route>
      </Route>

      <Route>
        <Route path='/doctor/dashboard' element={<DoctorDashboard />}></Route>
        <Route path='/doctor/patients/registration' element={<PatientPage />}></Route>
        <Route path='/doctor/patients/directory' element={<PatientsDirectory />}></Route>
        <Route path='/doctor/appointment/form' element={<DoctorAppointments />}></Route>
        <Route path='/doctor/appointment/list' element={<DoctorPatientList />}></Route>
      </Route>

      <Route>
        <Route path='/admin/dashboard' element={<AdminDashboard />}></Route>
        <Route path='/admin/doctors/registration' element={<AdminDoctors />}></Route>
        <Route path='/admin/doctors/directory' element={<AdminDoctorsDirectory />}></Route>
      </Route>
    </Routes>

    </>

  );
}

export default App