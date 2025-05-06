import './Button-arrow.scss'
import arrowIcon from '../../../../../site_glamping/src/assets/images/svg/arrow.svg'; // ИМПОРТ ИЗОБРАЖЕНИЯ

 export default function ButtonArrow({onClick,inverted}){
   return(<button className={`button-arrow ${inverted?'button-arrow--inverted':''}`}  onClick={onClick}><img src={arrowIcon}></img></button>);
 }
