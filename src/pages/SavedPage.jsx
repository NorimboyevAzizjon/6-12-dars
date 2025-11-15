import React from 'react';
import VideoPost from '../components/VideoPost';

function SavedPage({ savedPosts, onPostClick, onRemovePost }) {
  if (savedPosts.length === 0) {
    return (
      <div className="empty-saved">
        <h3>Saqlangan postlar yo'q</h3>
        <p>Postlarni saqlash uchun ❤️ tugmasini bosing</p>
      </div>
    );
  }

  return (
    <div>
      <div className="saved-header">
        <h2>Saqlangan Postlar ({savedPosts.length})</h2>
      </div>
      
      <div className="news-grid">
        {savedPosts.map((post, index) => (
          <VideoPost
            key={post.id}
            post={post}
            size="small"
            onPostClick={onPostClick}
            onSavePost={() => onRemovePost(post.id)}
            isSaved={true}
          />
        ))}
      </div>
    </div>
  );
}

export default SavedPage;