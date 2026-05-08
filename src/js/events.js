import { state, dom } from './state.js';
import { eraseSection, checkFavorite } from './helpers.js';
import { createFavs } from './ui.js';
import { saveFav } from './storage.js';
import { getData } from './api.js';

/* --- Event Listener Functions --- */

// Listen to submit event in the search form
function handleClickSubmit(event) {
  event.preventDefault();
  if (document.querySelector('.js-results')) {
    eraseSection('.js-results', dom.mainRes);
  }
  getData();
}

function listenerClickSubmit() {
  dom.form.addEventListener('submit', handleClickSubmit);
}

// Listen to reset event in the search form
function handleClickReset() {
  //event.preventDefault();
  dom.input.focus();
  state.result = [];
  eraseSection('.js-results', dom.mainRes);
  listenerClickSubmit();
}

dom.form.addEventListener('reset', handleClickReset);

// Listen to events in the results
function handleClickCard(event) {
  const selectedCard = event.currentTarget;
  const selectedId = selectedCard.dataset.id;

  selectedCard.classList.toggle('res__card--selected');

  checkFavorite(selectedId);
  createFavs();
  saveFav();
}

function listenerCards() {
  const cards = document.querySelectorAll('.js-article');
  for (const card of cards) {
    card.addEventListener('click', handleClickCard);
  }
}

// Listen to delete-all-favorites event
function handleDeleteAllFavs() {
  localStorage.removeItem('fav');
  state.favorite = [];
  createFavs();
}

dom.deleteAllFav.addEventListener('click', handleDeleteAllFavs);

// Listen to delete-one-favorite event
function handleDeleteFav(event) {
  const selectedId = event.currentTarget.dataset.id;
  checkFavorite(selectedId);
  saveFav();
  createFavs();
}

function listenDeleteBtns() {
  const deleteFav = document.querySelectorAll('.js-delete-fav');
  for (const deleteBtn of deleteFav) {
    deleteBtn.addEventListener('click', handleDeleteFav);
  }
}

export {
  handleClickSubmit,
  listenerClickSubmit,
  handleClickReset,
  listenerCards,
  handleDeleteAllFavs,
  handleDeleteFav,
  listenDeleteBtns
}
