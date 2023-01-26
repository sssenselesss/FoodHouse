
import Categories from './Categories/Categories'
import Dishes from './Dishes/Dishes'
import s from './Menu.module.css'
const Menu = () =>{
    return (
        <div className={s.menu}>
            <div className={s.MenuTitle}>
                <span>Наше Меню </span> 
                <div className={s.line}></div>
            </div>
            <div className={s.wrapper}>
                <Categories />
                <Dishes />
            </div>
        </div>
    )
}

export default Menu
