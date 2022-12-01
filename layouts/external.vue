<script lang="ts" setup>
import { Dropdown } from "@cleancloud/design-system";
</script>

<template>
  <div class="app-external-layout">
    <NuxtPage />
    <Dropdown
      v-model="$i18n.locale"
      class="app-locale-dropdown"
      :options="[
        {
          options: $i18n.availableLocales.map((locale) => ({
            value: locale,
            label: locale === 'pt' ? 'PT (BR)' : 'EN (US)',
          })),
        },
      ]"
      top
    />
  </div>
</template>

<style lang="scss" scoped>
.app-external-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
.app-locale-dropdown {
  position: absolute;
  bottom: var(--app-sizes-xs);
}
</style>
