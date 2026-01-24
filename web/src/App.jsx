import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeToggle from "./components/ThemeToggle";
import Navbar from './components/Navbar';


function App() {

  return (
      <div>
        <ThemeToggle />
        <Navbar />
        <Home/>
        <Projects/>
        <Contact />
      </div>
  )
}

export default App
