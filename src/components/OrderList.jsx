import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

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
                confirmButtonText: "Volver",
                color: "#3a1f08",
                background: "#dfd2cc",
                confirmButtonColor: "#af7d64",

            })
        }else {
            newOrder(table, customer, order, "pending")
            .then(() => {
                MySwal.fire({
                    title: <h1 className='popUpTitle'>Purrfect!</h1>,
                    html: <p className='popUpText'>El pedido fue enviado a la cocina</p>,
                    icon: "success",
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
                <div id="itemsCont">
                    <OrderItems order={order} setOrder={setOrder}/>
                </div>
                <div id="bottomCont">
                    <button id="clearBtn" onClick={clearOrder}>Cancelar</button>
                    {/*Para calcular el total primero confirmamos que order contenga por lo menos
                    un elemento, luego hacemos un map para obtener los precios de los items en order
                    y los pasamos por parseInt para transformarlos en valores numericos. Finalmente,
                    se suma todo con un array.reduce*/}
                    <p >Total: ${order.length < 1  ? 0 : order.map(item => item.price).reduce((a,b)=> a+b)}.00</p>
                </div>
                <div id="sendCont">
                    <button id="sendBtn" onClick={() => createNewOrder()}>Enviar</button>
                </div>
            </div>
        </>
    )
}