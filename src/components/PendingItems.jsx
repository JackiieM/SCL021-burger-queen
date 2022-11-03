

export const PendingItems = ({order}) => {
    return (
        <>
            {order.items.map(e => (
                <>
                    {e.item === "Hamburguesa simple" || e.item === "Hamburguesa doble" ? 
                    (
                        <>
                            <div className="pendingItemsCont">
                                <p>{e.item}</p>
                                <p>x{e.quantity}</p>
                            </div>
                            <div className="burgerDetail">
                                <p>Proteina: {e.patty}</p>
                                <p>{e.extraC !== "No" ? "+ Extra queso" : ""}</p>
                                <p>{e.extraH !== "No" ? "+ Extra huevo" : ""}</p>
                            </div>
                            <hr/>
                        </>
                    ) : (
                            <>
                                <div className="pendingItemsCont">
                                    <p>{e.item}</p>
                                    <p>x{e.quantity}</p>
                                </div>
                                <hr/>
                            </>
                        )}
                    
                </>
            ))}
        </>
    )
}