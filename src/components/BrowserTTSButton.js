import React from 'react';

const BrowserTTSButton = ({text, lang}) => {
    const handleClick = () => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang; 
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