import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Events from './pages/Events';
import PastEvents from './pages/PastEvents';
import About from './pages/About';
import Movies from './pages/Movies';

function App() {
  return (
    <div className='App'>
      <main style={styles.main}>
        <section>
          <Navigation />
        </section>

        <section>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/events' element={<Events />} />
            <Route path='/pastevents' element={<PastEvents />} />
            <Route path='/about' element={<About />} />
            <Route path='/movies/:id' element={<Movies />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;

const styles = {

}
