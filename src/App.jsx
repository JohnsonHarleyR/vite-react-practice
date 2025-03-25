import { useState } from 'react'
import LightSwitch from './components/LightSwitch'
import './App.css'
import Block from './components/Block'

function App() {
  const [isOn, setIsOn] = useState(false);
  
  const message = isOn ? "That's better! Look around!" : "It's so dark, turn on a light?";
  const bgClass = isOn ? "on" : "off";

  document.getElementById('root').style.backgroundColor = isOn ? 'var(--outer-bg-color-on)' : 'var(--outer-bg-color-off)';
  document.getElementById('root').style.backgroundImage = isOn ? 'var(--outer-bg-image-on)' : 'var(--outer-bg-image-off)';
  document.getElementById('root').style.opacity = isOn ? 'var(--outer-bg-opacity-on)' : 'var(--outer-bg-opacity-off)';

  return (
    <div className={'background ' + bgClass}>
      <h1>{message}</h1>
      <LightSwitch isOn={isOn} setIsOn={setIsOn} />

      <div className="blocks-area">
        <div className='blocks-div'>
          <Block isSwitchOn={isOn} defaultValue={0} />
          <Block isSwitchOn={isOn} defaultValue={1} />
          <Block isSwitchOn={isOn} defaultValue={2} />
          <Block isSwitchOn={isOn} defaultValue={3} />
          <Block isSwitchOn={isOn} defaultValue={4} />
          <Block isSwitchOn={isOn} defaultValue={5} />
          <Block isSwitchOn={isOn} defaultValue={6} />
        </div>
        <p>{isOn ? "Click the blocks!" : "(You can only see what these do with the lights on.)"}</p>
      </div>
    </div>
  )
}

export default App
