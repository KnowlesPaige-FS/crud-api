import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';

import authService from './services/auth.service';

import Home from './pages/Home';
import Events from './pages/Events';
import PastEvents from './pages/PastEvents';
import About from './pages/About';
import Movies from './pages/Movies';
import Signup from './pages/Signup';
import Login from './pages/Login';


function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const location = useLocation();

  useEffect(() => {
    const user = authService.getCurrentUser()
    if (user) { setCurrentUser(user) }
  }, [location])

  const logout = () => {
    authService.logout()
    setCurrentUser(null); 
  }

  return (
    <div className='App'>
      <main style={styles.main}>
        <section>
          <Navigation />
          <div>
            {currentUser
              ? <h3>Welcome Back!</h3>
              : <h3> </h3>
            }
            {currentUser && (
              <button onClick={logout}>Logout</button>
            )}
          </div>
        </section>
        <section>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/events' element={<Events />} />
            <Route path='/pastevents' element={<PastEvents />} />
            <Route path='/about' element={<About />} />
            <Route path='/movies/:id' element={<Movies />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;

const styles = {
  main: {
    
  }
};
