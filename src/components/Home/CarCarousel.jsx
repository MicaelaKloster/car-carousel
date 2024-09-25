import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/CarCarousel.module.css';
import autoAudi from '../../img/auto-audi.png';
import autoFerrari from '../../img/auto-ferrari.png';
import autoTesla from '../../img/auto-tesla.png';
import logoHonda from '../../img/logo-honda.png';
import logoFerrari from '../../img/logo-ferrari.png';
import logoTesla from '../../img/logo-tesla.png';
import logoAudi from '../../img/logo-audi.png';
import logoToyota from '../../img/logo-toyota.png'

const CarCarousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <div id="carCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={autoAudi} className="d-block w-100" alt="Audi" />
            <div className="carousel-caption">
              <h5 className={styles.backgroundText}>AUDI</h5>
              <h2>Find Your Dream <span className={styles.carText}>CAR</span></h2>
              <button className={styles.orderNowButton}>Order Now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={autoFerrari} className="d-block w-100" alt="Ferrari" />
            <div className="carousel-caption">
              <h5 className={styles.backgroundText}>FERRARI</h5>
              <h2>Find Your Dream <span className={styles.carText}>CAR</span></h2>
              <button className={styles.orderNowButton}>Order Now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={autoTesla} className="d-block w-100" alt="Tesla" />
            <div className="carousel-caption">
              <h5 className={styles.backgroundText}>TESLA</h5>
              <h2>Find Your Dream <span className={styles.carText}>CAR</span></h2>
              <button className={styles.orderNowButton}>Order Now</button>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
      <div className={styles.brandSection}>
        <h3>Brands</h3>
        <div className={styles.brandLogos}>
          <img src={logoHonda} alt="Honda" />
          <img src={logoFerrari} alt="Ferrari" />
          <img src={logoToyota} alt="Toyota" />
          <img src={logoAudi} alt="Audi" />
          <img src={logoTesla} alt="Tesla" />
        </div>
      </div>
    </div>
  );
}

export default CarCarousel;
