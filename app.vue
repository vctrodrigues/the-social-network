<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

watch(
  () => locale.value,
  (locale) => {
    localStorage.setItem("locale", locale);
  }
);

onMounted(() => {
  const favoriteLocale = localStorage.getItem("locale");

  if (favoriteLocale) {
    locale.value = favoriteLocale;
  } else {
    localStorage.setItem("locale", locale.value);
  }
});
</script>

<template>
  <main class="app-main">
    <div class="app-alerts-container"></div>
    <NuxtLayout />
  </main>
</template>

<style lang="scss">
.app-main {
  background-color: var(--app-colors-background500);
  min-height: 100vh;
}
</style>
