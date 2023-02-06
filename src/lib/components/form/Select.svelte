<script lang="ts">
  export let selected: string;
	export let options: string[];
  export let label: string = '';
  export let placeholder: string = ''
  export let leftIconURL: string = '';

  function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

</script>

<label>
  <div>{label}</div>
  <select  style="background-image: url('{leftIconURL}')" class="{leftIconURL && "left-icon-bg"}" bind:value={selected}>
    <option value="" disabled selected hidden>{placeholder}</option>
    {#each options as option}
		<option class="option" value={option}>
			{capitalize(option)}
		</option>
    {/each}
  </select>
</label>

<style>
  .left-icon-bg{
    background-repeat: no-repeat;
    background-size: 32px;
    background-position: 8px;
  }

  label{
    min-width: 150px;
    flex: 1;
    font-size: 20px;
  }
  label div {
    font-weight: 700;
    padding-bottom: 8px;
    color: #6455A8;
  }

  select {
    width: 100%;
    border: 1px solid #E3E3E3;
    border-radius: 12px;
    padding: 10px;
    padding-left: 45px;
    appearance: none;
    font-weight: 700;
    font-family: inherit;
  }

  select:focus-within,
  select:focus {
    outline: 2px solid #6455A8;
  }

  select:hover {
    cursor: pointer;
  }

  .option {
    padding: 2rem;
  }

  select::after {
    content: "^";
    justify-self: end;
    width: 0.8em;
    height: 0.5em;
  }
</style>