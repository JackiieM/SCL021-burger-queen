import React from 'react';
import { v4 as uuid } from 'uuid';

import MenuData from "../../data/menu.json";
import { ListMenu } from "./ListMenu";
//import { MenuItemsComp } from "./MenuItems"; 

export const MenuCategories = ({selection, order, setOrder}) => {
    const [breakfast, lunch] = MenuData.menu;
    const amMenu = breakfast.breakfast
    const pmMenu = lunch.lunch
    

    //
    //console.log(MenuList.menu)
    //console.log("Desestructurado:",breakfast, lunch)
    //console.log(pmMenu)
    return (
        <>
        {selection ? (            
        <div className="category">
            {
                MenuData && amMenu.map( element => 
                    (
                        <ListMenu 
                        element={element} 
                        order={order} 
                        setOrder={setOrder} 
                        />
                    )
                )
            }

            </div>
            ) : (
                <div className="category">
                {   
                    MenuData && pmMenu.map( element => 
                        (
                            <ListMenu 
                            element={element} 
                            order={order} 
                            setOrder={setOrder} 
                            />
                        )
                    )
                }
    
                </div>
            )}
        </>
    )
}