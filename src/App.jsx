import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsPage from './pages/NewsPage';
import DetailPage from './pages/DetailPage';
import SavedPage from './pages/SavedPage';
import { usePosts } from './hooks/usePosts';
import { useSavedPosts } from './hooks/useSavedPosts';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('news');
  const [selectedPost, setSelectedPost] = useState(null);
  const { posts, loading } = usePosts();
  const { savedPosts, savePost, removeSavedPost } = useSavedPosts();

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setCurrentPage('detail');
  };

  const handleBack = () => {
    setCurrentPage('news');
    setSelectedPost(null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'news':
        return (
          <NewsPage
            posts={posts}
            loading={loading}
            onPostClick={handlePostClick}
            onSavePost={savePost}
            savedPosts={savedPosts}
          />
        );
      case 'detail':
        return (
          <DetailPage
            post={selectedPost}
            onBack={handleBack}
            onSavePost={savePost}
            isSaved={savedPosts.some(p => p.id === selectedPost?.id)}
          />
        );
      case 'saved':
        return (
          <SavedPage
            savedPosts={savedPosts}
            onPostClick={handlePostClick}
            onRemovePost={removeSavedPost}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        <div className="container">
          {renderPage()}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;