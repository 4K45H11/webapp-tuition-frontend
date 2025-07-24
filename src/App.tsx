import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainLayouts from './layouts/MainLayouts'
import Login from './pages/auth/Login'
import AdminDashboard from './pages/admin/Dashboard'
import StudentDashboard from './pages/student/Dashboard'
import ProtectedRoutes from './routes/ProtectedRoutes'
import AdminRoutes from './routes/AdminRoutes'
import StudentRoutes from './routes/StudentRoutes'
import VideoPage from './pages/student/VideoPage'
import DoubtPage from './pages/student/DoubtPage'




function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoutes>
            <AdminRoutes>
              <MainLayouts>
                <AdminDashboard />
              </MainLayouts>
            </AdminRoutes>
          </ProtectedRoutes>
        }
      />

      <Route
        path="/student/dashboard"
        element={
          <ProtectedRoutes>
            <StudentRoutes>
              <MainLayouts>
                <StudentDashboard />
              </MainLayouts>
            </StudentRoutes>
          </ProtectedRoutes>
        }
      />

      <Route
        path="/student/videos"
        element={
          <ProtectedRoutes>
            <StudentRoutes>
              <MainLayouts>
                <VideoPage />
              </MainLayouts>
            </StudentRoutes>
          </ProtectedRoutes>
        }
      />

      <Route
        path="/student/doubts"
        element={
          <ProtectedRoutes>
            <StudentRoutes>
              <MainLayouts>
                <DoubtPage />
              </MainLayouts>
            </StudentRoutes>
          </ProtectedRoutes>
        }
      />


    </Routes>
  )
}

export default App
