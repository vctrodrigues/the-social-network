<script lang="ts" setup>
import { Comment } from "@/types/post.types";
import { useUserStore } from "@/store";

const props = defineProps<{
  comment: Comment;
}>();

const { user } = useUserStore();
const { capitalizeFirst } = useCapitalize();

const emit = defineEmits<{
  (e: "remove:comment", v: Comment): void;
}>();

function onDelete() {
  emit("remove:comment", props.comment);
}
</script>

<template>
  <div class="app-post-comment app-gap--nano">
    <Span label semibold>@{{ props.comment.user.username }}</Span>
    <Span body>{{ props.comment.text }}</Span>
    <Span
      v-beta
      v-if="comment.user.id === user?.id"
      class="app-post-comment__delete"
      color="primary500"
      @click="onDelete"
    >
      {{ capitalizeFirst($t("app.post-comment.delete")) }}
    </Span>
  </div>
</template>

<style lang="scss" scoped>
.app-post-comment {
  display: flex;
  align-items: baseline;

  .app-post-comment__delete {
    cursor: pointer;
  }
}
</style>
