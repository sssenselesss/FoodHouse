import s from "./Categoris.module.css";
import Category from "./Category/Category";


const initialState = [
  { id: 1, image: "./src/assets/images/catItem.svg", name: "Салаты" },
  { id: 2, image: "./src/assets/images/burger.svg", name: "Напитки" },
  { id: 3, image: "./src/assets/images/pizza.svg", name: "Бургеры" },
  { id: 4, image: "./src/assets/images/sales.svg", name: "Закуски" },
  { id: 5, image: "./src/assets/images/zak.svg", name: "Пицца" },
  { id: 6, image: "./src/assets/images/salat.svg", name: "Акции" },
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
