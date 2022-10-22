import { useState, useEffect } from "react";
import MenuList from "../../data/menu.json";
//import { MenuItemsComp } from "./MenuItems"; 


export const MenuCategories = ({selection}) => {
    const [breakfast, lunch] = MenuList.menu;
    const amMenu = breakfast.breakfast
    const pmMenu = lunch.lunch

    const [toggleCategories, setToggleCategories] = useState();
    useEffect(() => {
        setToggleCategories(selection)
    }, [selection])
    //
    const clasePruebita = "clase";
    //console.log(MenuList.menu)
    //console.log("Desestructurado:",breakfast, lunch)
    //console.log(pmMenu)
    return (
        <>
        {toggleCategories ? (            
        <div className="category">
            {
                MenuList && amMenu.map( element => 
                    (
                        <>
                        <div key={element.category} className="menuCategory">
                            <h2 className="categoryName">{element.category}</h2>
                            <img className="dropDown"src="https://api.iconify.design/mdi/chevron-down.svg?color=%233a1f08&width=40&height=40"/>
                        </div>
                        <div className={`dropdownContent ${clasePruebita}`}>
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
                )
            }

               
            </div>
            ) : (
                <div className="category">
                {
                    MenuList && pmMenu.map( element => 
                        (
                            <>
                            <div key={element.category} className="menuCategory">
                                <h2 className="categoryName">{element.category}</h2>
                                <img className="dropDown"src="https://api.iconify.design/mdi/chevron-down.svg?color=%233a1f08&width=40&height=40"/>
                            </div>
                            <div className={`dropdownContent ${clasePruebita}`}>
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
                    )
                }
    
                   
                </div>
            )}

        </>
    )
}