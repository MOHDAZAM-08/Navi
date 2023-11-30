// YourComponent.js
import React, { useState } from 'react';
import './LandingPage.css'; // Import the CSS file
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

const YourComponent = () => {

    const [isLeftSectionVisible, setLeftSectionVisibility] = useState(true);

    const toggleLeftSection = () => {
        setLeftSectionVisibility(!isLeftSectionVisible);
    };



    return (
        <div className="container">
            <div className={`left-section ${isLeftSectionVisible ? '' : 'hidden'}`}>
                <Sidebar />
            </div>
            <div className="right-section">
                <div className="top-right-section">
                    <Navbar />
                </div>
                <div className="HomeButton" onClick={toggleLeftSection}>Home</div>
                <div className="bottom-right-section">
                    <h2>Bottom Right Section</h2>
                </div>
            </div>
        </div>
    );
};

export default YourComponent;
