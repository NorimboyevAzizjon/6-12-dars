import React from 'react';

function VideoPost({ post, onPostClick, onSavePost, isSaved, size = 'small' }) {
  const handleSaveClick = (e) => {
    e.stopPropagation();
    onSavePost(post);
  };

  const handlePostClick = () => {
    onPostClick(post);
  };

  return (
    <div 
      className={`video-post ${size}`} 
      onClick={handlePostClick}
    >
      <div className="video-thumbnail">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          onError={(e) => {
            e.target.src = 'https://dummyjson.com/image/150';
          }}
        />
        <div className="video-overlay">
          <div className="play-button">
            ▶
          </div>
        </div>
        <div className="video-label">
          VIDEO
        </div>
      </div>
      
      <div className="video-content">
        <h3 className="video-title">{post.title}</h3>
        <p className="video-description">{post.body}</p>
        
        <div className="video-meta">
          <div className="meta-info">
            <span className="date">{post.date}</span>
            <span className="views">👁️ {post.views}</span>
          </div>
          <button 
            className={`save-btn ${isSaved ? 'saved' : ''}`}
            onClick={handleSaveClick}
          >
            {isSaved ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoPost;