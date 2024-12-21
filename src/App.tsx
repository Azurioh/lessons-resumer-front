import { ApiProvider } from '@contexts/ApiContext';
import { Pages } from '@enums/pages';
import LoginPage from '@pages/Auth/Login/Login';
import RegisterPage from '@pages/Auth/Register/Register';
import DashboardPage from '@pages/LandingPages/Dashboard/Dashboard';
import HomePage from '@pages/LandingPages/Home/Home';
import PrivateRoute from '@pages/PrivateRoute';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ApiProvider>
      <BrowserRouter>
        <Routes>
          {/* Presentation page */}
          <Route path={Pages.home} element={<HomePage />} />

          {/* Auth pages */}
          <Route path={Pages.login} element={<LoginPage />} />
          <Route path={Pages.register} element={<RegisterPage />} />
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
  );
}

export default App;
