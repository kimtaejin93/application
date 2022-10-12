import './App.css';
import Navigation from './components/Navigation';
import Intro from './pages/Intro';
import SelfIntroduce from './pages/SelfIntroduce';
import Skill from './pages/Skill';
function App() {
  return (
    <div>
      <Navigation/>
      <Intro/>
      <SelfIntroduce/>
      <Skill/>
    </div>
  );
}

export default App;
