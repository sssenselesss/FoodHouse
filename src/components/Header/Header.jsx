import styles from './Header.module.css'
import Logo from './../../assets/images/FoodHouse.png'
import Cart from '../../assets/images/cart-icon.svg'
const Header = () =>{
    return (
    <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <img src={Logo} alt="" className={styles.image}/>
          </div>

          <ul className={styles.header_nav}>
                <li className={styles.item}>Главная</li>
                <li>Меню</li>
                <li>Сервис</li>
                <li>О нас</li>
          </ul>

          <div className={styles.cart}>
            <div className={styles.countCart}>12</div>
            <img src={Cart} alt="" className={styles.CartSvg} />
          </div>
        </div>
      </header>
    )
}

export default Header