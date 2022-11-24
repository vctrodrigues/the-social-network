<script lang="ts" setup>
import { Dropdown } from "@cleancloud/design-system";
</script>

<template>
  <div class="app-default-layout">
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
.app-default-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.app-locale-dropdown {
  position: absolute;
  bottom: var(--app-sizes-xs);
}
</style>
