import { getFav } from "./storage";
import { listenerClickSubmit } from "./events";

/* --- Start --- */

export function initApp() {
    getFav();
    listenerClickSubmit();
}
