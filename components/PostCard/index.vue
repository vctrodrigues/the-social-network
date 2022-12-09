<script lang="ts" setup>
import { Avatar, Button, Textfield } from "@cleancloud/design-system";
import { useUserStore } from "@/store";

import { Post, PostResponse } from "@/types/post.types";
import { APIMessage } from "@/types/api.types";

const props = defineProps<{
  post: Post;
}>();

const { likePost, unlikePost, addComment, transformPost } = usePost();
const { capitalizeFirst } = useCapitalize();
const { user } = useUserStore();

const baseURL = useRuntimeConfig().public.baseURL;

const commentMessage = ref<string>("");

const userLiked = computed(() => {
  return props.post.likes.some((like) => like.user.id === user?.id);
});

const emit = defineEmits<{
  (e: "react:post" | "comment:post", v: Post): void;
}>();

async function onLike() {
  if (userLiked.value) {
    const { payload } = (await unlikePost(
      props.post.id
    )) as APIMessage<PostResponse>;
    emit("react:post", transformPost(payload));
    return;
  }

  const { payload } = (await likePost(
    props.post.id
  )) as APIMessage<PostResponse>;
  emit("react:post", transformPost(payload));
}

async function onSend() {
  if (!commentMessage.value) {
    return;
  }

  const response = await addComment(props.post, commentMessage.value);

  if (response) {
    emit("comment:post", transformPost(response));
  }

  commentMessage.value = "";
}
</script>

<template>
  <div
    class="app-post-card app-py--xxxs app-pb--xxxs app-gap--nano app-bg--background-50 app-bra--md app-ba--hairline app-bc--grey-300"
  >
    <div
      class="app-post-card__user-info app-pb--xxxs app-px--xxxs app-bb--hairline app-bc--grey-300 app-gap--nano app-pa--nano"
    >
      <Avatar></Avatar>
      <Span body>@{{ props.post.user.username }}</Span>
    </div>
    <div
      class="app-post-card__content app-py--xxxs app-px--xxxs app-bb--hairline app-bc--grey-300"
    >
      <img
        v-if="props.post.media"
        :src="`${baseURL}/posts/image/${props.post.media}`"
        :alt="props.post.text"
        class="app-bra--sm app-mb--xxxs"
      />
      <Span class="app-pa--nano" body>{{ props.post.text }}</Span>
    </div>
    <div class="app-post-card__comments-container app-px--xxxs">
      <PostComment
        v-for="comment in props.post.comments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
    <div class="app-post-card__actions app-px--xxxs app-gap--nano app-pt--nano">
      <Button
        prepend-icon="favorite"
        :danger="userLiked"
        icon
        :ghost="!userLiked"
        @click="onLike"
      >
        {{ props.post.likes.length }}
      </Button>
      <Textfield
        v-model="commentMessage"
        :placeholder="capitalizeFirst($t('app.post-card.writeComment'))"
      />
      <Button
        :disabled="!commentMessage"
        prepend-icon="send"
        icon
        ghost
        @click="onSend"
      ></Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-post-card {
  display: flex;
  flex-direction: column;

  .app-post-card__user-info {
    display: flex;
    align-items: center;
  }

  .app-post-card__content {
    display: flex;
    flex-direction: column;

    width: 100%;

    img {
      max-width: 100%;
      width: fit-content;
      height: auto;

      object-fit: contain;
    }
  }

  .app-post-card__actions {
    display: flex;
  }
}
</style>
