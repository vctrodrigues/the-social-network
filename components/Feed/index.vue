<script lang="ts" setup>
import { Post } from "@/types/post.types";

const posts = ref<Post[]>();

const { listFeed } = usePost();

onMounted(() => {
  setTimeout(async () => {
    reloadFeed();
  }, 100);
});

async function reloadFeed() {
  posts.value = await listFeed();
}

async function onPostCreated() {
  reloadFeed();
}

async function onPostLiked(post: Post) {
  posts.value?.forEach((_post) => {
    if (_post.id === post.id) {
      _post.likes = post.likes;
    }
  });
}
</script>

<template>
  <div class="app-feed app-gap--nano">
    <PostCreator @create:post="onPostCreated" />
    <PostCard
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @react:post="onPostLiked"
    />
  </div>
</template>

<style lang="scss" scoped>
.app-feed {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
