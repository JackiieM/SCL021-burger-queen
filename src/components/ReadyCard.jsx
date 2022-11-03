
export const ReadyCard = ({toServe}) => {
    console.log("desde la tarjeta", toServe)
    return (
        <>
            {toServe.map(order => (
            <div className="readyCard">  
                <div className="readyCardDetails">
                    <h2>{order.customer}</h2>
                    <h2>Mesa: {order.table}</h2>
                    <h2>Tiempo de preparación: {order.cooking}</h2>
                    </div>
                        <div className="readyCardItems">
                        {order.items.map(items => (
                            <>
                            <div className="readyItemsCont">
                                <p className="cardItem">{items.item}</p>
                                <p>${items.price}</p>
                                <p>x{items.quantity}</p>
                            </div>
                            <div className="extrasCard">
                            {items.extraC !== "No" ? <p>{items.extraC}</p> : <></>}
                            {items.extraE !== "No" ? <p>{items.extraE}</p> : <></>}
                            </div>
                            <hr></hr>
                            </>
                        ))}
                        </div>
                    <div className="readyCardServe">
                        <h2>Total: ${order.items.map(item => item.price).reduce((a,b)=> a+b)
                                    + order.items.filter(item => item.extraC === "Extra queso").length
                                    + order.items.filter(item => item.extraE === "Extra huevo").length}.00</h2>
                        <button>Entregar</button>
                    </div>
                </div>
            ))}
        </>
    )
}