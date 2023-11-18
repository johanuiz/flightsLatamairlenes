import config from '../../../cypress.config';

class HomePage {
  visit() {
    // Visit the specified URL with custom headers
    cy.visit('https://www.latamairlines.com/co/es', {
      headers: { "Accept-Encoding": "gzip, deflate" }
    });
  }

  searchFlight(origin, destination) {
    // Close the Popup by clicking on the LATAM Colombia button
    cy.contains('Continuar en LATAM Colombia').click();

    // Close the Popup by clicking on the close button for login
    cy.get('span.sc-fzoKki.kNKLJw i svg')
      .first() // or .eq(0) for the first element
      .click();

    // Enter the origin
    cy.wait(2000);
    cy.get('#lblInputOrigin').type(origin);
    cy.contains('MDE - Colombia').click();
    cy.get('#btnContinueCTA').click();

    // Enter the destination
    cy.wait(2000);
    cy.get('#lblInputDestination').type(destination);
    cy.contains('BOG - Colombia').click();
    cy.get('#btnContinueCTA').click();
  }

  selectSoloIda() {
    // Select Solo Ida date option
    cy.contains('Ida y Vuelta').click();
    cy.get('#tripTypeLabel-0').click();
    cy.get('#btnTripTypeConfirmCTA').click();
  }

  selectPremium() {
    // Select Premium cabin option
    cy.get('#btnCabinTypeCTA').click();
    cy.get('#cabinTypeLabel-1').click();
    cy.get('#btnCabinTypeConfirmCTA').click();
  }

  selectFechaDeIda() {
    // Select departure date
    cy.get('.sc-qWeMO.bMEhQb').eq(2).click({ force: true });
    cy.get('.CalendarDay__default[aria-disabled="false"]').eq(5).click(); // Select the first valid travel day
    cy.get('#btnContinueCalendarCTA').click();
  }

  selectCantidadPasajeros() {
    // Select number of passengers
    cy.get('#iconAddPassengerCTA').click({ force: true });
    cy.get('#addChildren').click({ force: true });
    cy.get('#sendCallback').click({ force: true });
  }
}

export default HomePage;
