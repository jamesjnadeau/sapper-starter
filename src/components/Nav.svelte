<script>
  export let segment;

  import { slide } from "svelte/transition";

  let windowWidth;
  let isOpen = false;
  let minWidth = 992;
  let _wasMaximazed = true;
  
  // process on change
  $: if (windowWidth >= minWidth && !isOpen) {
    isOpen = true;
    _wasMaximazed = true;
  } else if (windowWidth < minWidth && _wasMaximazed) {
    isOpen = false;
    _wasMaximazed = false;
  }

  function toggleOpen() {
    console.log("isOpen", isOpen);
    isOpen = !isOpen;
  }

  function linkClicked() {
    // close afer a click and menu is open
    if (isOpen && windowWidth < minWidth) {
      toggleOpen();
    } 
  }
</script>

<svelte:window bind:innerWidth={windowWidth} />

<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="header">
  <div class="container p-2">
    <a class="brand navbar-brand" href="/" on:click={linkClicked}>
      App Name
    </a>
    <button
      on:click={toggleOpen}
      class="navbar-toggler"
      type="button"
      aria-controls="navbarSupportedContent"
      aria-expanded={isOpen}
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>
    {#if isOpen}
      <div class="navbar-collapse" id="navbarSupportedContent" transition:slide|local>
        <ul
          class="navbar-nav d-flex justify-content-around align-items-center
          w-100">
          <a
            class="nav-item text-white p1"
            href="/sub-folder/"
            class:active={segment === 'sub-folder'}
            on:click={linkClicked}>
            Sub Folder
          </a>
        </ul>
      </div>
    {/if}
  </div>
</nav>
