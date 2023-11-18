class SeatSelectionPage {
  selectSeats() {
    // Select Seats
    cy.wait(15000);
    cy.get("button[data-disabled='false'][data-zone='PREMIUM_ECONOMY']").first().click();
    cy.contains('Elegir este asiento').click();
    cy.get("button[data-disabled='false'][data-zone='PREMIUM_ECONOMY']").eq(1).click();
    cy.contains('Elegir este asiento').click();
    cy.get('#btn-confirm-and-continue').click();
  }
}

export default SeatSelectionPage;
