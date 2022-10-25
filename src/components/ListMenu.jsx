import { useState } from "react";

export const ListMenu = ({element, order, setOrder}) => {

    // Esta función muestra/oculta los dropdown de cada categoría
    const [visibility, setVisibility] = useState(false)
    const dropDownStay = (event) => {
        setVisibility(!visibility)
    }

    // Esta función añade items al pedido
    const addOrder = (event) => {
        const selectedItem = event.target.getAttribute("id");
        const selectedItemCost = event.target.getAttribute("cost");
        console.log(selectedItem)
        
        //cómo puedo hacer que valide si el item ya existe y en case que sí, sumar a la cantidad
        
        if(order.length > 0){
            order.map(item => item.item === selectedItem ? item.quantity: item.quantity + 1)
        } 
        setOrder([...order, {item:selectedItem, price: selectedItemCost, quantity: 1}])
        
    }
console.log(order)
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