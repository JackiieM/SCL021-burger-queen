
export const OrderItems = ({order, setOrder}) => {
    // Crear función onClick para el botón de eliminar item
    const deleteItem = (event) => {
        const itemToDelete = event.target.getAttribute("id")
        const deletedItem = order.filter(item => item.item !== itemToDelete)
        setOrder(deletedItem)
    }
    
    return (
        <>
            {
                order.map(item => (
                    <>
                    <div className="descriptionCont" key={item.item}>
                        <img className="deleteBtn" id={item.item} onClick={(event) => deleteItem(event)} src="./src/assets/delete.png"/>
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