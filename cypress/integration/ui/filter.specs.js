describe("Filter functionalities test cases.", () => {
    beforeEach(() => {
        //cy.addDummyTodos()
        cy.intercept(
            {
                method: "GET",
                url: "http://localhost:8080/todos",
            },
            {
                fixture: "todos",
            }
        )

        cy.visit("/")
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
})
