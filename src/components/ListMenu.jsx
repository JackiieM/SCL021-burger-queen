import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useState } from "react";

export const ListMenu = ({element, order, setOrder}) => {

    // Esta función muestra/oculta los dropdown de cada categoría
    const [visibility, setVisibility] = useState(false)
    const dropDownStay = (event) => {
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
            "Vegetariana": "Vegetariana"
        }
        const extraHuevo = {
            "extra huevo": "Si",
            "No": "No",
        }
        const extraQueso = {
            "extra queso": "Si",
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
            const { value: burger } = Extras.fire({
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
                const { value: egg } =  Extras.fire({
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
                    const { value: cheese } =  Extras.fire({
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
                            extraEgg: hamburguesa[1], 
                            extraCheese: hamburguesa[2]}
                        ])
                    })
                })
            })  
        }
        else if(exists === -1){
            setOrder([...order, {item:selectedItem, price: parseInt(selectedItemCost), quantity: 1}])
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
        <div className={`dropdownContent ${visibility ? "active" : ""}`}>
        {element.items.map( (menuItem, key=menuItem.item) =>
            (
                <div className="item" key={menuItem.item} id={menuItem.item} cost={menuItem.price} onClick={(event)=> addOrder(event)}>
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