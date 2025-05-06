import './Button-arrow.scss'
import arrowIcon from '../../../../../site_glamping/src/assets/images/svg/arrow.svg'; // ИМПОРТ ИЗОБРАЖЕНИЯ

 export default function ButtonArrow({onClick}){
   return(<button className="button-arrow" onClick={onClick}><img src={arrowIcon}></img></button>);
 }
