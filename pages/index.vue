<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
  layout: "internal",
});
</script>

<template>
  <div class="app-home app-px--xxl app-py--xxs">
    <Sidebar>
      <ProfileSummary />
      <ProfileSuggest />
    </Sidebar>
  </div>
</template>

<style lang="scss" scoped>
.app-home {
  display: flex;
}
</style>
