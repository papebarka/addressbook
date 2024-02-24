describe('AddressBook', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173')
  })

  it('displays home page correctly', () => {
    cy.contains("Address Book")
    cy.contains("Hello")
  })

  it('contains address form', () => {
    cy.get('form').should('exist')
    cy.get('input[name="name"]').should('exist')
    cy.get('input[name="phone"]').should('exist')
    cy.get('[name="address"]').should('exist')
  })

  it('adds a new address', () => {
    cy.get('input[name="name"]').type('Michael Jackson')
    cy.get('input[name="phone"]').type('+1 287 9969 9969 1235')
    cy.get('[name="address"]').type('USA, Los Angeles, CA')
    cy.get('button').contains('Add').click()
    cy.contains('Michael Jackson')
    cy.contains('+1 287 9969 9969 1235')
    cy.contains('USA, Los Angeles, CA')
  })
})