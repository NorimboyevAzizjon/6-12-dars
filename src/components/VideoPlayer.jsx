import React from 'react';

function VideoPlayer({ videoUrl, title }) {
  return (
    <iframe
      className="detail-video"
      src={videoUrl}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}

export default VideoPlayer;