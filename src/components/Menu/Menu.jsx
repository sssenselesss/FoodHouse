import { useEffect, useRef, useState } from "react";
import { initialState, initialStateCat } from "../../data/state";
import Category from "./Category/Category";
import Dish from "./Dish/Dish";

import s from "./Menu.module.css";



const Menu = () => {
  const [dishes, setDishes] = useState(initialState);
  const [cats, setCats] = useState(initialStateCat);

  const [selectedCategory, setSelectedCategory] = useState("none");

  const onChangeSelectedCategory = (type) => {
    setSelectedCategory(type);
  };

  useEffect(() => {
    setDishes((prev) => {
      prev = [...prev];

      prev = initialState.filter((product) => product.type == selectedCategory);
      if (selectedCategory === "none") {
        prev = initialState;
      }
      return prev;
    });
  }, [selectedCategory]);

  return (
    <div className={s.menu}>
      <div className={s.MenuTitle}>
        <span>Наше Меню </span>
        <div className={s.line}></div>
      </div>

      <div className={s.categories}>
        <div className={s.cat_wrapper}>
          {cats.map((cat) => {
            return (
              <Category
                cat={cat}
                onChangeSelectedCategory={onChangeSelectedCategory}
              />
            );
          })}
        </div>
      </div>

      <div className={s.dishes}>
        <div className={s.dish_wrapper}>
          {dishes.map((item) => {
            return <Dish item={item} />;
          })}
        </div>
        <button className={s.showMore}>Показать еще</button>
      </div>
    </div>
  );
};

export default Menu;
