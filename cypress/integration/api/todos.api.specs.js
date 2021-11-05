describe("Test all the todos using the API.", () => {
    const name = "todo1"
    let id

    it("Should add a todo correctly using the api.", () => {
        cy.request("POST", "http://localhost:8080/todos", {
            name,
            isComplete: false,
        }).then(response => {
            id = response.body.id
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq(name)
        })
    })

    it("Should get a specific todo correctly.", () => {
        cy.request("GET", "http://localhost:8080/todos/" + id).then(
            response => {
                expect(response.status).to.eq(200)
                expect(response.body.name).to.eq(name)
            }
        )
    })

    it("Should update the status of a todo correctly.", () => {
        cy.request("PUT", "http://localhost:8080/todos/" + id, {
            isComplete: true,
        }).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body.isComplete).to.be.true
        })
    })

    it("Should delete a todo correctly.", () => {
        cy.request("DELETE", "http://localhost:8080/todos/" + id).then(
            response => {
                expect(response.status).to.eq(200)
            }
        )
    })
})
