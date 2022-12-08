<script lang="ts" setup>
import { isBefore } from "date-fns";
import { Post } from "@/types/post.types";

const props = defineProps<{
  username?: string;
}>();

const posts = ref<Post[]>();

const { listFeed } = usePost();

onMounted(() => {
  setTimeout(async () => {
    reloadFeed();
  }, 100);
});

async function reloadFeed() {
  posts.value = await listFeed()
    .then((posts) => {
      if (!props.username) {
        return posts;
      }

      return posts.filter((post) => post.user.username === props.username);
    })
    .catch(() => []);
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

async function onPostCommented(post: Post) {
  posts.value?.forEach((_post) => {
    if (_post.id === post.id) {
      _post.comments = post.comments.sort((a, b) =>
        isBefore(
          new Date(a.created_at as string),
          new Date(b.created_at as string)
        )
          ? -1
          : 1
      );
    }
  });
}
</script>

<template>
  <div class="app-feed app-gap--nano">
    <PostCreator v-if="!props.username" @create:post="onPostCreated" />
    <PostCard
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @react:post="onPostLiked"
      @comment:post="onPostCommented"
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
