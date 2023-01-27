import s from './Category.module.css'

const Category = ({cat,onChangeSelectedCategory}) =>{
    return (
        <div className={s.item}  onClick={()=>onChangeSelectedCategory(cat.type)}>
          <img className={s.image} src={cat.image} alt="" />
          <span className={s.title}>{cat.name}</span>
        </div>
   
    )
}

export default Category