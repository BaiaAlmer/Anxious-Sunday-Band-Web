import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>ⓒ <span>{year}</span> Anxious Sunday</p>
      <div className="footerIcon">
        <a href="https://www.tiktok.com/@anxioussunday" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} style={{ color: 'white', marginLeft:"25px", height:"25px" }} />
        </a>
        <a href="https://www.instagram.com/anxioussunday" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} style={{ color: 'white', marginLeft:"25px", height:"25px" }} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
