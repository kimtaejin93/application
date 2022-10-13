import './App.css';
import Navigation from './components/Navigation';
import Intro from './pages/Intro';
import SelfIntroduce from './pages/SelfIntroduce';
import Skill from './pages/Skill';
import Project from './pages/Project';
import Footer from './pages/Footer';

function App() {
  return (
    <div>
      
      <Navigation/>
      <Intro/>
      <SelfIntroduce/>
      <Skill/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
