import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import './styles/components/main.scss';
import phoneImage from './styles/images/phone1.png'; // Обновите путь к изображению
import iconRect from './styles/images/icon_rect.svg'; // Импортируем иконку
import iconFb from './styles/images/icon_fb.svg'; // Импортируем иконку Facebook
import iconIG from './styles/images/icon_ig.svg'; // Импортируем иконку Facebook
import iconTW from './styles/images/icon_tw.svg'; // Импортируем иконку Facebook
import iconVK from './styles/images/icon_vk.svg'; // Импортируем иконку Facebook
import iconOK from './styles/images/icon_ok.svg'; // Импортируем иконку Facebook
import shopGuide from './styles/images/shopguide.svg';
import onlyPopup from './styles/images/only_popup.svg';
import ios from './styles/images/download_android.svg';
import android from './styles/images/download_ios.svg';
import down from './styles/images/arrow_down.svg';
import like from './styles/images/like.svg';
import geo from './styles/images/geo.svg';
import bell from './styles/images/bell.svg';
import sheet from './styles/images/sheet.svg';
import CustomTabs from './styles/components//CustomTabs';
import phoneImage2 from './styles/images/phone2_ref.png';
import phoneImage3 from './styles/images/phone3_2.png';
import phoneImage4 from './styles/images/phone3_1.png';
import left from './styles/images/arrow_left.svg';
import prada from './styles/images/logos/logo_prada.png';
import nike from './styles/images/logos/logo_nike.png';
import cym from './styles/images/logos/logo_cym.png';
import adidas from './styles/images//logos/logo_adidas.png';
import gum from './styles/images/logos/logo_gum.png';
import zara from './styles/images/logos/logo_zara.png';
import pazolini from './styles/images/logos/logo_carlo.png';
import right from './styles/images/arrow_right.svg';
import contact from './styles/images/contact.svg';


const logos = [
  { 
    src: prada, 
    alt: 'Prada Logo', 
    className: 'logo logo-prada'
  },
  { 
    src: nike, 
    alt: 'Nike Logo', 
    className: 'logo logo-nike'
  },
  { 
    src: cym, 
    alt: 'Cym Logo', 
    className: 'logo logo-cym'
  },
  { 
    src: adidas, 
    alt: 'Adidas Logo', 
    className: 'logo logo-adidas'
  },
  { 
    src: gum, 
    alt: 'Gum Logo', 
    className: 'logo logo-gum'
  },
  { 
    src: zara, 
    alt: 'Zara Logo', 
    className: 'logo logo-zara'
  },
  { 
    src: pazolini, 
    alt: 'Pazolini Logo', 
    className: 'logo logo-pazolini'
  }
];

