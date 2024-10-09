//import React from 'react';

//import * as sdk from 'microsoft-cognitiveservices-speech-sdk';
import React, { useState, useEffect } from 'react';
//import { Container } from 'reactstrap';
import { getTokenOrRefresh } from './token_util';

//import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';

const speechsdk = require('microsoft-cognitiveservices-speech-sdk')






//import { syntesizeSpeech } from './azurettsscript'

const AzureTTSButton = ({ text }) => {
    
    const [player, updatePlayer] = useState({p: undefined, muted: false});
const [tokenObject, updateTokenObj] = useState({authToken: null, region: null});
const [runs, updateRuns] = useState(0);
/* useEffect(() => {
    async function fetchToken() {
        const tokenObj = await getTokenOrRefresh();
        updateTokenObj(tokenObj);
    }
    fetchToken();
}, []);
 */

    async function testToSpeech(textToSpeak) {
        const tokenObj = await getTokenOrRefresh();
        updateTokenObj(tokenObj);
    }
    async function textToSpeech(textToSpeak) {
        const tokenObj = await getTokenOrRefresh();
        updateTokenObj(tokenObj);
        updateRuns(runs + 1);
        //updateTokenObj(tokenObj);
        const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
        const myPlayer = new speechsdk.SpeakerAudioDestination();
        updatePlayer(p => {p.p = myPlayer; return p;});
        const audioConfig = speechsdk.AudioConfig.fromSpeakerOutput(player.p);
        speechConfig.speechSynthesisVoiceName = "es-AR-TomasNeural"; 
        let synthesizer = new speechsdk.SpeechSynthesizer(speechConfig, audioConfig);
        synthesizer.speakTextAsync(
        textToSpeak,
        result => {
            let text;
            if (result.reason === speechsdk.ResultReason.SynthesizingAudioCompleted) {
                text = `synthesis finished for "${textToSpeak}".\n`
            } else if (result.reason === speechsdk.ResultReason.Canceled) {
                text = `synthesis failed. Error detail: ${result.errorDetails}.\n`
            }
            synthesizer.close();
            synthesizer = undefined;
            //setDisplayText(text);
        },
        function (err) {
            //setDisplayText(`Error: ${err}.\n`);

            synthesizer.close();
            synthesizer = undefined;
        });
    }

    

    return (
        
        <button onClick={()=>textToSpeech(text) }>
            {/* {runs} */}
            Azure
            {/* {JSON.stringify(tokenObject)} */}
        </button>
    );
};

export default AzureTTSButton;













/* const AzureTTSButton = ({text}) => {
    const handleClick = () => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-419'; 
        window.speechSynthesis.speak(utterance);
    };

    return (
        <button onClick={handleClick}>
            Speak
        </button>
    );
};

export default AzureTTSButton; */



/* const handleClick = () => {
        const audioFile = "YourAudioFile.wav";
        // This example requires environment variables named "SPEECH_KEY" and "SPEECH_REGION"
        const speechConfig = sdk.SpeechConfig.fromSubscription('89a82822a86740c9ad37ba0b63449bbf', 'brazilsouth');
        const audioConfig = sdk.AudioConfig.fromAudioFileOutput(audioFile);

        // The language of the voice that speaks.
        speechConfig.speechSynthesisVoiceName = "es-AR-TomasNeural";

        // Create the speech synthesizer.
        const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

        // Start the synthesizer and wait for a result.
        synthesizer.speakTextAsync(text,
            function (result) {
                if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
                    console.log("synthesis finished.");
                } else {
                    console.error("Speech synthesis canceled, " + result.errorDetails +
                        "\nDid you set the speech resource key and region values?");
                }
                synthesizer.close();
            },
            function (err) {
                console.trace("err - " + err);
                synthesizer.close();
            });
        console.log("Now synthesizing to: " + audioFile);
    };
    
 */