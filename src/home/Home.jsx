import React from 'react';
import {Button } from '../components/Button.jsx'
import './home.css';
export const Home = () => {
    return (
        <section id="homeCont">
            <img id="logo" src='logo.png'/>
            <h1>Purrfect Cat Café</h1>
            <div id="btnCont" title="btnCont">
                <Button title="Pedidos" url="/pedidos"/>
                <Button title="Cocina" url="/cocina"/>
            </div>
        </section>
    )
};