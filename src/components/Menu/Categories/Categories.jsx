import s from "./Categoris.module.css";
import Category from "./Category/Category";


const initialState = [
  { id: 1, image: "./public/icons/catItem.svg", name: "Салаты" },
  { id: 2, image: "./public/icons/burger.svg", name: "Напитки" },
  { id: 3, image: "./public/icons/pizza.svg", name: "Бургеры" },
  { id: 4, image: "./public/icons/sales.svg", name: "Закуски" },
  { id: 5, image: "./public/icons/zak.svg", name: "Пицца" },
  { id: 6, image: "./public/icons/salat.svg", name: "Акции" },
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
