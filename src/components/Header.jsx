import React from 'react';
import { useTranslation } from 'react-i18next';

function Header({ currentPage, setCurrentPage }) {
  const { t, i18n } = useTranslation();
  const savedCount = JSON.parse(localStorage.getItem('savedPosts') || '[]').length;
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <h1 className="logo">KUN.UZ</h1>
            <div className="language-switcher">
              <select 
                className="lang-select"
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="uz">O'zbekcha</option>
                <option value="ru">Русский</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="header-nav">
        <div className="container">
          <nav className="nav-menu">
            <button 
              className={currentPage === 'news' ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setCurrentPage('news')}
            >
              {t('header.main')}
            </button>
            <button className="nav-btn">{t('header.uzbekistan')}</button>
            <button className="nav-btn">{t('header.world')}</button>
            <button className="nav-btn">{t('header.economy')}</button>
            <button className="nav-btn">{t('header.society')}</button>
            <button className="nav-btn">{t('header.sport')}</button>
            <button className="nav-btn">{t('header.technology')}</button>
            <button className="nav-btn">{t('header.audio')}</button>
            <button 
              className={currentPage === 'saved' ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setCurrentPage('saved')}
            >
              {t('header.saved')} ({savedCount})
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;