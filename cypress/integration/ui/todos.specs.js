///<reference types="Cypress" />

describe("Todo UI testing", () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it("Should add a new todo correctly.", () => {
        const todoName = "CY new todo"

        cy.get(".todo-input").type(todoName + "{enter}")

        cy.get(".success").should("be.visible")

        cy.get(".todo-item").last().should("contain.text", todoName)
    })
})
