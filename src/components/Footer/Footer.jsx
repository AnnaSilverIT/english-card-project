import React from 'react';
import './Footer.css'; 
import icon1 from './icons/facebook.png'
import icon2 from './icons/telegram.png'
import icon3 from './icons/twitter.png'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; {new Date().getFullYear()} Гуолинго. Все права защищены.</p>
        <div className="footer__links">
          <a href="/about" className="footer__link">О нас</a>
          <a href="/contact" className="footer__link">Контакты</a>
          <a href="/privacy" className="footer__link">Политика конфиденциальности</a>
        </div>
      </div>
      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank" rel="facebook" className="footer__social-link">
          <img src={icon1} alt="Facebook" className='footer__icons'/>
        </a>
        <a href="https://twitter.com" target="_blank" rel="twitter" className="footer__social-link">
          <img src={icon3} alt="Twitter" className='footer__icons'/>
        </a>
        <a href="https://telegram.com" target="_blank" rel="telegram" className="footer__social-link">
          <img src={icon2} alt="Telegram" className='footer__icons' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;