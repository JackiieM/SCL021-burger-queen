import { Link } from "react-router-dom"
import { MenuCategories } from '../components/MenuCategories'
import './orders.css'
export const Orders = () => {
    return (
        <div id="ordersCont">
            <header>
                <nav>
                    <ul>
                        <li>Pedido Nuevo</li>
                        <li>Pedidos Listos</li>
                        <Link to="/" id="backBtnCont" ><img id="backBtn" src="./src/assets/backBtn.png"/></Link>
                    </ul>
                </nav>
            </header>
            <div id="ordersBody">
                <section id="menuItems">
                    <div id="menuTime">
                        <button className="menuBtn">AM<img src="https://api.iconify.design/charm/sun.svg?color=%23eeece7&width=50&height=50"/></button>
                        <button className="menuBtn">PM<img src="https://api.iconify.design/tabler/sunset-2.svg?color=%23eeece7&width=50&height=50"/></button>
                    </div>
                    <div id="menuCategoryCont">
                        <div className="menuCategory">
                            <MenuCategories/>
                        </div>
                    </div>                       
                </section>
                <section id="orderList">

                </section>
            </div>
        </div>
        
    )
}