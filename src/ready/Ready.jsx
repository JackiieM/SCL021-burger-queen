import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./ready.css";

import { getReadyToServe } from '../../firebase/firebase';
import { ReadyCard } from '../components/ReadyCard.jsx';

export const Ready = () => {
    const [toServe, setToServe] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                await getReadyToServe()
                .then(data => {
                    if (data !== toServe){
                        setToServe(data)
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, []);

    return (
        <div id="ordersCont">
            <header>
                <nav>
                    <ul>
                        <Link to="/pedidos"><li>Pedido Nuevo</li></Link>
                        <li>Pedidos Listos({toServe.length})</li>
                        <Link to="/" id="backBtnCont" ><img id="backBtn" src="/backBtn.png"/></Link>
                    </ul>
                </nav>
            </header>
            <div id="readyCont">
                <ReadyCard toServe={toServe}/>
            </div>
        </div>
    )
}