import './App.css';
import React, { useEffect, useRef } from "react";

function App() {
  const videoId = "1lx8lx2whytW074tTZfPnh0RlD_fVI1CO";
  const videoUrl = `http://localhost:5225/api/media/video/${videoId}`;
  const videoRef = useRef(null);

  const handleContextMenu = (e) => {
    e.preventDefault();  
  };

  useEffect(() => {
    // Video elementi yüklendiğinde metadata'yı hemen yükle
    if (videoRef.current) {
      videoRef.current.preload = "metadata";
    }
  }, []);

  const handleLoadedMetadata = () => {
    // Metadata yüklendiğinde video süresi hazır olacak
    if (videoRef.current) {
      console.log("Video süresi:", videoRef.current.duration);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="video-container">
          <video 
            ref={videoRef}
            controls 
            width="100%" 
            height="auto"
            controlsList="nodownload" 
            onContextMenu={handleContextMenu}
            onLoadedMetadata={handleLoadedMetadata}
            preload="metadata"
            style={{ pointerEvents: 'auto' }}
          >
            <source src={videoUrl} type="video/mp4" />
            Tarayıcınız bu videoyu desteklemiyor.
          </video>
        </div>
      </header>
    </div>
  );
}

export default App;