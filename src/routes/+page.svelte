<script lang="ts">
	import NewIdeaIcon from '$lib/assets/icons/NewIdeaIcon.svelte';
	import NewPostIcon from '$lib/assets/icons/NewPostIcon.svelte';
	import IdeasResults from '$lib/components/results/IdeasResults.svelte';
	import PostResult from '$lib/components/results/PostResult.svelte';
	import Card from '../lib/components/Card.svelte';
	import Ideas from '../lib/components/tabs/Ideas.svelte';
	import Posts from '../lib/components/tabs/Posts.svelte';
	import Tabs from '../lib/components/tabs/Tabs.svelte';
	import { activeTab } from '../stores/tab.store';

	import type { TabItem } from '../lib/interfaces/tabs';

	let activeTabValue: string;

	activeTab.subscribe((value) => {
		activeTabValue = value;
	});

	const tabs: TabItem[] = [
		{ label: 'Ideas', component: Ideas, iconComponent: NewIdeaIcon },
		{ label: 'Posts', component: Posts, iconComponent: NewPostIcon }
	];
</script>

<Card><Tabs {tabs} {activeTabValue} /></Card>
<Card>
	{#if activeTabValue === 'Ideas'}
		<IdeasResults />
	{:else if activeTabValue === 'Posts'}
		<PostResult />
	{/if}
</Card>
