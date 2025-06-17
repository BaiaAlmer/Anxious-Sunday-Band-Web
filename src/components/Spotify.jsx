import React from "react";

function Spotify(){
    return (
        <div className="spotify">
            <div className="embed 1">
                <h2>Latest Release</h2>
                <iframe
                    src="https://open.spotify.com/embed/album/1jR2nY0UahUwCeatP8Lso8?utm_source=generator" 
                    width="100%" 
                    height="352" 
                    frameBorder="0" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy">
                </iframe>
            </div>
            <div className="embed 2">
                <h2>Top Tracks</h2>
                <iframe
                    src="https://open.spotify.com/embed/artist/63NPfZn19ccqF7RhnYHUDU?utm_source=generator"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe> 
            </div>
        </div>
    );
}

export default Spotify;