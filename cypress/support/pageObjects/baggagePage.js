class BaggagePage {
  reviewSpecialBaggageSection() {
    // View characteristics
    cy.wait(20000);
    cy.get(".Collapsible__CollapsibleTrigger-sc-10ml27w-1").click();
    cy.get('a[aria-label="Ver características de Equipaje especial en otra pestaña del navegador"]').click();
  }

  addBaggage() {
    // Add Adult Baggage
    cy.get('#btn-up-segment-MDE-BOG-bag-15-passenger-ADT_1').first().click();
    cy.get('#btn-up-segment-MDE-BOG-bag-23-passenger-ADT_1').first().click();
    cy.get('button[aria-label="Siguiente pasajero"]').click();

    // Add Child Baggage
    cy.get('#btn-up-segment-MDE-BOG-bag-15-passenger-CHD_1').first().click();
    cy.get('#BAGS-continue-button').first().click();
    cy.get('#button-cart-confirm').first().click();
  }
}

export default BaggagePage;
