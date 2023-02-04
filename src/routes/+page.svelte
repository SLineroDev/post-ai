<script lang="ts">
	import Posts from '../lib/components/Posts.svelte';
	import Tabs from '../lib/components/Tabs.svelte';
	import Topics from '../lib/components/Topics.svelte';
	import type { TabItem } from '../lib/interfaces/tabs';

	const tabs: TabItem[] = [
		{ label: 'Topics', component: Topics },
		{ label: 'Posts', component: Posts }
	];
</script>

<Tabs {tabs} />
