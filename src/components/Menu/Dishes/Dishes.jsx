import Dish from './Dish/Dish'
import s from './Dishes.module.css'

const initialState = [
    {id:1,name:'Греческий салат', weith: 100, belki:12,jiri:12,ygl:123, image: 'https://ferma-m2.ru/images/shop/recipe_image/crop_500h500_4.jpg'},
    {id:2,name:'Салат тропический', weith: 100, belki:12,jiri:12,ygl:123, image: 'https://klopotenko.com/wp-content/uploads/2020/05/Grecheskij-salat_siteWeb.jpg?v=1589361222'},
    {id:3,name:'Салат Японка', weith: 100, belki:12,jiri:12,ygl:123, image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Mixed_Green_Salad_%2815977106804%29.jpg'},
    {id:4,name:'Салат Летний', weith: 100, belki:12,jiri:12,ygl:123, image: 'https://img.delo-vcusa.ru/2014/02/grecheskij-salat.jpg'},
    {id:5,name:'Салат Оливье', weith: 100, belki:12,jiri:12,ygl:123, image: 'https://gotovimop.com/wp-content/uploads/2021/12/salat-novogodnij.jpg'},
    {id:6,name:'Салат Цезарь', weith: 100, belki:12,jiri:12,ygl:123, image: 'https://www.vsegdavkusno.ru/assets/images/recipes/2541/gruzinskij-prazdnichnyj-salat-acecili-kulinarnoe-chudo-s-kurinoj-grudkoj-low.jpg'},
    {id:7,name:'Салат собери сам', weith: 100, belki:12,jiri:12,ygl:123, image: 'https://www.gastronom.ru/binfiles/images/20211208/bec70040.jpg'},
    {id:7,name:'Салат крутой', weith: 100, belki:12,jiri:12,ygl:123, image: 'https://2recepta.com/recept/salat-nesvizhskij-s-seldyu-i-svekloj/salat-nesvizhskij-s-seldyu-i-svekloj.jpg'},
]

const Dishes = () =>{
    return (
        <div className={s.dishes}>
            <div className={s.wrapper}>
                {
                    initialState.map((item) =>{
                        return(
                            <Dish item={item} />
                        )
                    })
                }        
            </div>
            <button className={s.showMore}>Показать еще</button>
        </div>
    )
}

export default Dishes