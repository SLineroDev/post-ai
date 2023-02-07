import { writable } from 'svelte/store';

export const ideasList = writable<string[]>([]);
export const loadingIdeas = writable<boolean>(false);
export const errorIdeas = writable<boolean>(false);
export const postResult = writable<string>('');
export const loadingPost = writable<boolean>(false);
export const errorPost = writable<boolean>(false);
