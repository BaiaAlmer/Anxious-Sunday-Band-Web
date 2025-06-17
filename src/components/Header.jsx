import React from "react";

function Header() {
  return (
    <header>
      <div className="nav">
        <a href="/"><img className="anxiousLogo" src="/assets/anxiousLogoLong.PNG" alt="anxiousLogo" /></a>
        <div className="navbar">
          <a href="https://open.spotify.com/artist/63NPfZn19ccqF7RhnYHUDU" target="_blank" rel="noopener noreferrer">Spotify</a>
          {/* <a href="https://www.instagram.com/anxioussunday" target="_blank" rel="noopener noreferrer">Instagram</a> */}
          <a href="https://www.youtube.com/@AnxiousSunday" target="_blank" rel="noopener noreferrer">YouTube</a>
          {/* <a href="https://www.tiktok.com/@anxioussunday" target="_blank" rel="noopener noreferrer">TikTok</a> */}
          <a href="https://soundcloud.com/anxioussunday" target="_blank" rel="noopener noreferrer">SoundCloud</a>
        </div>
      </div>
    </header>
  );
}

// NEXT TASK: BIKIN NAV LINK JADI NEWTAB


export default Header;
