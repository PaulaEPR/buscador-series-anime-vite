import { state } from './state.js';

/* --- Helper Functions --- */

// Check favorites
function checkFavorite(selectedId) {
  // Check if it's already in the favorites array
  const selectedFav = state.favorite.find(
    (item) => item.mal_id === parseInt(selectedId)
  );
  // Search it in the results and add or remove from favorites array
  if (selectedFav === undefined) {
    const selectedRes = state.result.find(
      (item) => item.mal_id === parseInt(selectedId)
    );
    state.favorite.push(selectedRes);
  } else {
    const foundIndex = state.favorite.findIndex(
      (item) => item.mal_id === parseInt(selectedId)
    );
    state.favorite.splice(foundIndex, 1);
  }
}

// Erase a section from the HTML
function eraseSection(childClass, motherName) {
  motherName.removeChild(document.querySelector(childClass));
}

// Check for favorites selected in the results
function checkSelected() {
  for (const item of state.result) {
    for (const fav of state.favorite) {
      if (item.mal_id === fav.mal_id) {
        toggleSelectedClass(item.mal_id);
      }
    }
  }
}

function toggleSelectedClass(selectedId) {
  const cards = document.querySelectorAll('.js-article');
  for (const card of cards) {
    if (selectedId === parseInt(card.dataset.id)) {
      card.classList.toggle('res__card--selected');
    }
  }
}

export {
    checkFavorite,
    eraseSection,
    checkSelected,
    toggleSelectedClass
}