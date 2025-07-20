import { Routes, Route } from 'react-router-dom';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import StudentDashBoard from '../pages/student/Dashboard';
import AdminDashBoard from '../pages/admin/Dashboard';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/student/dashboard' element={<StudentDashBoard />} />
            <Route path='/admin/dashboard' element={<AdminDashBoard />} />
        </Routes>
    )
}

export default AppRoutes;