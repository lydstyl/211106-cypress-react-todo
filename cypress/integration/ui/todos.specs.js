///<reference types="Cypress" />

describe("Todo UI testing", () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it("Should add a new todo correctly.", () => {
        cy.addNewTodo("CY todo 1")
    })

    it("Should be able to toggle the status of a todo correctly.", () => {
        cy.addNewTodo("CY todo 2")

        cy.get(".todo-item .todo-checkbox").check().should("be.checked")
        cy.get(".todo-item .todo-checkbox").uncheck().should("not.be.checked")
    })

    it("Should delete a todo correctly.", () => {
        cy.addNewTodo("CY todo 3")

        cy.get(".todo-item .delete-item").click()
    })

    afterEach(() => {
        // cy.get(".todo-item a").each(deleteButton => {
        //     cy.wrap(deleteButton).click()
        // })

        cy.get("body").then($el => {
            if ($el.find(".todo-item").length) {
                cy.get(".todo-item a").click({ multiple: true })
            }
        })
    })
})
