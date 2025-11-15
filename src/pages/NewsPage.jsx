import React from 'react';
import VideoPost from '../components/VideoPost';

function NewsPage({ posts, loading, onPostClick, onSavePost, savedPosts }) {
  if (loading) {
    return <div className="loading">Yuklanmoqda...</div>;
  }

  const getPostSize = (index) => {
    const sizeMap = {
      0: 'large',    
      1: 'medium',   
      2: 'medium',   
      3: 'small',    
      4: 'small',    
      5: 'small',    
      6: 'small',    
      7: 'medium',   
      8: 'medium'    
    };
    
    return sizeMap[index] || 'small';
  };

  return (
    <div className="news-grid">
      {posts.map((post, index) => (
        <VideoPost
          key={post.id}
          post={post}
          size={getPostSize(index)}
          onPostClick={onPostClick}
          onSavePost={onSavePost}
          isSaved={savedPosts.some(p => p.id === post.id)}
        />
      ))}
    </div>
  );
}

export default NewsPage;