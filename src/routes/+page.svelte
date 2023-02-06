<script lang="ts">
	import NewIdeaIcon from '$lib/assets/icons/NewIdeaIcon.svelte';
	import NewPostIcon from '$lib/assets/icons/NewPostIcon.svelte';
	import Results from '$lib/components/Results.svelte';
	import Card from '../lib/components/Card.svelte';
	import Posts from '../lib/components/Posts.svelte';
	import Tabs from '../lib/components/Tabs.svelte';
	import Topics from '../lib/components/Topics.svelte';
	import type { TabItem } from '../lib/interfaces/tabs';

	const tabs: TabItem[] = [
		{ label: 'Ideas', component: Topics, iconComponent: NewIdeaIcon },
		{ label: 'Posts', component: Posts, iconComponent: NewPostIcon }
	];
</script>

<Card><Tabs {tabs} activeTab={tabs[0].label} /></Card>
<Card>
	<Results />
</Card>
