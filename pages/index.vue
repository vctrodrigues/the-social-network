<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
  layout: "internal",
});
</script>

<template>
  <div class="app-home app-px--xxl app-py--xxs app-gap--xxs">
    <Sidebar>
      <ProfileSummary />
      <ProfileSuggest />
    </Sidebar>
    <div class="app-home__feed app-gap--xxxs">
      <PostCreator />
      <Feed />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-home {
  display: flex;

  .app-home__feed {
    display: flex;
    flex-direction: column;

    width: 100%;
  }
}
</style>
