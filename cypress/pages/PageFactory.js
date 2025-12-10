import SauceLoginPage from './saucedemo/SauceLoginPage';
import SauceInventoryPage from './saucedemo/SauceInventoryPage';
import DemoBlazeCatalogPage from './demoblaze/DemoBlazeCatalogPage';
import ExampleHotelPage from './exampleHotel/ExampleHotelPage';
import ReservePage from './exampleHotel/ReservePage';

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
  },
  reserve() {
    if (!cache.reserve) cache.reserve = new ReservePage();
    return cache.reserve;
  }
};