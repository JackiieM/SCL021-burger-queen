import React from 'react';
import { useState } from "react";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { v4 as uuid } from 'uuid';

export const ListMenu = ({element, order, setOrder}) => {

    // Esta función muestra/oculta los dropdown de cada categoría
    const [visibility, setVisibility] = useState(false)
    const dropDownStay = () => {
        setVisibility(!visibility)
    }

    // Esta función añade items al pedido
    const addOrder = (event) => {
        const MySwal = withReactContent(Swal)
        const selectedItem = event.target.getAttribute("id");
        const selectedItemCost = event.target.getAttribute("cost");
        const exists = order.findIndex(item => item.item === selectedItem);
        const hamburguesa = [];

        const patty = {
            "Vacuno": "Vacuno",
            "Pollo": "Pollo",
            "Veggie": "Veggie"
        }
        const extraHuevo = {
            "Extra huevo": "Si",
            "No": "No",
        }
        const extraQueso = {
            "Extra queso": "Si",
            "No": "No",
        }
        const options = ["1","2","3"];
        const Extras = MySwal.mixin({
            progressSteps: options,
            confirmButtonText: "Continuar",
            color: "#3a1f08",
            background: "#dfd2cc",
            confirmButtonColor: "#af7d64",
            customClass: {
                input: "swalInput",
                progressStep: "swalProgress"
            },
            showClass: { backdrop: 'swal2-noanimation' },
            hideClass: { backdrop: 'swal2-noanimation' },
        })
        if(selectedItem === "Hamburguesa simple" || selectedItem === "Hamburguesa doble"){
            
            Extras.fire({
                title: <h1 className='popUpTitle'>Tipo de hamburguesa</h1>,
                currentProgressStep: 0,
                input: "radio",
                inputOptions: patty,
                inputValidator: (value) => {
                    if (!value) {
                      return 'Por favor selecciona una opción'
                    }
                } 
            })
            .then(burger => {
                hamburguesa.push(burger.value)
                Extras.fire({
                    title: <h1 className='popUpTitle'>¿Desea añadir huevo?</h1>,
                    currentProgressStep: 1,
                    input: "radio",
                    inputOptions: extraHuevo,
                    inputValidator: (value) => {
                        if (!value) {
                          return 'Por favor selecciona una opción'
                        }
                    }
                })
                .then(egg => {
                    hamburguesa.push(egg.value)
                    Extras.fire({
                        title: <h1 className='popUpTitle'>¿Desea añadir queso?</h1>,
                        currentProgressStep: 2,
                        input: "radio",
                        inputOptions: extraQueso,
                        inputValidator: (value) => {
                            if (!value) {
                              return 'Por favor selecciona una opción'
                            }
                        }
                    })
                    .then(cheese => {
                        hamburguesa.push(cheese.value)
                    })
                    .then(()=>{
                        setOrder([...order, 
                            {item: selectedItem, 
                            price: parseInt(selectedItemCost), 
                            quantity: 1, 
                            patty: hamburguesa[0], 
                            extraE: hamburguesa[1], 
                            extraC: hamburguesa[2],
                            id: uuid()}
                        ])
                    })
                })
            })  
        }
        else if(exists === -1){
            setOrder([...order, {item:selectedItem, price: parseInt(selectedItemCost), quantity: 1, id: uuid()}])
        } else {
            let orderTmp = [...order];
            orderTmp[exists].quantity = orderTmp[exists].quantity +1
            orderTmp[exists].price = selectedItemCost * orderTmp[exists].quantity
            setOrder(orderTmp)
        }
    }

    return (
        <>
        <button key={element.category} className="menuCategory" onClick={event => dropDownStay(event)}>
            <h2 className="categoryName">{element.category}</h2>
            <img className="dropDown"src="https://api.iconify.design/mdi/chevron-down.svg?color=%233a1f08&width=40&height=40"/>
        </button>
        <div data-testid="dropDownList" className={`dropdownContent ${visibility === true ? "active" : ""}`}>
        {element.items.map( (menuItem) =>
            (
                <div data-testid="itemToAdd" className="item" key={menuItem.item} id={menuItem.item} cost={menuItem.price} onClick={(event)=> addOrder(event)}>
                    {/*comentario*/}
                    {/*console.log(element.items)*/}
                    <img className="itemImg" src={menuItem.picture} id={menuItem.item} cost={menuItem.price}/>
                    <p className="itemDescription" cost={menuItem.price} id={menuItem.item}>{menuItem.item}</p>
                    <p className="itemDescription" cost={menuItem.price} id={menuItem.item}>${menuItem.price}.00</p>
                </div> 
            )
        )
    }   
            </div>
        </>
    )
}