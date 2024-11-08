describe('Render todolist', () => {
  it('Render the todolist text', () => {
    cy.visit('http://localhost:5173');
    cy.wait(800);
    cy.contains('Todos').should('be.visible');
    cy.contains('Generate').should('be.visible');
    cy.wait(800);
    cy.get('#generate').click();

    cy.get('.todo').should('be.visible');
  });
});

describe('Create custom todo', () => {
  it('Render the todolist text', () => {
    cy.visit('http://localhost:5173/create');
    cy.get('#create').should('be.visible');
    cy.wait(800);
    cy.get('input[name="title"]').type('Custom todo');
    cy.get('input[name="description"]').type('Cool description');
    cy.wait(800);
    cy.get('#create').click();

    cy.get('#back').click();

    // Takes us back to the home page
    cy.url().should('eq', 'http://localhost:5173/');

    // Expect custom todo
    cy.contains('Custom todo').should('be.visible');
    cy.contains('Cool description').should('be.visible');

    // On completion check metric updates
    cy.get('input[type="checkbox"]').click();
    cy.get('input[type="checkbox"]').should('be.disabled');

    cy.get('#count').invoke('text').should('eq', '1');
  });
});
