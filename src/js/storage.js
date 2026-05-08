import { state } from "./state";
import { createFavs } from "./ui";

/* --- Local Storage --- */

// Save favorites
function saveFav() {
  localStorage.setItem('fav', JSON.stringify(state.favorite));
}

// Get favorites
function getFav() {
  const localStorageFav = localStorage.getItem('fav');
  if (localStorageFav !== null) {
    state.favorite = JSON.parse(localStorageFav);
    createFavs();
  }
}

export {
    saveFav,
    getFav
}