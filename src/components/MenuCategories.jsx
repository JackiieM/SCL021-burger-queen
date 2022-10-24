import { useState, useEffect } from "react";
import MenuData from "../../data/menu.json";
import { ListMenu } from "./ListMenu";
//import { MenuItemsComp } from "./MenuItems"; 

export const MenuCategories = ({selection}) => {
    const [breakfast, lunch] = MenuData.menu;
    const amMenu = breakfast.breakfast
    const pmMenu = lunch.lunch
    
    const [toggleCategories, setToggleCategories] = useState();
    useEffect(() => {
        setToggleCategories(selection)

    }, [selection])


    //
    //console.log(MenuList.menu)
    //console.log("Desestructurado:",breakfast, lunch)
    //console.log(pmMenu)
    return (
        <>
        {toggleCategories ? (            
        <div className="category">
            {
                MenuData && amMenu.map( element => 
                    (
                        < ListMenu element={element}/>
                    )
                )
            }

            </div>
            ) : (
                <div className="category">
                {
                    MenuData && pmMenu.map( element => 
                        (
                            < ListMenu element={element}/>
                        )
                    )
                }
    
                </div>
            )}

        </>
    )
}