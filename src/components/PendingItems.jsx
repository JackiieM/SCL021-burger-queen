

export const PendingItems = ({order}) => {
    return (
        <div>
            {order.items.map(e => (
                <>
                    <p>{e.item}</p>
                    <p>x{e.quantity}</p>
                </>
            ))}
        </div>
    )
}