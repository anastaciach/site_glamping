import "./Header.module.scss"
// import "../../ui/Button"
import '../../ui/Button'


function Header(){
    let phone='+7 995 383 16 16'
    return (
        <div className="header">
                <nav className="header__list">
                    <div className="header__item">Главная</div>
                    <div className="header__item">Номера</div>
                    <div className="header__item">Услуги</div>
                    <div className="header__item">О нас</div>
                    <div className="header__item">Контакты</div>
                </nav>
                <div className="header__list-contact">
                    <div className='list-contact__phone'>{phone}</div>
                    {/* <Button>Забронировать</Button> */}
                    <div className='list-contact__button button'></div>
                </div>
        </div>
    );
}
export default Header;