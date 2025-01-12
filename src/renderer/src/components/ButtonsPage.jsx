import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import buttonsImage from '../../../../public/buttons.png';

const ButtonsPage = () => {
    const navigate = useNavigate();
    const [clickedButton, setClickedButton] = useState(null);

    const buttonStyle = {
        width: '445px', // Set width for the button
        height: '230px',
        fontWeight: 'bold',
        background: 'linear-gradient(to bottom, #F06B3B, #E90068)',
        borderTop: '10px solid white',
        borderBottom: '10px solid white',
        borderLeft: 'none',
        borderRight: 'none',
        color: 'white',
        fontSize: '38px',
        transition: 'transform 0.2s ease, background-color 0.3s ease',
        fontFamily: 'CustomFont',
        textAlign: 'center', // Center the text horizontally
        paddingLeft: '20px',  // Padding on the left
        paddingRight: '20px', // Padding on the right
        display: 'flex',
        alignItems: 'center', // Center the text vertically
        justifyContent: 'center', // Center the text vertically
    };

    const buttonsData = [
        { id: 1, text: 'UP industrial investment & employment' },
        { id: 2, text: "UP's FDI, FCI, Fortune Global 500 & Fortune India 500 Companies Investment" },
        { id: 3, text: 'UP Electric Vehicle Manufacturing & Mobility' },
        { id: 4, text: 'UP pharmaceutical & medical device industry' },
        { id: 5, text: 'UP Warehousing & Logistics' },
    ];

    const handleClick = (id) => {
        setClickedButton(id);

        // Delay navigation to allow the animation to complete
        setTimeout(() => {
            navigate(`/screens/${id}`);
        }, 300); // Adjust this to match the animation duration
    };

    return (
        <div
            style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                backgroundImage: `url(${buttonsImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                color: '#fff',
            }}
        >
            <div style={{ marginTop: '160px' }}> {/* Add the desired margin-top value */}


                {/* First row of buttons */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '100px',
                        width: '100%',
                        marginBottom: '100px',
                    }}
                >
                    {buttonsData.slice(0, 3).map((button) => (
                        <button
                            key={button.id}
                            onClick={() => handleClick(button.id)}
                            style={{
                                ...buttonStyle,
                                transform: clickedButton === button.id ? 'scale(0.9)' : 'scale(1)', // Scale animation
                                opacity: clickedButton === button.id ? 0.7 : 1, // Fade effect
                                transition: 'transform 0.3s ease, opacity 0.3s ease',
                            }}
                        >
                            {button.text}
                        </button>
                    ))}
                </div>

                {/* Last row of buttons */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '100px',
                        width: '100%',
                    }}
                >
                    {buttonsData.slice(3).map((button) => (
                        <button
                            key={button.id}
                            onClick={() => handleClick(button.id)}
                            style={{
                                ...buttonStyle,
                                width: '30%',
                                transform: clickedButton === button.id ? 'scale(0.9)' : 'scale(1)',
                                opacity: clickedButton === button.id ? 0.7 : 1,
                                transition: 'transform 0.3s ease, opacity 0.3s ease',
                            }}
                        >
                            {button.text}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ButtonsPage;
