import { describe, it } from "vitest";
import { render, screen, cleanup} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from "react-router-dom";


import { Orders } from "./Orders";
import { OrderItems } from "../components/OrderItems";

describe("Orders", () => {
    it("Renderiza la pantalla de pedidos", () => {
        render(
            <MemoryRouter>
                <Orders/>
            </MemoryRouter>
            );
                let header = screen.getByRole("banner")
                let btnAM = screen.getByRole("button", {name: "AM"})
                let btnPM = screen.getByRole("button", {name: "PM"})
                let categories = screen.getAllByRole("heading", {level: 2})
                expect(header).toBeInTheDocument()
                expect(btnAM).toBeInTheDocument()
                expect(btnPM).toBeInTheDocument()
                expect(categories[0]).toBeInTheDocument()
                expect(categories[1]).toBeInTheDocument()
                expect(categories[2]).toBeInTheDocument()
                expect(categories[3]).toBeInTheDocument()
    })
});

describe("menuChoice", () => {
    afterEach(cleanup)
    it("Debería mostrar menú AM por default", () => {
         // ARRANGE
        render(
            <MemoryRouter>
                <Orders/>
            </MemoryRouter>
            );
                let categories = screen.getAllByRole("heading", {level: 2})
                // ACT
                // EXPECT
                expect(categories[0]).toHaveTextContent("Café")
                expect(categories[1]).toHaveTextContent("Refrescos")
                expect(categories[2]).toHaveTextContent("Sándwiches")
                expect(categories[3]).toHaveTextContent("Pastelería")
    });

    it("Debería mostrar menú PM al hacer click en el botón 'PM'", async () => {
        // ARRANGE
        render(
            <MemoryRouter>
                <Orders/>
            </MemoryRouter>
            );
                let btnPM = screen.getByRole("button", {name: "PM"})
                // ACT
                await userEvent.click(btnPM)
                let categories = screen.getAllByRole("heading", {level: 2})
                // EXPECT
                expect(categories[0]).toHaveTextContent("Café")
                expect(categories[1]).toHaveTextContent("Refrescos")
                expect(categories[2]).toHaveTextContent("Hamburguesas")
                expect(categories[3]).toHaveTextContent("Acompañamientos")
    })
});

describe("ListMenu", () => {
    afterEach(cleanup)
    it("La lista debería mostrarse con un click", async () => {
        // ARRANGE
        render(
            <MemoryRouter>
                <Orders/>
            </MemoryRouter>
            )

                let categoryBtn = screen.getAllByRole("button")
                // ACT
                await userEvent.click(categoryBtn[0])
                let dropdown = screen.getAllByTestId("dropDownList")
                // EXPECT
                expect(dropdown[0]).toBeVisible()

                await userEvent.click(categoryBtn[1])
                dropdown = screen.getAllByTestId("dropDownList")
                expect(dropdown[1]).toBeVisible()

                await userEvent.click(categoryBtn[2])
                dropdown = screen.getAllByTestId("dropDownList")
                expect(dropdown[2]).toBeVisible()

                await userEvent.click(categoryBtn[3])
                dropdown = screen.getAllByTestId("dropDownList")
                expect(dropdown[3]).toBeVisible()
    });
    it("El item debería mostrarse en la lista de pedidos al darle click", async () => {
        // ARRANGE
        render(
            <MemoryRouter>
                <Orders/>
            </MemoryRouter>
            )
                let categoryBtn = screen.getAllByRole("button")
                await userEvent.click(categoryBtn[0])
                let item = screen.getAllByTestId("itemToAdd")
                expect(item[0]).toHaveTextContent("Americano")

                await userEvent.click(item[0])
                let itemsCont = screen.getByTestId("orderedItems")
                let quantity = screen.getByTestId("orderedItemsQuantity")
                let price = screen.getByTestId("orderedItemsCost")
                expect(itemsCont).toHaveTextContent("Americano")
                expect(quantity).toHaveTextContent("x1")
                expect(price).toHaveTextContent("$5.00")
    })
})

/*describe("Order items", () => {
    afterEach(cleanup)
    it("Elimina el item al hacer click en el boton eliminar", async() => {
        // ARRANGE
        render(
            <MemoryRouter>
                <Orders/>
            </MemoryRouter>
            )   
                let categoryBtn = screen.getAllByRole("button")
                await userEvent.click(categoryBtn[0])
                const item = screen.getAllByTestId("itemToAdd")
                let itemsCont = screen.getByTestId("orderedItems")
                expect(item[0]).toHaveTextContent("Americano")

                await userEvent.click(item[0])
                let quantity = screen.getByTestId("orderedItemsQuantity")
                let price = screen.getByTestId("orderedItemsCost")
                let deleteBtn = screen.getAllByTestId("delete")
                expect(itemsCont).toHaveTextContent("Americano")
                expect(quantity).toHaveTextContent("x1")
                expect(price).toHaveTextContent("$5.00")

                await userEvent.click(deleteBtn[0])
                expect(itemsCont).not.toHaveTextContent("Americano")
                expect(quantity).not.toHaveTextContent("x1")
                expect(price).not.toHaveTextContent("$5.00")
    })
})*/