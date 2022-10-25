export const OrderItems = ({order}) => {
    // Crear función onClick para el botón de eliminar item
    // Necesito usar setOrder para eso????
    
    return (
        <>
            {
                order.map(item => (
                    <>
                    <div className="descriptionCont">
                        <img className="deleteBtn" src="./src/assets/delete.png"/>
                        <p className="orderListDescription orderName" >{item.item}</p>
                        <p className="orderListDescription">x{item.quantity}</p>
                        <p className="orderListDescription">${item.price}.00</p>
                    </div>
                    <hr></hr>
                    </>
                ))
            }
        </>
    )
}