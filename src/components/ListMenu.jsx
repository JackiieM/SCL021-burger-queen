import { useState } from "react";

export const ListMenu = ({element}) => {
    const [visibility, setVisibility] = useState(false)
    const dropDownStay = (event) => {
        setVisibility(!visibility)
    }

    return (
        <>
        <button key={element.category} className="menuCategory" onClick={event => dropDownStay(event)}>
            <h2 className="categoryName">{element.category}</h2>
            <img className="dropDown"src="https://api.iconify.design/mdi/chevron-down.svg?color=%233a1f08&width=40&height=40"/>
        </button>
        <div className={`dropdownContent ${visibility ? "active" : ""}`}>
        {element.items.map( menuItem =>
            (
                <div className="item" key={menuItem.item}>
                    {/*comentario*/}
                    {/*console.log(element.items)*/}
                    <img className="itemImg" src={menuItem.picture}/>
                    <p className="itemDescription">{menuItem.item}</p>
                    <p className="itemDescription">${menuItem.price}.00</p>
                </div> 
            )
        )
    }
            </div>
        </>
    )
}