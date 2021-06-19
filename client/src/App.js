import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth } from './hooks/auth.hool';
import { useRoutes } from './routes';
import { AuthContext } from './context/authContext';
import { Navbar } from './components/Navbar';
import { Loader } from './components/Loader';

import 'materialize-css';
import ParticleBackgroud from './components/particles';

function App() {
  const { token, login, logout, userId, ready } = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  if (!ready) {
    return <Loader />
  }
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
        <ParticleBackgroud/>
        {isAuthenticated && <Navbar />}
        <div className="container">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;
