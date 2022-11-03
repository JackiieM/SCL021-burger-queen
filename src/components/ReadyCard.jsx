
export const ReadyCard = ({toServe}) => {
    console.log("desde la tarjeta", toServe)
    return (
        <>
            {toServe.map(order => (
            <>  
                <p>{order.customer}</p>
            </>
            ))}
        </>
    )
}