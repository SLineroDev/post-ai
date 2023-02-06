import type { ComponentType } from 'svelte/internal';

export type TabLabel = 'Ideas' | 'Posts';

export interface TabItem {
	label: TabLabel;
	component: ComponentType;
	iconComponent: ComponentType;
}

export interface FormData {
	postTopic?: string;
	keywordsInput?: string;
	keywordsList?: string[];
	ideasList?: string[];
	post?: string;
}
