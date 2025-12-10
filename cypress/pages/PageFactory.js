import SauceLoginPage from './SauceLoginPage';
import SauceInventoryPage from './SauceInventoryPage';
import DemoBlazeCatalogPage from './DemoBlazeCatalogPage';
import ExampleHotelPage from './ExampleHotelPage';

const cache = {};

export const PageFactory = {
  sauceLogin() {
    if (!cache.sauceLogin) cache.sauceLogin = new SauceLoginPage();
    return cache.sauceLogin;
  },
  sauceInventory() {
    if (!cache.sauceInventory) cache.sauceInventory = new SauceInventoryPage();
    return cache.sauceInventory;
  },
  demoblaze() {
    if (!cache.demoblaze) cache.demoblaze = new DemoBlazeCatalogPage();
    return cache.demoblaze;
  },
  exampleHotel() {
    if (!cache.exampleHotel) cache.exampleHotel = new ExampleHotelPage();
    return cache.exampleHotel;
  }
};