import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Mainpage from './pages/Mainpage/mainpage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
        <Route path="/" element={<Mainpage/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
