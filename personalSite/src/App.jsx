import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/about'
import Projects from './components/projects'




function App() {
  return (
    <div className="App">

        <div id='aboutMe' style={{paddingTop: '100px', paddingBottom: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <About />
        </div>

        <div id='projects' style={{paddingTop: '100px', paddingBottom: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Projects />
        </div>

      {/* <div id="67" style={{marginTop: '100vh', marginBottom: '100vh', paddingTop: '40px'}}>
        <h2>Hello there</h2>
      </div> */}
    </div>
  );
}

export default App
