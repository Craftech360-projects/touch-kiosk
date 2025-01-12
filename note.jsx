import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Import images with correct naming
import page11 from '../../../../public/page11.png';
import page12 from '../../../../public/page12.png';
import page13 from '../../../../public/page13.png';
import page14 from '../../../../public/page14.png';
import page21 from '../../../../public/page21.png';
import page22 from '../../../../public/page22.png';
import page23 from '../../../../public/page23.png';
// import page31 from '../../../../public/page31.png';
// import page32 from '../../../../public/page32.png';
// import page33 from '../../../../public/page33.png';
// import page41 from '../../../../public/page41.png';
// import page42 from '../../../../public/page42.png';
// import page43 from '../../../../public/page43.png';
// import page51 from '../../../../public/page51.png';
// import page52 from '../../../../public/page52.png';
// import page53 from '../../../../public/page53.png';

import homeBg from '../../../../public/home.png';
import backBg from '../../../../public/back.png';
import forwardBg from '../../../../public/next.png';

const ScreensPage = () => {
    const { id } = useParams(); // Get button ID from the URL
    const navigate = useNavigate();

    // Define images for each button's screens
    const screensContent = {
        1: [page11, page12, page13, page14], // Images for Button 1
        2: [page21, page22, page23],        // Images for Button 2
        // 3: [page31, page32, page33],        // Images for Button 3
        // 4: [page41, page42, page43],        // Images for Button 4
        // 5: [page51, page52, page53],        // Images for Button 5
    };

    // Get the screen set for the selected button
    const screenSet = screensContent[id] || [];
    const [currentScreen, setCurrentScreen] = useState(0);

    // Handlers for navigation
    const handleNext = () => {
        if (currentScreen < screenSet.length - 1) setCurrentScreen(currentScreen + 1);
    };

    const handleBack = () => {
        if (currentScreen > 0) setCurrentScreen(currentScreen - 1);
    };

    return (
        <div className="screen-container" style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <img
                src={screenSet[currentScreen]}
                alt={`Screen ${currentScreen + 1}`}
                className="screen-image"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />
            <div
                className="navigation-buttons"
                style={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '60px',
                    display: 'flex',
                    gap: '20px',
                }}
            >
                <button
                    onClick={() => navigate('/buttons')}
                    style={{
                        padding: '10px 20px',
                        backgroundImage: `url(${homeBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        width: '63px', // Adjust button size
                        height: '64px',
                    }}
                >
                    Home
                </button>
                {/* Back Button (conditionally rendered) */}
                {currentScreen > 0 && (
                    <button
                        onClick={handleBack}
                        style={{
                            padding: '10px 20px',
                            backgroundImage: `url(${backBg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            width: '63px', // Adjust button size
                            height: '64px',
                        }}
                    >
                        Back
                    </button>
                )}
                {/* Forward Button (conditionally rendered) */}
                {currentScreen < screenSet.length - 1 && (
                    <button
                        onClick={handleNext}
                        style={{
                            padding: '10px 20px',
                            backgroundImage: `url(${forwardBg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            width: '63px', // Adjust button size
                            height: '64px',
                        }}
                    >
                        Forward
                    </button>
                )}
            </div>
        </div>
    );
};

export default ScreensPage;