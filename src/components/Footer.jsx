import React from "react";
import "./style/Footer.css"

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Colum1 */}
                    <div className="col">
                    </div>
                    {/* Colum2*/}
                    <div className="col">
                        <ul className="list-unstyled">
                            <h5>Компания</h5>
                            <li><a href="#" >О нас</a></li>
                            <li><a href="#">Карьеры</a></li>
                            <li><a href="#">Безопасность</a></li>
                            <li><a href="#">Статус</a></li>
                            <li><a href="#">Условия и конфиденциальность</a></li>
                        </ul>
                    </div>
                    {/* Colum3*/}
                    <div className="col">
                        <ul className="list-unstyled">
                            <h5>Скачать</h5>
                            <li><a href="#">iOS & Android</a></li>
                            <li><a href="#">Mac & Windows</a></li>
                            <li><a href="#">Календарь</a></li>
                            <li><a href="#">Web Clipper</a></li>
                        </ul>
                    </div>
                    {/* Colum4*/}
                    <div className="col">
                    <ul className="list-unstyled">
                            <h5>Ресурсы</h5>
                            <li><a href="#">Справочный центр</a></li>
                            <li><a href="#">Ценообразование</a></li>
                            <li><a href="#">Блог</a></li>
                            <li><a href="#">Сообщество</a></li>
                            <li><a href="#">Интеграции</a></li>
                            <li><a href="#">Шаблоны</a></li>
                            <li><a href="#">Филиалы</a></li>
                        </ul>
                    </div>
                    {/* Colum5*/}
                    <div className="col">
                    <ul className="list-unstyled">
                            <h5>Понятие для</h5>
                            <li><a href="#">Предприятие</a></li>
                            <li><a href="#">Малый бизнес</a></li>
                            <li><a href="#">Личный</a></li>
                        </ul>
                        <b><a href="#">Explore more→</a></b>
                    </div>
                </div>   
            </div>            
        </div>
    )
}

export default Footer;