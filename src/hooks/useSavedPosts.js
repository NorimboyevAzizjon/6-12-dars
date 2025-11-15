import { useState, useEffect } from 'react';

export const useSavedPosts = () => {
  const [savedPosts, setSavedPosts] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('savedPosts');
    if (saved) {
      setSavedPosts(JSON.parse(saved));
    }
  }, []);

  const savePost = (post) => {
    if (!savedPosts.find(p => p.id === post.id)) {
      const newSavedPosts = [...savedPosts, post];
      setSavedPosts(newSavedPosts);
      localStorage.setItem('savedPosts', JSON.stringify(newSavedPosts));
    }
  };

  const removeSavedPost = (postId) => {
    const newSavedPosts = savedPosts.filter(post => post.id !== postId);
    setSavedPosts(newSavedPosts);
    localStorage.setItem('savedPosts', JSON.stringify(newSavedPosts));
  };

  return { savedPosts, savePost, removeSavedPost };
};