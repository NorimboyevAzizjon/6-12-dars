import { useState, useEffect } from 'react';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/posts?limit=20');
      const data = await response.json();
      
      const postsWithMedia = data.posts.map(post => ({
        ...post,
        videoUrl: `https://www.youtube.com/embed/${getRandomVideoId()}`,
        imageUrl: `https://dummyjson.com/image/150?${post.id}&random=${Math.random()}`,
        date: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000)
          .toLocaleDateString('uz-UZ'),
        views: Math.floor(Math.random() * 1000) + 50,
        tags: post.tags || ['video', 'yangilik']
      }));
      
      setPosts(postsWithMedia);
    } catch (error) {
      console.error('Xatolik postlarni yuklashda:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRandomVideoId = () => {
    const videos = [
      'dQw4w9WgXcQ',
      '9bZkp7q19f0', 
      'kJQP7kiw5Fk', 
      'JGwWNGJdvx8',
      '60ItHLz5WEA'  
    ];
    return videos[Math.floor(Math.random() * videos.length)];
  };

  return { posts, loading, refetch: fetchPosts };
};