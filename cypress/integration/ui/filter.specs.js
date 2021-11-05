describe("Filter functionalities test cases.", () => {
    before(() => {
        cy.addDummyTodos()

        cy.visit("/")

        // ;["todo1", "todo2", "todo3", "todo4", "todo5"].forEach(todo =>
        //     cy.addNewTodo(todo)
        // )

        // cy.get(".todo-item .todo-checkbox").first().check().should("be.checked")
        // cy.get(".todo-item .todo-checkbox").last().check().should("be.checked")
    })

    it("Should filter the completed todos correctly.", () => {
        cy.contains("Complete").click()

        cy.url().should("contain", "/complete")

        cy.get(".todo-checkbox").each($todo => {
            cy.wrap($todo).should("be.checked")
        })
    })

    it("Should filter the active todos correctly.", () => {
        cy.contains("Active").click()

        cy.url().should("contain", "/active")

        cy.get(".todo-checkbox").each($todo => {
            cy.wrap($todo).should("not.be.checked")
        })
    })

    after(() => {
        cy.get("body").then($el => {
            if ($el.find(".todo-item").length) {
                cy.get(".todo-item a").click({ multiple: true })
            }
        })
    })
})
