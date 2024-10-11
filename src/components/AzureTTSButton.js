
import React, { useState, useEffect } from 'react';
const speechsdk = require('microsoft-cognitiveservices-speech-sdk')


const AzureTTSButton = ({ text, lang }) => {

    const [player, updatePlayer] = useState({ p: undefined, muted: false });

    const [isSpeaking, setIsSpeaking] = useState(false);

    async function textToSpeech(textToSpeak) {

        let speechRegion = 'brazilsouth';
        const speechConfig = speechsdk.SpeechConfig.fromSubscription('89a82822a86740c9ad37ba0b63449bbf', 'brazilsouth');
        const myPlayer = new speechsdk.SpeakerAudioDestination();
        updatePlayer(p => { p.p = myPlayer; return p; });
        const audioConfig = speechsdk.AudioConfig.fromSpeakerOutput(player.p);
        speechConfig.speechSynthesisVoiceName = lang;
        let synthesizer = new speechsdk.SpeechSynthesizer(speechConfig, audioConfig);
        setIsSpeaking(true);
        if (!isSpeaking) {
            synthesizer.speakTextAsync(
                textToSpeak,
                result => {
                    let text;
                    if (result.reason === speechsdk.ResultReason.SynthesizingAudioCompleted) {
                        text = `synthesis finished for "${textToSpeak}".\n`
                    } else if (result.reason === speechsdk.ResultReason.Canceled) {
                        text = `synthesis failed. Error detail: ${result.errorDetails}.\n`
                    }
                    setIsSpeaking(false);
                    synthesizer.close();
                    synthesizer = undefined;
                },
                function (err) {
                    synthesizer.close();
                    setIsSpeaking(false);
                    synthesizer = undefined;
                });
        }
    }



    return (

        <div>
            <button onClick={() => textToSpeech(text)}>
                Azure
            </button>
        </div>
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