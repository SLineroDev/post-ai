import { writable } from 'svelte/store';

export const activeTab = writable<string>('Ideas');
