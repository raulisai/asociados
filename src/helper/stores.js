// @ts-nocheck
import {writable} from "svelte/store";

export const user = writable({});
export const isLoggedIn = writable(true);
export let color = writable("white");