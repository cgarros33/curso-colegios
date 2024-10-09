import logo from './logo.svg';
import './App.css';

import { useTts } from 'tts-react'
import BrowserTTSButton from './components/BrowserTTSButton';
import AzureTTSButton from './components/AzureTTSButton';


/* const CustomTTSComponent = ({ lang, children, highlight = false }) => {
  const { ttsChildren, state, play, stop, pause } = useTts({
    lang,
    children,
    markTextAsSpoken: highlight
  })

  return (
    <div>
       <>
        <button disabled={state.isPlaying} onClick={play}>
          Play
        </button>
        <button disabled={!state.isPlaying} onClick={pause}>
          Pause
        </button>
        <button onClick={stop}>Stop</button>
      </>
      {ttsChildren} 
      <BrowserTTSButton text={'Esto es un boton de prueba'} />
    </div>
  )
} 
*/
function App() {
  return (
    <div className="App">
      <BrowserTTSButton text={'Esto es un botón de prueba con la generación de texto del navegador'} />
      <AzureTTSButton text={'Esto es un botón de prueba con la generación de texto de Allúr'} />
      
    </div>
  );
}

export default App;



{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <CustomTTSComponent lang="es-419" highlight>
          <p>ASI SUENA EL DE REACT TTS EN 419</p>
        </CustomTTSComponent>
        <CustomTTSComponent lang="es" highlight>
          <p>ASI SUENA EL DE REACT TTS EN ES</p>
        </CustomTTSComponent>
        <CustomTTSComponent lang="es-es" highlight>
          <p>ASI SUENA EL DE REACT TTS EN ES_ES</p>
        </CustomTTSComponent>
        <CustomTTSComponent lang="es-mx" highlight>
          <p>ASI SUENA EL DE REACT TTS en mx?</p>
        </CustomTTSComponent>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}