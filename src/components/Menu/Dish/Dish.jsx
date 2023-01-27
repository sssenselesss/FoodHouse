import s from "./Dish.module.css";
const Dish = (props) => {
  return (
    <div className={s.item}>
      <img
        className={s.image}
        src={props.item.image}
        alt=""
      />
      <div className={s.discription}>
        <div className={s.discText}>
          <span className={s.title}>{props.item.name}</span>
          <span className={s.weight}>{props.item.weight} грамм - 1 порция</span>
          <span className={s.calories}>
          {props.item.belki} - белков, {props.item.jiri} - жиров, {props.item.ygl} - углеводов
          </span>
        </div>
        <button className={s.button}>Добавить в корзину</button>
      </div>
    </div>
  );
};
export default Dish;
