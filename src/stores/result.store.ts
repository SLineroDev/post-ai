import { writable } from 'svelte/store';

export const ideasList = writable<string[]>([]);
export const postResult = writable<string>('');
export const loading = writable<boolean>(false);
export const error = writable<boolean>(false);
