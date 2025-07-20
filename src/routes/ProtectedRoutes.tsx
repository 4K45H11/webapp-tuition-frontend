import {Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store.ts'
import type { JSX } from 'react'

const ProtectedRoutes = ({children}:{children:JSX.Element})=>{
    const token = useSelector((state:RootState)=>state.auth.token);
    return token ? children : <Navigate to={'/login'}/>
};

export default ProtectedRoutes;