import LandPage from './components/LandPage';
import Auth from './components/Auth';

import {Route,Routes} from 'react-router-dom';

import Layout from './components/Layout';
import Appointments from './Patient/Appointments'
import DoctorDashboard from './Doctor/DoctorDashboard';
import DoctorAppointments from './Doctor/DoctorAppointments';
import DoctorPatientList from './Doctor/DoctorPatientList';
import PatientDashboard from './Patient/PatientDashboard';
import PatientPage from './Doctor/PatientPage';
import PatientsDirectory from './Doctor/PatientsDirectory';

import AdminDashboard from "./Admin/AdminDashboard.jsx";
import AdminDoctors from "./Admin/AdminDoctors.jsx";
import AdminDoctorsDirectory from "./Admin/AdminDoctorsDirectory.jsx";
import AdminPatients from './Admin/AdminPatients.jsx';
import AdminPatientsDirectory from './Admin/AdminPatientsDirectory.jsx';
import AdminAppointment from './Admin/AdminAppointment.jsx';
import AdminAppointmentList from './Admin/AdminAppointmentList.jsx';

import LogOut from './components/LogOut.jsx';

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
        <Route path='/admin/patients/registration' element={<AdminPatients />}></Route>
        <Route path='/admin/patients/directory' element={<AdminPatientsDirectory />}></Route>
        <Route path='/admin/appointment/form' element={<AdminAppointment />}></Route>
        <Route path='/admin/appointment/list' element={<AdminAppointmentList />}></Route>
      </Route>

      <Route>
        <Route path='/' element={<LogOut />}></Route>
      </Route>
    </Routes>

    </>

  );
}

export default App