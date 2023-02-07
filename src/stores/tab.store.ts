import { writable } from 'svelte/store';

export const activeTab = writable<string>('Ideas');
export const ideaToPost = writable<string>('');

