<script lang="ts" setup>
import { Comment } from "@/types/post.types";

const props = defineProps<{
  comment: Comment;
}>();
</script>

<template>
  <div class="app-post-comment app-gap--nano">
    <Span label semibold>@{{ props.comment.user.username }}</Span>
    <Span body>{{ props.comment.text }}</Span>
  </div>
</template>

<style lang="scss" scoped>
.app-post-comment {
  display: flex;
}
</style>
