import React from 'react'

const VideoSection = () => {
    return (
      <section className="video-section">
        <h2>
          Our formula for <span className="highlight">success.</span>
        </h2>
        <div className="video-container">
          <iframe 
            src="https://www.youtube.com/embed/57OU18cogJI" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </section>
    );
  };

  export default VideoSection;