import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import AccountSetting from './AccountSetting'; // Updated the import
import theme from './config/theme';
import NavbarLeft from './components/NavbarLeft';
import Loading from './loading';
import Scrum from './Scrum';
import Documentation from './Documentation';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          {/* Nested Routes */}
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/Scrum" element ={<Scrum />} />
          <Route path="/accountsetting" element={<AccountSetting />}  />
          <Route path="/kanban" element={<App />} />
          <Route path="/Documentation" element ={<Documentation />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
);
