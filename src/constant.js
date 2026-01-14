
const MOCK_PATIENTS = [
  { id: 'P001', name: 'John Doe', age: 45, gender: 'M', bloodGroup: 'O+', contact: '+1 234 567 8901', lastVisit: '2023-10-15', status: 'Stable' },
  { id: 'P002', name: 'Jane Smith', age: 32, gender: 'F', bloodGroup: 'A-', contact: '+1 234 567 8902', lastVisit: '2023-11-02', status: 'Recovering' },
  { id: 'P003', name: 'Robert Johnson', age: 58, gender: 'M', bloodGroup: 'B+', contact: '+1 234 567 8903', lastVisit: '2023-11-05', status: 'Critical' },
  { id: 'P004', name: 'Emily Davis', age: 24, gender: 'F', bloodGroup: 'AB+', contact: '+1 234 567 8904', lastVisit: '2023-10-28', status: 'Stable' },
  { id: 'P005', name: 'Michael Brown', age: 67, gender: 'M', bloodGroup: 'O-', contact: '+1 234 567 8905', lastVisit: '2023-11-10', status: 'Recovering' },
];
export default MOCK_PATIENTS

export const MOCK_DOCTORS = [
  { id: 'D001', name: 'Dr. Sarah Wilson', specialty: 'Cardiology', experience: 12, contact: 'sarah.w@hospital.com', availability: 'Available', image: 'https://picsum.photos/seed/doc1/200' },
  { id: 'D002', name: 'Dr. James Miller', specialty: 'Neurology', experience: 15, contact: 'james.m@hospital.com', availability: 'In Surgery', image: 'https://picsum.photos/seed/doc2/200' },
  { id: 'D003', name: 'Dr. Anna Chen', specialty: 'Pediatrics', experience: 8, contact: 'anna.c@hospital.com', availability: 'On Break', image: 'https://picsum.photos/seed/doc3/200' },
  { id: 'D004', name: 'Dr. David Ross', specialty: 'Orthopedics', experience: 20, contact: 'david.r@hospital.com', availability: 'Available', image: 'https://picsum.photos/seed/doc4/200' },
];

export const MOCK_APPOINTMENTS = [
  { id: 'A001', patientName: 'John Doe', doctorName: 'Dr. Sarah Wilson', date: '2023-11-20', time: '09:00 AM', type: 'Consultation', status: 'Scheduled' },
  { id: 'A002', patientName: 'Jane Smith', doctorName: 'Dr. Anna Chen', date: '2023-11-20', time: '11:30 AM', type: 'Checkup', status: 'Scheduled' },
  { id: 'A003', patientName: 'Emily Davis', doctorName: 'Dr. James Miller', date: '2023-11-21', time: '02:00 PM', type: 'Surgery', status: 'Scheduled' },
];