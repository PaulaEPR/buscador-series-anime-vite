import { state, dom } from "./state";
import { createResults } from "./ui";
import { checkSelected } from "./helpers";

/* --- Get data form API --- */

export async function getData() {
  const query = encodeURIComponent(dom.input.value);
  const apiURL = `https://api.jikan.moe/v4/anime?q=${query}`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    state.result = data.data;
    createResults();
    checkSelected();
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
}
