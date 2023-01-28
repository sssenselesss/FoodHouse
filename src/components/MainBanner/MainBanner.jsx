import styles from "./MainBanner.module.css";

import Main from './../../assets/images/MainImg.png'

const MainBanner = () => {
  return (
    <div className={styles.MainBanner}>
      <div className={styles.wrapper}>
        <div className={styles.BannerLeftSide}>
          <span className={styles.delivery}>
            Экспресс-доставка от Яндекс.Еды
          </span>
          <span className={styles.title}>Быстро и вкусно<span className={styles.accent}>.</span></span>
          <span className={styles.subTitle}>Сеть быстрого питания #1 в Казани</span>
          <div className={styles.bannerBtn}>
              <button className={styles.button}> Сделать заказ</button>
              <span className={styles.btnDiscription}>бесплатная доставка от 500 рублей</span>
          </div>

        </div>
        <div className={styles.BannerRightSide}>
          <img src={Main} alt="123"  className={styles.image}/>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
