import { state, dom } from "./state";
import { createResults } from "./ui";
import { checkSelected } from "./helpers";

/* --- Get data form API --- */

export function getData() {
  const query = dom.input.value.replace(' ', '%20');
  const apiURL = `https://api.jikan.moe/v4/anime?q=${query}`;
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      state.result = data.data;
      createResults();
      checkSelected();
    });
}
