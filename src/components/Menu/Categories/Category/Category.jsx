import s from './Category.module.css'

const Category = (props) =>{
    return (
     
        <div className={s.item}>
       
          <img className={s.image} src={props.cat.image} alt="" />
          <span className={s.title}>{props.cat.name}</span>
        </div>
   
    )
}

export default Category