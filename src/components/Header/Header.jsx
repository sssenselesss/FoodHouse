import styles from './Header.module.css'
const Header = () =>{
    return (
    <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <img src="./src/assets/staticImages/FoodHouse.png" alt="" />
          </div>

          <ul className={styles.header_nav}>
                <li className={styles.item}>Главная</li>
                <li>Меню</li>
                <li>Сервис</li>
                <li>О нас</li>
          </ul>

          <div className={styles.cart}>
            <div className={styles.countCart}>12</div>
            <img src="./src/assets/icons/cart-icon.svg" alt="" />
          </div>
        </div>
      </header>
    )
}

export default Header