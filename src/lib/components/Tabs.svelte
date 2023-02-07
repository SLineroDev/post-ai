<script lang="ts">
	import ActiveTabLine from '$lib/assets/icons/ActiveTabLine.svelte';
	import { crossFadeAnimation } from '$lib/utils/animations';
	import { activeTab } from '../../stores/tab.store';
	import type { TabItem } from '../interfaces/tabs';

	export let tabs: TabItem[];
	export let activeTabValue: string;

	const [, receive] = crossFadeAnimation();

	function handleClick(tabLabel: string) {
		activeTab.set(tabLabel);
	}
</script>

<ul>
	{#each tabs as tab (tab)}
		<li class={activeTabValue === tab.label ? 'active' : ''}>
			<button class="tab_button" on:click={() => handleClick(tab.label)}>
				<svelte:component this={tab.iconComponent} />
				{tab.label}
			</button>
			<ActiveTabLine strokeWidth={activeTabValue === tab.label ? 8 : 0} />
		</li>
	{/each}
</ul>
{#each tabs as tab (tab)}
	{#if activeTabValue === tab.label}
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

	.tab_button {
		font-size: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.25em;
		cursor: pointer;
		margin: auto;
		color: #939393;
	}

	li.active > button,
	button:hover {
		cursor: pointer;
		fill: #6455a8;
		color: #6455a8;
	}

	.form-container {
		padding: 2rem;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
