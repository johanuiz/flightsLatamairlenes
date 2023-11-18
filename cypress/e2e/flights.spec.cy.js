import HomePage from '../support/pageObjects/homePage';
import SearchResultsPage from '../support/pageObjects/searchResultsPage';
import SeatSelectionPage from '../support/pageObjects/seatSelectionPage';
import BaggagePage from '../support/pageObjects/baggagePage';

describe('Flight Booking Flow', () => {
  const homePage = new HomePage();
  const searchResultsPage = new SearchResultsPage();
  const seatSelectionPage = new SeatSelectionPage();
  const baggagePage = new BaggagePage();

  before(() => {
    homePage.visit();
  });

  it('Search for a flight, select seats, add baggage', () => {
    homePage.searchFlight('Medellín', 'Bogotá');
    homePage.selectSoloIda();
    homePage.selectPremium();
    homePage.selectFechaDeIda();
    homePage.selectCantidadPasajeros()
    searchResultsPage.searchFlights();
    seatSelectionPage.selectSeats();
    baggagePage.reviewSpecialBaggageSection();
    baggagePage.addBaggage();   
  });
});