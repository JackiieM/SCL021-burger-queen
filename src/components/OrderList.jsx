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
    const createNewOrder = () => {
        newOrder(table, customer, order, "pending")
        .then(success => {
            console.log("Pedido enviado :)")
        })
        .catch(err =>{
            console.log(err)
        })
    }
console.log(customer)
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