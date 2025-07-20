import { useSelector} from "react-redux"
import type { RootState } from "../redux/store"
import { Navigate } from "react-router-dom"
import type { JSX } from "react" 


function StudentRoutes({children}:{children:JSX.Element}) {
  const {token,role} = useSelector((state:RootState)=>state.auth)

  return token && role === 'student' ? children: <Navigate to={'/login'}/>
}

export default StudentRoutes
