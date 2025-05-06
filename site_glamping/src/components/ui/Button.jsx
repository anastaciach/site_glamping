import './Button.scss'
import calendarSVG from'../../assets/images/svg/calendar.svg'
export default function Button({children,svgIs}){
    return (<button className="list-contact__button button">{children}<img src={`${(svgIs)?calendarSVG:''}`}></img></button>);
}