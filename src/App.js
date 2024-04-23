import {Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';


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
            <Route path='/' element={<Home />} />
          </Routes>
        </section>
      </main>

    </div>
  );
}

export default App;

const styles = {

}
