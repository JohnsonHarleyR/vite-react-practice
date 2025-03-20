import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LightSwitch from './components/LightSwitch'
import './App.css'

function App() {
  const [isOn, setIsOn] = useState(false);
  
  const message = isOn ? "That's better! Look around!" : "This is dark, turn on a light?";
  const bgClass = isOn ? "on" : "off";

  document.getElementById('root').style.backgroundColor = isOn ? 'var(--outer-bg-color-on)' : 'var(--outer-bg-color-off)';
  document.getElementById('root').style.backgroundImage = isOn ? 'var(--outer-bg-image-on)' : 'var(--outer-bg-image-off)';
  document.getElementById('root').style.opacity = isOn ? 'var(--outer-bg-opacity-on)' : 'var(--outer-bg-opacity-off)';

  return (
    <div class={'background ' + bgClass}>
      <h1>{message}</h1>
      <LightSwitch isOn={isOn} setIsOn={setIsOn} />


      <div className={isOn ? 'show' : 'hide'}>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  )
}

export default App
