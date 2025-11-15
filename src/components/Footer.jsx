import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h3 className="footer-logo">kun.uz</h3>
            <div className="footer-links">
              <a href="#about">{t('footer.about_site')}</a>
              <a href="#rss">RSS</a>
              <a href="#contact">{t('footer.contact')}</a>
              <a href="#ads">{t('footer.ads')}</a>
              <a href="#team">{t('footer.team')}</a>
            </div>
          </div>
          <div className="footer-right">
            <div className="app-downloads">
              <div className="download-text">
                <span>{t('footer.download_on')}</span>
                <strong>{t('footer.get_it_on')}</strong>
              </div>
              <div className="app-stores">
                <a href="" className="app-store">
                  <span>{t('footer.app_store')}</span>
                </a>
                <a href="" className="google-play">
                  <span>{t('footer.google_play')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;