import { useState } from "react"
import { Link } from "react-router-dom"
import { MenuCategories } from '../components/MenuCategories'
import { OrderList } from "../components/OrderList"
import './orders.css'
export const Orders = () => {
    const [menuChoice, setMenuChoice] = useState(true);
    const setAm = () => {
        setMenuChoice(true)
    }
    const setPm = () => {
        setMenuChoice(false)
    }
// Este useState lo envío desde los props al listado del menú para tomar la orden con setOrder
// y luego mandar la data en order por props a donde imprimo la lista actual del pedido
    const [order, setOrder] = useState([]);

    return (
        <div id="ordersCont">
            <header>
                <nav>
                    <ul>
                        <li>Pedido Nuevo</li>
                        <li>Pedidos Listos</li>
                        <Link to="/" id="backBtnCont" ><img id="backBtn" src="/backBtn.png"/></Link>
                    </ul>
                </nav>
            </header>
            <div id="ordersBody">
                <section id="menuItems">
                    <div id="menuTime">
                        <button className="menuBtn" onClick={setAm}>AM<img src="https://api.iconify.design/charm/sun.svg?color=%23eeece7&width=50&height=50"/></button>
                        <button className="menuBtn" onClick={setPm}>PM<img src="https://api.iconify.design/tabler/sunset-2.svg?color=%23eeece7&width=50&height=50"/></button>
                    </div>
                    <div id="menuCategoryCont">
                        
                            <MenuCategories selection={menuChoice} order={order} setOrder={setOrder}/>
                        
                    </div>                       
                </section>
                <section id="orderList">
                    <OrderList order={order} setOrder={setOrder}/>
                </section>
            </div>
        </div>
        
    )
}