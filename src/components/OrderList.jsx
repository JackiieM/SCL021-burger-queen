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
                    <OrderItems order={order}/>
                </div>
                <div id="bottomCont">
                    <button id="clearBtn" onClick={clearOrder}>Cancelar</button>
                    <p >Total: $0</p>
                </div>
                <div id="sendCont">
                    <button id="sendBtn">Enviar</button>
                </div>
            </div>
        </>
    )
}