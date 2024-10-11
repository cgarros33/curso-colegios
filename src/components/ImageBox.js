import React from 'react';
import axios from 'axios';

const ImageBox = ({ }) => {
    const [src, setSrc] = React.useState('https://i.pinimg.com/736x/fc/da/c1/fcdac16188410949ab8df79ef7e885c9.jpg');
    const [text, setText] = React.useState('');
    const [id, setId] = React.useState('');
    const [quepasa, setQuepasa] = React.useState('nada aun');
    const apiKey = '2910474cc45b4b3d8b86b9556877e6df';
 
    const handleSave = async () => {
        try {
            // Set the initial state
            setQuepasa('Entering the POST request');

            // Perform POST request
            const response = await axios.post(
                'https://csimg.openai.azure.com/openai/images/generations:submit?api-version=2023-06-01-preview',
                {
                    "prompt": text,
                    "size": "1024x1024",
                    "n": 1
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'api-key': apiKey
                    }
                }
            );

            console.log('Image and text saved successfully:', response.data);
            const imageId = response.data.id;
            setQuepasa(`POST successful, id: ${imageId}`);
            setId(imageId);

            // Polling function to check the image status
            const checkImageStatus = async () => {
                const getResponse = await axios.get(
                    `https://csimg.openai.azure.com/openai/operations/images/${imageId}?api-version=2023-06-01-preview`,
                    {
                        headers: {
                            'api-key': apiKey
                        }
                    }
                );

                console.log('Polling GET response:', getResponse.data);
                const status = getResponse.data.status;

                if (status === 'succeeded') {
                    const imageUrl = getResponse.data.result.data[0].url;
                    setQuepasa(`Image generation succeeded, image URL: ${imageUrl}`);
                    setSrc(imageUrl);
                } else if (status === 'running') {
                    setQuepasa('Image generation still running, checking again...');
                    setTimeout(checkImageStatus, 2000); // Retry after 2 seconds
                } else {
                    setQuepasa(`Image generation failed with status: ${status}`);
                    console.error('Unexpected status:', status);
                }
            };

            // Start polling
            checkImageStatus();

        } catch (error) {
            console.error('Error occurred:', error);
            setQuepasa('Error occurred: ' + error.message);
        }
    };












    return (
        <div className="image-box">
            <img src={src} alt="text" className="image-box__img" style={{ maxWidth: '512px', maxHeight: '512px' }} />
            <textarea
                className="image-box__textarea"
                placeholder="Write something here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button onClick={handleSave}>Save</button>
            {/* {quepasa} */}
        </div>
    );
};


export default ImageBox;