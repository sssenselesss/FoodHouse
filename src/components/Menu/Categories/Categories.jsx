import s from "./Categoris.module.css";
import Category from "./Category/Category";


const initialState = [
  { id: 1, image: "./public/images/catItem.svg", name: "Салаты" },
  { id: 2, image: "./public/images/burger.svg", name: "Напитки" },
  { id: 3, image: "./public/images/pizza.svg", name: "Бургеры" },
  { id: 4, image: "./public/images/sales.svg", name: "Закуски" },
  { id: 5, image: "./public/images/zak.svg", name: "Пицца" },
  { id: 6, image: "./public/images/salat.svg", name: "Акции" },
];

const Categories = () => {
  return (
    <div className={s.categories}>
      <div className={s.wrapper}>
        {initialState.map((cat) => {
          return <Category cat={cat} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
