import Home from './components/Home';
import Projects from './components/Projects';
import SideBar from './components/SideBar';
import Contact from './components/Contact';
import ThemeToggle from "./components/ThemeToggle";


function App() {

  return (
      <div>
        <ThemeToggle />
        <SideBar/>
        <Home/>
        <Projects/>
        <Contact />
      </div>
  )
}

export default App
