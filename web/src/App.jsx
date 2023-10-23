import Home from './components/Home';
import Projects from './components/Projects';
import SideBar from './components/SideBar';
import Contact from './components/Contact';
import About from './components/About';


function App() {

  return (
      <div>
        <SideBar/>
        <Home/>
        <About/>
        <Projects/>
        <Contact />
      </div>
  )
}

export default App
