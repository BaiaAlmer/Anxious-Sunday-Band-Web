import React, { useState } from "react";
import { Fade } from '@mui/material';

function About(){
    const [imageclick, setImageClick] = useState('bandPIC.JPEG');
    const [showImage, setShowImage] = useState(true);

    function imageChange(event) {
        const clickedName = event.target.id;
        setShowImage(false); 

        setTimeout(() => {
        setImageClick(clickedName + ".JPEG");
            setShowImage(true);
        }, 301);
    }

    return (
        <div className="aboutContainer">
            <Fade in={showImage} timeout={300} mountOnEnter unmountOnExit >
                <img src={"/assets/" + imageclick} alt="bandImage" />
            </Fade>
            <div className="about-text">
                <h2>Meet Anxious Sunday</h2>
                <p>
                    <strong id="bandPIC" 
                        style={{cursor: imageclick!=='bandPIC.JPEG' && "pointer"}} 
                        onClick={imageChange}>
                            Anxious Sunday
                    </strong> is a band consisting of 5 people.
                </p>
                <ul>
                <li><strong id="hesa" onClick={imageChange} >Mahesa</strong> – Vocalist</li>
                <li><strong id="baia" onClick={imageChange} >Baia</strong> – Lead Guitarist</li>
                <li><strong id="giproy" onClick={imageChange}>Ghifary</strong> – Rhythm Guitarist</li>
                <li><strong id="bimo" onClick={imageChange}>Bimo</strong> – Bassist</li>
                <li><strong id="rapip" onClick={imageChange}>Rafif</strong> – Drummer</li>
                </ul>
                <p>We're passionate about reviving the early 2000s Pop Punk and Emo scene—bringing back the nostalgic sounds you’ve been missing.</p>
            </div>
        </div>
    );
    
}

export default About;