import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ApiProvider } from '@contexts/ApiContext'
import HomePage from '@pages/LandingPages/Home/Home'
import DashboardPage from '@pages/LandingPages/Dashboard/Dashboard'
import PrivateRoute from '@pages/PrivateRoute'
import { Pages } from '@enums/pages'
import LoginPage from './pages/Auth/Login/Login'

function App() {

  return (
    <ApiProvider>
      <BrowserRouter>
        <Routes>
          {/* Presentation page */}
          <Route path={Pages.home} element={<HomePage />} />
          
          {/* Auth pages */}
          <Route path={Pages.login} element={<LoginPage />} />
          <Route path={Pages.register} element={<DashboardPage />} />
          <Route path={Pages.forgotPassword} element={<DashboardPage />} />
          <Route path={Pages.resetPassword} element={<DashboardPage />} />

          {/* Routes that need to be logged in */}
          <Route element={<PrivateRoute />}>
            <Route path={Pages.dashboard} element={<DashboardPage />} />
            <Route path={Pages.summarize} element={<DashboardPage />} />
            <Route path={Pages.summarizeDetail} element={<DashboardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  )
}

export default App
