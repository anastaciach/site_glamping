import   './Header.scss';
// import "../../ui/Button"
import Button from '../../ui/Button';


function Header(){
    let phone='+7 995 383 16 16'
    return (
        <div className="header">
            <div className="header__logo">
                <img src="./../../../src/assets/images/svg/logo.svg" alt="" />
            </div>
                <nav className="header__list">
                    <div className="header__item">Главная</div>
                    <div className="header__item">Номера</div>
                    <div className="header__item">Услуги</div>
                    <div className="header__item">О нас</div>
                    <div className="header__item">Контакты</div>
                </nav>
                <div className="header__list-contact">
                    <div className='list-contact__phone'><img src='./../../../src/assets/images/svg/mobile.svg'></img>{phone}</div>
                    <Button >Забронировать</Button>
                    <div ></div>
                </div>
        </div>
    );
}
export default Header;