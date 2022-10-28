import { v4 as uuid } from 'uuid';

export const OrderItems = ({order, setOrder}) => {
    // Crear función onClick para el botón de eliminar item
    const deleteItem = (event) => {
        const itemToDelete = event.target.getAttribute("id")
        const deletedItem = order.filter(item => item.id !== itemToDelete)
        setOrder(deletedItem)
    }
    
    return (
        <>
            { 
                order.map(item => (
                    <>
                    <div className="descriptionCont" key={item.item}>
                        <img className="deleteBtn" id={item.id} onClick={(event) => deleteItem(event)} src="./delete.png"/>
                        <p className="orderListDescription orderName" >{item.item}</p>
                        <p className="orderListDescription">x{item.quantity}</p>
                        <p className="orderListDescription">${item.price}.00</p>
                    </div> {item.item === "Hamburguesa simple" || item.item === "Hamburguesa doble" ? (
                        <>
                            <div className="extraCont">
                                <p className="extra">Proteina: {item.patty}</p>
                                <p className="extra">{item.extraC !== "No" ? `+ ${item.extraC} $1.00` : ""}</p>
                                <p className="extra">{item.extraE !== "No" ? `+ ${item.extraE} $1.00` : ""}</p>
                            </div>
                            <hr></hr>
                        </>
                    ): <hr></hr>}
                    
                    </>
                ))
            }
        </>
    )
}