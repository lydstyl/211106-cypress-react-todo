// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("addNewTodo", todoName => {
    cy.get(".todo-input").type(todoName + "{enter}")
    if (todoName) {
        cy.get(".success").should("be.visible")

        cy.get(".todo-item").last().should("contain.text", todoName)
    } else {
        cy.get(".error").should("be.visible")
    }
})

Cypress.Commands.add("addDummyTodos", () => {
    const todos = [
        { name: "Learn cypress", isComplete: false },
        { name: "Build framwork", isComplete: true },
        { name: "Shopping", isComplete: false },
        { name: "Drink coffe", isComplete: true },
    ]

    todos.forEach(todo => {
        cy.request("POST", "http://localhost:8080/todos", todo)
    })
})
