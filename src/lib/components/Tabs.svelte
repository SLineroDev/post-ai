<script lang="ts">
	import ActiveTabLine from '$lib/assets/icons/ActiveTabLine.svelte';
	import { crossFadeAnimation } from '$lib/utils/animations';
	import type { TabItem } from '../interfaces/tabs';

	export let tabs: TabItem[];
	export let activeTab: string;

	const [send, receive] = crossFadeAnimation();

	function handleClick(tabLabel: string) {
		activeTab = tabLabel;
	}
</script>

<ul>
	{#each tabs as tab (tab)}
		<li class={activeTab === tab.label ? 'active' : ''}>
			<button on:click={() => handleClick(tab.label)}>{tab.label}</button>
			<ActiveTabLine strokeWidth={activeTab === tab.label ? 8 : 0} />
		</li>
	{/each}
</ul>
{#each tabs as tab (tab)}
	{#if activeTab === tab.label}
		<div class="form-container" in:receive={{ key: tab }}>
			<svelte:component this={tab.component} />
		</div>
	{/if}
{/each}

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		padding-left: 0;
		margin-bottom: 0;
		flex: 0 0 auto;
		height: 60px;
		list-style: none;
		border-bottom: 2px solid #6455a88b;
		justify-content: space-evenly;
		align-items: flex-end;
	}
	li {
		font-weight: 700;
		margin-bottom: -9px;
	}

	button {
		display: block;
		cursor: pointer;
		margin: auto;
		color: #939393;
	}

	li.active button,
	li:hover button {
		cursor: pointer;
		color: #6455a8;
	}

	.form-container {
		padding: 2rem;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
