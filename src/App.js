import {Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About';


function App() {
  return (
    <div className='App'>
      <main style={styles.main}>
        <section>
          <Navigation/>
        </section>
        
        <section>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/events' element={<Events />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </section>
      </main>

    </div>
  );
}

export default App;

const styles = {

}
