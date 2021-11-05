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

    it("Should be able to toggle the status of a todo correctly.", () => {
        const todoName = "CY todo 2"

        cy.get(".todo-input").type(todoName + "{enter}")
        cy.get(".success").should("be.visible")

        cy.get(".todo-item .todo-checkbox").check().should("be.checked")
        cy.get(".todo-item .todo-checkbox").uncheck().should("not.be.checked")
    })

    afterEach(() => {
        // cy.get(".todo-item a").each(deleteButton => {
        //     cy.wrap(deleteButton).click()
        // })
        cy.get(".todo-item a").click({ multiple: true })
    })
})
