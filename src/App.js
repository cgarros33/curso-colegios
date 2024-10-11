import logo from './logo.svg';
import './App.css';

import BrowserTTSButton from './components/BrowserTTSButton';
import AzureTTSButton from './components/AzureTTSButton';
import ImageBox from './components/ImageBox';
import {useState} from 'react';
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

const languages = ["es-AR-ElenaNeural", "es-AR-TomasNeural", "es-ES-ElviraNeural", "es-ES-LauraNeural", "es-MX-DaliaNeural", "es-MX-JorgeNeural", "es-US-AzulNeural", "es-US-BenjaminNeural", "es-US-JennyNeural", "es-US-LiaNeural", "es-US-PabloNeural", "es-US-SofiaNeural", "es-US-XimenaNeural", "es-US-ZayraNeural"];
const browserBuiltInLanguages = navigator.languages;
function App() {
  const [textToSpeak, setTextToSpeak] = useState('No escribiste nada');
  const [language, setLanguage] = useState(languages[0]);
  const [browserLanguage, setBrowserLanguage] = useState(browserBuiltInLanguages[0]);

  return (
    <div className="App">
      
      <select onChange={(e) => setLanguage(e.target.value)} value={language}>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>

          <select onChange={(e) => setBrowserLanguage(e.target.value)} value={browserLanguage}>
            {browserBuiltInLanguages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
          
      <input type="text" onChange={(e) => setTextToSpeak(e.target.value)} />
      <BrowserTTSButton text={textToSpeak} lang={browserLanguage} />
      <AzureTTSButton text={textToSpeak} lang = {language} />
      <ImageBox/>
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