import{useSelector} from 'react-redux'
import type {RootState} from '../redux/store.ts'
import type { JSX } from 'react'
import { Navigate } from 'react-router-dom'

function AdminRoutes({children}:{children:JSX.Element}) {
  const {token,role} = useSelector((state:RootState)=>state.auth);
  return token && role === 'admin'? children : <Navigate to={'/login'}/>
};

export default AdminRoutes;
