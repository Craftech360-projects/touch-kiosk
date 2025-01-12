import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import startImage from '../../../../public/start.png';

const StartPage = () => {
    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
            navigate('/buttons'); // Navigate after the animation
        }, 200); // Delay to let the animation play
    };

    return (
        <div
            style={{
                height: '100vh', // Full viewport height
                width: '100vw',  // Full viewport width
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'end',
                backgroundImage: `url(${startImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                margin: 0,        // No margins
                padding: 0,       // No padding
                overflow: 'hidden', // Prevent scrollbars
                boxSizing: 'border-box', // Ensure no overflow due to padding or border
            }}
        >
            <button
                onClick={handleClick}
                style={{
                    width: '500px',
                    marginBottom: '100px',
                    height: '110px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(to bottom, #F06B3B, #E90068)', // Linear gradient from top to bottom
                    borderTop: '10px solid white', // Thick white border at the top
                    borderBottom: '10px solid white', // Thick white border at the bottom
                    borderLeft: 'none',
                    borderRight: 'none',
                    color: 'white',
                    fontSize: '60px',
                    transition: 'transform 0.2s ease, background-color 0.3s ease',
                    transform: isClicked ? 'scale(0.9)' : 'scale(1)', // Shrink slightly on click
                }}
            >
                Start
            </button>
        </div>
    );
};

export default StartPage;
