import { useState, useEffect } from "react";
import Swal from "sweetalert2"; 
import withReactContent from 'sweetalert2-react-content'

import { orderReady, getSelectedOrder, deleteSelectedOrder } from "../../firebase/firebase";
import { PendingItems } from "./PendingItems"
export const PendingOrder = ({pendingOrders}) => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    const removeOrder = (id) => {
        const deletedOrder = pendingOrders.filter(order => order.orderId !== id)
        setOrder(deletedOrder)
    }

    const MySwal = withReactContent(Swal);
    const markReady = (event) => {
        const selectedOrder = event.target.getAttribute("id");
        let timeMinutes = minutes < 10 ? `0${minutes}` : minutes;
        let timeSeconds = seconds < 10 ? `0${seconds}` : seconds;
        const totalTime = `${timeMinutes}:${timeSeconds}`
        MySwal.fire({
            title: <h1 className='popUpTitle'>¿Listo para entregar?</h1>,
            html: <p className='popUpText'>Tiempo de preparación: {totalTime}</p>,
            icon: "success",
            iconColor: "#7CAF64",
            confirmButtonText: "Entregar",
            confirmButtonColor: "#7CAF64",
            showCancelButton: true,
            cancelButtonText: "Volver",
            cancelButtonColor: "#CA3228",
            background: "#dfd2cc",
        })
            .then((result)=> {
                if(result.isConfirmed){
                try {
                    getSelectedOrder(selectedOrder)
                    .then(data => {
                        try {
                            orderReady(data, totalTime, "ready")
                        } catch (error) {
                        
                        }
                    })
                    .then(()=> {
                        deleteSelectedOrder(selectedOrder)
                        removeOrder(selectedOrder)
                    })
                } catch (error) {
                
                }
            }
        })
    }
   
   
    useEffect(() => {
        let timer = setInterval(() => {
            setSeconds(seconds +1)

            if(seconds === 59){
                setMinutes(minutes+1)
                setSeconds(0)
            }
        }, 1000)
        return () => clearInterval(timer)
    }, [seconds])
    return (
        <>
            {pendingOrders.map(order => (
                    <div className='pendingOrder'>
                        <div className='pendingOrderHead'>
                            <h2>{order.customer}</h2>
                            <h2 className="info">Mesa: {order.table}</h2>
                            <h2 className="info">Tiempo: {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
                        </div>
                        <div className='pendingItems'>
                            <PendingItems order={order}/>
                        </div>
                        <div  className="pendingOrderFooter">
                            <button id={order.orderId} onClick={(event)=>markReady(event)}>Listo</button>
                        </div>
                    </div>
                ))}
        </>
    )
}