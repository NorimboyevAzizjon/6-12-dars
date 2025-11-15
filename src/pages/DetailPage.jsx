import React from 'react';

function DetailPage({ post, onBack, onSavePost, isSaved }) {
  if (!post) {
    return <div>Post topilmadi</div>;
  }

  const handleSaveClick = () => {
    onSavePost(post);
  };

  return (
    <div className="detail-page">
      <button className="back-btn" onClick={onBack}>
        ← Ortga qaytish
      </button>
      <div className="video-section">
        <h3 className="section-label">VIDEO</h3>
        <div className="video-player-container">
          <iframe
            className="detail-video"
            src={post.videoUrl}
            title={post.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="content-section">
        <h1 className="detail-title">{post.title}</h1>
        
        <div className="detail-body">
          <p>{post.body}</p>
          <p>{post.body.repeat(2)}</p>
        </div>
      </div>
      <div className="detail-meta">
        <div className="meta-info">
          <span className="date">📅 {post.date}</span>
          <span className="views">👁️ {post.views} ko'rish</span>
          <span className="tags">🏷️ {post.tags?.join(', ')}</span>
        </div>
        <button 
          className={`save-btn ${isSaved ? 'saved' : ''}`}
          onClick={handleSaveClick}
        >
          {isSaved ? '❤️ Saqlangan' : '🤍 Saqlash'}
        </button>
      </div>
    </div>
  );
}

export default DetailPage;