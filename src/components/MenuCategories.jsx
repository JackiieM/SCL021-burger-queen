import { useState, useEffect } from "react";
import MenuList from "../../data/menu.json";
import { MenuItemsComp } from "./MenuItems"; 


export const MenuCategories = ({key}) => {
    const [breakfast, lunch] = MenuList.menu;
    const amMenu = breakfast.breakfast

    console.log(MenuList.menu)
    console.log("Desestructurado:",breakfast, lunch)
    console.log(amMenu[0])
    return (
        <>
            <div className="category">
            {
                MenuList && amMenu.map( element => {
                    return (
                        <div key={element.category}>
                            <h2 className="categoryName">{element.category}</h2>
                            <img className="dropDown"src="https://api.iconify.design/mdi/chevron-down.svg?color=%233a1f08&width=40&height=40"/>
                        </div>
                    )
                })
            }
               
            </div>
            <div className="dropdownContent">
                <MenuItemsComp/>
            </div>
        </>
    )
}