import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./kitchen.css"

import { getOrders } from '../../firebase/firebase';
import { PendingItems } from '../components/PendingItems';

export const Kitchen = () => {
    const [pendingOrders, setPendingOrders] = useState([])

    useEffect(() => {
        const getData = async() => {
            await getOrders()
            .then(data => {
                setPendingOrders(data)
            })
        }
        getData()
    }, []);
    console.log(pendingOrders)
    return (
        <div id="kitchenCont">
            <header>
                <nav>
                    <ul>
                        <li>Pedidos Pendientes({pendingOrders.length})</li>
                        <Link to="/" id="backBtnCont" ><img id="backBtn" src="/backBtn.png"/></Link>
                    </ul>
                </nav>
            </header>
            <div id="ordersToPrepareCont">
                {pendingOrders.map(order => (
                    <div className='pendingOrder'>
                        <div className='pendingOrderHead'>
                            <h2>Clientx: {order.customer}</h2>
                            <h2>Mesa: {order.table}</h2>
                        </div>
                        <div className='pendingItems'>
                            <PendingItems order={order}/>
                        </div>
                        <div className="pendingOrderFooter">
                            <button>Listo</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>        
    )
}