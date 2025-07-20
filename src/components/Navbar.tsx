import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import {useDispatch,useSelector} from 'react-redux'

import type { RootState } from "../redux/store";
import { logout } from "../redux/slices/authSlice";


function Navbar() {
    const dispatch = useDispatch()

    const {role} = useSelector((state:RootState)=>state.auth)

    const handleLogout = ()=>dispatch(logout());

  return (
    <nav className="flex justify-between items-center p-4 bg-purple-100 dark:bg-gray-800">
        <Link to={'/'} className="text-xl font-bold">TutionApp</Link>

        <div className="flex items-center gap-4">
            {role==='admin' && <Link to={'/admin/dashboard'}>Admin</Link>}
            {role==='student' && <Link to={'/student/dashboard'}>Student</Link>}
            <ThemeToggle/>
            <button className="px-3 py-1 bg-red-500 text-white rounded" onClick={handleLogout}>Logout</button>
        </div>

    </nav>
  )
}

export default Navbar
