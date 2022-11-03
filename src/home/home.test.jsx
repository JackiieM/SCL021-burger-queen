import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

import {Home} from "./Home.jsx"
import { MemoryRouter } from "react-router-dom";

describe("Home", () => {
    it("Renderiza la pantalla de inicio de la APP", () => {
        // ARRANGE (Crear el setup del test)
        render(<MemoryRouter>
            <Home />
        </MemoryRouter>
        );
        const title = screen.getByRole("heading", {level: 1});
        const btnCont = screen.getByTitle("btnCont")
        const toOrders = screen.getByRole("button", {name: "Pedidos"});
        const toKitchen = screen.getByRole("button", {name: "Cocina"});
        // ACT (Imitamos lo que haría el usuario)
        // EXPECT (Revisar si se obtiene el resultado esperado de cada interacción)
        expect(title).toHaveTextContent("Purrfect Cat Café")
        expect(btnCont).toContainElement(toOrders)
        expect(btnCont).toContainElement(toKitchen)
    })

    /*it("Cambia la pantalla a 'Pedidos'", () => {
        // ARRANGE (Crear el setup del test)
        const history = createMemoryHistory()
        history.push = jest.fn();
        render(<MemoryRouter history={history}>
            <Home />
        </MemoryRouter>);
        const toOrders = screen.getByRole("button", {name: "Pedidos"});
        // ACT (Imitamos lo que haría el usuario)
        fireEvent.click(toOrders)
        // EXPECT (Revisar si se obtiene el resultado esperado de cada interacción)
        expect(history.location.pathname).toBe('/pedidos');
    })*/
})