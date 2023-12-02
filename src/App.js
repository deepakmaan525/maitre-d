import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero.jsx';
import What from './components/What.jsx'
import Why from './components/Why.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Pricing from './components/Pricing.jsx';
import Modules from './components/Modules.jsx';

function App() {
  return (
    <div className="App">
      <div className='bg-header'>
        <Navbar/>
        <Hero/>
      </div>
      <What/>
      <Why/>
      <Modules/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
