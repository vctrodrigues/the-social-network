<script lang="ts" setup>
import { Post } from "@/types/post.types";

const posts = ref<Post[]>();

const { listFeed } = usePost();

onMounted(() => {
  setTimeout(async () => {
    posts.value = await listFeed();
  }, 100);
});
</script>

<template>
  <div class="app-feed app-gap--nano">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<style lang="scss" scoped>
.app-feed {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
