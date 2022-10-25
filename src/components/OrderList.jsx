import { OrderItems } from "./OrderItems"
export const OrderList = ({order, setOrder}) => {
    const clearOrder = () => {
        setOrder([])
    }

    return (
        <>
            <div id="orders">
                <div id="topCont">
                    <input type="text" id="nameInput" placeholder="Clientx..."/>
                    <p>Mesa:</p>
                    <select id="tableSelect">
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
                    <p >Total: ${order.length < 1  ? 0 : order.map(item => parseInt(item.price)).reduce((a,b)=> a+b)}.00</p>
                </div>
                <div id="sendCont">
                    <button id="sendBtn">Enviar</button>
                </div>
            </div>
        </>
    )
}