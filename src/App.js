import './App.css';
import React from "react";

function App() {
  // Video URL'ini backend üzerinden alacağız
  const BACKEND_URL = "https://[YOUR_BACKEND_URL].onrender.com";

  return (
    <div className="App">
      <header className="App-header">
        <div className="iframe-container">
          <div className="iframe-overlay">
            <div className="play-icon"></div>
          </div>
          <iframe
            src={`${BACKEND_URL}/video-proxy`}
            width="100%"
            height="500"
            allow="autoplay"
            allowFullScreen
            title="Video Player"
            style={{ border: 'none' }}
            frameBorder="0"
          />
        </div>
      </header>
    </div>
  );
}

export default App;