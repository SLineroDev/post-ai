<script lang="ts">
	import Posts from '../lib/components/Posts.svelte';
	import Tabs from '../lib/components/Tabs.svelte';
	import Card from '../lib/components/Card.svelte';
	import Topics from '../lib/components/Topics.svelte';
	import type { TabItem } from '../lib/interfaces/tabs';
	import Results from '$lib/components/Results.svelte';
	

	const tabs: TabItem[] = [
		{ label: 'Ideas', component: Topics },
		{ label: 'Posts', component: Posts }
	];
</script>

<Card><Tabs {tabs} activeTab={tabs[0].label} /></Card>
<Card>
	<Results />
</Card>
