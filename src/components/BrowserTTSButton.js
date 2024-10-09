import React from 'react';

const BrowserTTSButton = ({text}) => {
    const handleClick = () => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-419'; 
        window.speechSynthesis.speak(utterance);
        console.log("JOADFSHIUGHDIUSHFOIUGSFO");
    };

    return (
        <button onClick={handleClick}>
            Browser
        </button>
    );
};

export default BrowserTTSButton;