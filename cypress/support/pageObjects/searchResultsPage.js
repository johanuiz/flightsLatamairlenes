class SearchResultsPage {
  searchFlights() {
    // Click on the search button
    cy.contains('Buscar vuelos').click();

    Cypress.on('uncaught:exception', (err, runnable) => {
      // Log or handle cross-origin error
      console.error('Cross-Origin Error:', err.message);
      return false;
    });

    // Select Flight
    cy.wait(10000);
    cy.get("#WrapperCardFlight0  .card-flightstyle__CardExpander-sc__sc-16r5pdw-2", { timeout: 25000 }).first().click();
    cy.get('#bundle-detail-0-flight-select').click();

    // Select Flight
    cy.get('#button9').click();
  }
}
export default SearchResultsPage;
