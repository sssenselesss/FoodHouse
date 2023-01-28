

import {CATEGORIES_TYPES} from './../types/types'
import  Burger  from './../assets/images/burger.svg';
import  Salat  from './../assets/images/salat.svg';
import  Water  from './../assets/images/catItem.svg';
import  Zak  from './../assets/images/zak.svg';
import  Pizza  from './../assets/images/pizza.svg';
import  Sales  from './../assets/images/sales.svg';


export const initialState = [
    { id: 1,name: "Греческий салат",weith: 100,belki: 12,jiri: 12,ygl: 123,
    image: "https://ferma-m2.ru/images/shop/recipe_image/crop_500h500_4.jpg",type: CATEGORIES_TYPES.SALATS,},
    {  id: 2, name: "Салат тропический", weith: 100, belki: 12, jiri: 12, ygl: 123, 
     image:   "https://klopotenko.com/wp-content/uploads/2020/05/Grecheskij-salat_siteWeb.jpg?v=1589361222", type: CATEGORIES_TYPES.SALATS, },
    {id: 3,name: "Салат Японка",weith: 100,belki: 12,jiri: 12,ygl: 123,
    image:  "https://upload.wikimedia.org/wikipedia/commons/3/3f/Mixed_Green_Salad_%2815977106804%29.jpg", type: CATEGORIES_TYPES.SALATS, },
    { id: 4, name: "Салат Летний", weith: 100, belki: 12, jiri: 12, ygl: 123, 
    image: "https://img.delo-vcusa.ru/2014/02/grecheskij-salat.jpg", type: CATEGORIES_TYPES.SALATS, },
    { id: 5, name: "Набор десертов", weith: 100, belki: 12, jiri: 12, ygl: 123,
    image:   "https://www.jacks.ru/f/product/Nabor_Damskij.jpg",type: CATEGORIES_TYPES.SALES, },
    {id: 6,name: "Салат Цезарь",weith: 100,belki: 12,jiri: 12,ygl: 123,
    image: "https://www.vsegdavkusno.ru/assets/images/recipes/2541/gruzinskij-prazdnichnyj-salat-acecili-kulinarnoe-chudo-s-kurinoj-grudkoj-low.jpg",type: CATEGORIES_TYPES.SALATS,},
    { id: 7,name: "Мясной набор",weith: 100,belki: 12,jiri: 12,ygl: 123,
    image: "https://918000.ru/image/cache/data/hot/IMG_8470-450x300.jpg",type:CATEGORIES_TYPES.SALES,},
    {id: 8,name: "Мясной угар",weith: 100, belki: 12, jiri: 12,ygl: 123,
    image: "https://www.recipetineats.com/wp-content/uploads/2020/05/Pepperoni-Pizza_5-SQjpg.jpg",type: CATEGORIES_TYPES.PIZZA,},
  
    { id: 9,name: "Пицца четыре сыра",weith: 100,belki: 12,jiri: 12,ygl: 123,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",type: CATEGORIES_TYPES.PIZZA,},
    {  id: 10, name: "Грибы фаршированные", weith: 100, belki: 12, jiri: 12, ygl: 123, 
     image:   "https://cdn.lifehacker.ru/wp-content/uploads/2017/12/shutterstock_434802100_1577345471-e1577345558279.jpg", type: CATEGORIES_TYPES.ZAKUS, },
    {id: 11,name: "Закуска из тюленя",weith: 100,belki: 12,jiri: 12,ygl: 123,
    image:  "https://lafoy.ru/photo_s/zakuski-na-prazdnichnyy-stol-recepty-foto-1141-0.jpg", type: CATEGORIES_TYPES.ZAKUS, },
    { id: 12, name: "Самый вкусный бургер", weith: 100, belki: 12, jiri: 12, ygl: 123, 
    image: "https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg", type: CATEGORIES_TYPES.BURGERS, },
    { id: 13, name: "Очень вкусный бургер", weith: 100, belki: 12, jiri: 12, ygl: 123,
    image:   "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg",type: CATEGORIES_TYPES.BURGERS, },
    {id: 14,name: "Салат Цезарь",weith: 100,belki: 12,jiri: 12,ygl: 123,
    image: "https://www.vsegdavkusno.ru/assets/images/recipes/2541/gruzinskij-prazdnichnyj-salat-acecili-kulinarnoe-chudo-s-kurinoj-grudkoj-low.jpg",type: CATEGORIES_TYPES.SALATS,},
    { id: 15,name: "Очень маленькая вода",weith: 100,belki: 12,jiri: 12,ygl: 123,
    image: "https://roscontrol.com/wp-content/uploads/2021/09/8083e030076b6a275048.jpg",type: CATEGORIES_TYPES.WATER,},
    {id: 16,name: "Вода крутая",weith: 100, belki: 12, jiri: 12,ygl: 123,
    image: "https://e0.edimdoma.ru/data/posts/0002/1388/21388-ed4_wide.jpg?1631194313",type: CATEGORIES_TYPES.WATER,},
  ];
  
  export const initialStateCat = [
    {
      id: 1,
      image: Salat ,
      name: "Салаты",
      type: "salats",
    },
    {
      id: 2,
      image: Water,
      name: "Напитки",
      type: "water",
    },
    
    {
      id: 3,
      image: Burger,
      name: "Бургеры",
      type: "burgers",
    },
    {
      id: 4,
      image: Zak,
      name: "Закуски",
      type: "zakus",
    },
    { id: 5, image: Pizza, name: "Пицца", type: "pizza" },
    {
      id: 6,
      image: Sales,
      name: "Акции",
      type: "sales",
    },
  ];