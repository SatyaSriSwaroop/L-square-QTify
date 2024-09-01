import './App.css';
import ActionAreaCard from './components/Card/Card';
import Carousel from './components/Carousel/Carousel';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Section></Section>
    </div>
  );
}

export default App;
