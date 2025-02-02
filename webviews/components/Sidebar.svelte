<script lang="ts">
  let text = "";
  let todos: Array<{ todo: string; completed: boolean }> = [];
</script>

<form
  action=""
  on:submit|preventDefault={() => {
    todos = [{ todo: text, completed: false }, ...todos];
    text = "";
  }}
>
  <input type="text" bind:value={text} />
</form>
<ul>
  {#each todos as todo}
    <li
      class={todo.completed ? "complete" : ""}
      on:click={() => {
        todo.completed = !todo.completed;
      }}
    >
      {todo.todo}
    </li>
  {/each}
</ul>

<style>
  .complete {
    text-decoration: line-through;
  }
</style>
