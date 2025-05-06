import './Button.scss'
import calendarSVG from'../../assets/images/svg/calendar.svg'
export default function Button({children,svgIs,style }){
    return (<button className="list-contact__button button" style={style}>{children}<img src={`${(svgIs)?calendarSVG:''}`}></img></button>);
}