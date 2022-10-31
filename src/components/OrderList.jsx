import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { v4 as uuid } from 'uuid';

import { newOrder } from "../../firebase/firebase";
import { OrderItems } from "./OrderItems";
import { useState } from "react";

export const OrderList = ({order, setOrder}) => {

    const [customer, setCustomer] = useState("");
    const [table, setTable] = useState(1);


    const onOptionChange = (event) => {
        setTable(event.target.value)
        
    }
    const onInputChange = (event) => {
        setCustomer(event.target.value)
    }
    const clearOrder = () => {
        setOrder([])
        setCustomer("")
    }

    const MySwal = withReactContent(Swal)
    const createNewOrder = () => {
        if(customer === ""){
                MySwal.fire({
                title: <h1 className='popUpTitle'>Whoops!</h1>,
                html: <p className='popUpText'>Tienes que ingresar el nombre del cliente</p>, 
                icon: "error",
                iconColor: "#CA3228",
                confirmButtonText: "Volver",
                color: "#3a1f08",
                background: "#dfd2cc",
                confirmButtonColor: "#af7d64",

            })
        } else if(order.length === 0){
            MySwal.fire({
                title: <h1 className='popUpTitle'>Whoops!</h1>,
                html: <p className='popUpText'>No hay items en este pedido</p>, 
                icon: "error",
                iconColor: "#CA3228",
                confirmButtonText: "Volver",
                color: "#3a1f08",
                background: "#dfd2cc",
                confirmButtonColor: "#af7d64",
            })
        }else {
            newOrder(table, customer, order, "pending", uuid())
            .then(() => {
                MySwal.fire({
                    title: <h1 className='popUpTitle'>Purrfect!</h1>,
                    html: <p className='popUpText'>El pedido fue enviado a la cocina</p>,
                    icon: "success",
                    iconColor: "#7CAF64",
                    confirmButtonText: "Volver",
                    color: "#3a1f08",
                    background: "#dfd2cc",
                    confirmButtonColor: "#af7d64",
                })
            })
            .catch(err =>{
                console.log(err)
            })
        }
    }

    return (
        <>
            <div id="orders">
                <div id="topCont">
                    <input type="text" id="nameInput" value={customer} placeholder="Clientx..." onChange={event => onInputChange(event)}/>
                    <p>Mesa:</p>
                    <select id="tableSelect" onChange={event => onOptionChange(event)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div data-testid="orderedItems" id="itemsCont">
                    <OrderItems order={order} setOrder={setOrder}/>
                </div>
                <div id="bottomCont">
                    <button id="clearBtn" onClick={clearOrder}>Limpiar</button>
                    {/*Para calcular el total primero confirmamos que order contenga por lo menos
                    un elemento, luego hacemos un map para obtener los precios de los items en order,
                    se suma todo con un array.reduce y luego se busca si hay extras, se suma la cantidad de extras
                    que encuentre al total*/}
                    <p >Total: ${order.length < 1  ? 0 
                    : order.map(item => item.price).reduce((a,b)=> a+b) 
                    + order.filter(item => item.extraC === "Extra queso").length 
                    + order.filter(item => item.extraE === "Extra huevo").length}.00</p>
                </div>
                <div id="sendCont">
                    <button id="sendBtn" onClick={() => createNewOrder()}>Enviar</button>
                </div>
            </div>
        </>
    )
}