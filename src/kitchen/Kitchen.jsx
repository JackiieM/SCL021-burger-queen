import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./kitchen.css"

import { getOrders } from '../../firebase/firebase';
import { PendingOrder } from '../components/PendingOrder';

export const Kitchen = () => {
    const [pendingOrders, setPendingOrders] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                await getOrders()
                .then(data => {
                    if (data !== pendingOrders){
                        setPendingOrders(data)
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, []);


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
                <PendingOrder pendingOrders={pendingOrders} setPendingOrders={setPendingOrders}/>
            </div>
        </div>        
    )
}