function App() {

  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };
  
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'Enter') {
        event.preventDefault();
        // Увеличение масштаба
        adjustScale(0.1);
      } else if (event.ctrlKey && event.shiftKey && event.key === 'Enter') {
        event.preventDefault();
        // Уменьшение масштаба
        adjustScale(-0.1);
      }
    };

    const handleWheel = (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
        // Масштабирование в зависимости от направления прокрутки
        const delta = event.deltaY < 0 ? 0.1 : -0.1; // Увеличиваем при прокрутке вверх, уменьшаем при прокрутке вниз
        adjustScale(delta);
      }
    };

    const adjustScale = (delta) => {
      const currentScale = parseFloat(document.body.style.transform.replace('scale(', '').replace(')', '')) || 1;
      const newScale = Math.max(0.1, currentScale + delta); // Ограничиваем минимальный масштаб
      document.body.style.transform = `scale(${newScale})`;
      document.body.style.transformOrigin = '0 0';
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('wheel', handleWheel);

    // Очистка обработчиков при размонтировании
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="page">
      <div className="page__outer-container">
        <div className="page__container">

          <img src={phoneImage} alt="Phone" className="page__overlay-image" />

          <img src={shopGuide} alt="Shop Guide" className="page__shop-guide" />

          <div className="page__social-icons">
            <div className="page__icon-rect">
              <img src={iconRect} alt="Icon Facebook" className="icon" />
              <img src={iconFb} alt="Icon Facebook" className="icon-All" />
            </div>
            {/* Остальные иконки с изображением icon_rect */}
            <div className="page__icon-rect">
              <img src={iconRect} alt="Icon Rect" className="icon" />
              <img src={iconIG} alt="Icon Facebook" className="icon-All" />
            </div>
            <div className="page__icon-rect">
              <img src={iconRect} alt="Icon Rect" className="icon" />
              <img src={iconTW} alt="Icon Facebook" className="icon-All" />
            </div>
            <div className="page__icon-rect">
              <img src={iconRect} alt="Icon Rect" className="icon" />
              <img src={iconVK} alt="Icon Facebook" className="icon-All" />
            </div>
            <div className="page__icon-rect">
              <img src={iconRect} alt="Icon Rect" className="icon" />
              <img src={iconOK} alt="Icon Facebook" className="icon-All" />
            </div>
          </div>

          <div className="page__promo">
            <img src={onlyPopup} alt="Only Popup" className="page__promo-image" />
            <div className="page__promo-text">ТОЛЬКО ЛУЧШИЕ АКЦИИ</div>
          </div>

          <div className="page__loading">
            <div className="page__loading-bar" />
            <span className="page__loading-text">загрузить</span>
            <div className="page__loading-bar" />
          </div>

          <button className="page__partner-button">СТАТЬ ПАРТНЕРОМ</button>

          <div className="page__app-buttons">
            <button className="page__app-button--android">
              <img src={android}/>
            </button>
            <button className="page__app-button--ios">
              <img src={ios}/>
            </button>
          </div>
        </div>

        <button className="page__scroll-button--turquoise">
          <span className="page__scroll-button-text">ВНИЗ</span>
          <img src={down} alt="arrow down" className="page__scroll-arrow" />
          <span className="page__scroll-button-text">ВНИЗ</span>
        </button>
        
        <div className="page__icon-border">
          <div className="page__icon-item">
            <img src={like} alt="Like Icon" className="page__like" />
            <h4 className="page__icon-title">ТОЛЬКО ЛУЧШЕЕ</h4>
            <p className="page__icon-text">Всегда актуальные акции и скидки у вас в телефоне</p>
          </div>
          <div className="page__icon-item">
            <img src={geo} alt="Geo Icon" className="page__geo" />
            <h4 className="page__icon-title">ВСЕ РЯДОМ</h4>
            <p className="page__icon-text">Находите ближайшие акции на карте рядом с вами</p>
          </div>
          <div className="page__icon-item">
            <img src={bell} alt="Bell Icon" className="page__bell" />
            <h4 className="page__icon-title">УВЕДОМЛЕНИЯ</h4>
            <p className="page__icon-text">Подписывайтесь только на то, что вас интересует и всегда будьте в курсе новых акций</p>
          </div>
          <div className="page__icon-item">
            <img src={sheet} alt="Sheet Icon" className="page__sheet" />
            <h4 className="page__icon-title">КАТАЛОГ</h4>
            <p className="page__icon-text">Огромный каталог с информацией о магазинах, брендах и ТЦ всегда под рукой</p>
          </div>
        </div>

        <div className="page__tab-wrapper" style={{ backgroundColor: '#1edbdb' }}>
          <div className="page__tab-container">
            <div>
              <CustomTabs/>
            </div>
            <img src={phoneImage2} alt="Phone" className="page__phone-image" />
            <button className="page__favorite-button">
              ИЗБРАННОЕ
            </button>
          </div>
        </div>

        <div className="page__gray-section">
          <div className="page__text-content">
            <h1 className="page__container-title">НАШИ АКЦИИ</h1>
            <p className="page__section-description">
              Каждый день в Москве распродажи.
              <br />
              В акциях и скидках дня могут принимать участие любые группы
              <br />
              товаров. Особенно популярны распродажи одежды и обуви,
              <br />
              распродажи мебели, распродажи сумок.
            </p>
          </div>
            <img src={phoneImage3} alt="Phone2" className="page__additional-image--first" />
            <img src={phoneImage4} alt="Phone3" className="page__additional-image--second" />
        </div>

        <h1 className="page__partners-title">НАШИ ПАРТНЁРЫ</h1>

        <div className="page__parent-container">
          <div className="page__logos-containers">
          <button className="page__scroll-button--left" onClick={scrollLeft} disabled={!canScrollLeft}>
            <img src={left} alt="Scroll Left" />
          </button>

            <div className="page__logo-list" ref={scrollRef} onScroll={checkScroll}>
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className={logo.className}
                  style={logo.style}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = 0.5}
                />
              ))}
            </div>

            <button className="page__scroll-button--right" onClick={scrollRight} disabled={!canScrollRight}>
              <img src={right} alt="Scroll Right" />
            </button>
          </div>
        </div>

        <p className="page__partnership-description">Хотите стать партнёром? 
        <br/>
        Напишите нам и про ваши акции узнают все.</p>

        <button className="page__cta-button">СТАТЬ ПАРТНЁРОМ</button>

        <div className="page__footer">
          <div className="page_footer-left">
            <p className="page_footer-text">2016 SHOPGUIDE</p>
            <div className="page_footer-links"> 
              <a href="#" className="page_footer-link">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</a>
              <a href="#" className="page__footer-link--secondary">ПРАВИЛА ПОЛЬЗОВАНИЯ</a>
            </div>
          </div>
          <button className="page__contact-button">
            <img src={contact} alt="Contact" className="page__contact-icon" />
            <span className="page__contact-text">СВЯЗАТЬСЯ С НАМИ</span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
