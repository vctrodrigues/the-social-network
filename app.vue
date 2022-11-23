<template>
  <main class="app-main">
    <div class="app-alerts-container"></div>
    <NuxtPage />
  </main>
</template>

<style lang="scss">
.app-main {
  background-color: var(--app-colors-background500);
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
