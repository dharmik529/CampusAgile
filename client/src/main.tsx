import React from 'react';
import ReactDOM from 'react-dom';
import { Navigate, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import Home from './Home/Home';
import Notification from './Home/Notification';
import AccountSetting from './OtherComponents/AccountSetting';
import theme from './config/theme';
import Login from './Login/login';
import Scrum from './Scrum/Scrum';
import Documentation from './OtherComponents/Documentation';
import Support from './OtherComponents/Support';
import Terms from './Privacy/terms';
import PrivacyPolicy from './Privacy/PrivacyPolicy';
import PersonalLicense from './OtherComponents/PersonalLicense';
import UniversityCommunity from './OtherComponents/UniversityCommunity';
import Loading from './OtherComponents/loading';
import OTPVerification from './Login/OTPVerification';
import NotFound from './OtherComponents/NotFound';
import ResetPassword from './Login/PasswordReset';
import Code from './components/code';
import FileUpload from './components/FileUpload';
import Feedback from './OtherComponents/Feedback';
import Project from './components/Project';

const isAuthenticated = () => {
  return localStorage.getItem('authToken') !== null;
};

const ProtectedRoute = ({ element }: { element: React.ReactNode }) => {
  const auth = isAuthenticated();
  return auth ? <>{element}</> : <Navigate to="/login" />;
};

const routes = [
  { path: '/', element: <Login /> },
  { path: '/home', element: <ProtectedRoute element={<Home />} /> },
  { path: '/Notification', element: <ProtectedRoute element={<Notification />} /> },
  { path: '/kanban/:projectId', element: <ProtectedRoute element={<App />} /> },
  { path: '/login', element: <Login /> },
  { path: '/Scrum', element: <ProtectedRoute element={<Scrum />} /> },
  { path: '/accountsetting', element: <ProtectedRoute element={<AccountSetting />} /> },
  { path: '/Support', element: <ProtectedRoute element={<Support />} /> },
  { path: '/UniversityCommunity', element: <ProtectedRoute element={<UniversityCommunity />} /> },
  { path: '/PersonalLicense', element: <ProtectedRoute element={<PersonalLicense />} /> },
  { path: '/Documentation', element: <ProtectedRoute element={<Documentation />} /> },
  { path: '/terms', element: <Terms /> },
  { path: '/PrivacyPolicy', element: <PrivacyPolicy /> },
  { path: '/Loading', element: <Loading /> },
  { path: '/OTPVerification', element: <OTPVerification /> },
  { path: '/ResetPassword', element: <ResetPassword /> },
  { path: '/Code', element: <ProtectedRoute element={<Code />} /> },
  { path: '/FileUpload', element: <ProtectedRoute element={<FileUpload />} /> },
  { path: '/Feedback', element: <ProtectedRoute element={<Feedback />} /> },
  { path: '/Project', element: <ProtectedRoute element={<Project />} /> },
  { path: '*', element: <NotFound /> },
];

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

