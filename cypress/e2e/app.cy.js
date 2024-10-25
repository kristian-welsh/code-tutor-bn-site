describe('Navigation', () => {
  it('should navigate to the preview page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="preview"]').click()

    // The new url should include "/about"
    cy.url().should('include', '/preview')

    // The new page should contain an h1 with "About"
    cy.get('p').contains('arrived')
  })
})
