<script lang="ts" setup>
import {
  Avatar,
  Button,
  Dialog,
  FileInput,
  Textfield,
} from "@cleancloud/design-system";

import { Post } from "@/types/post.types";

const postContent = ref<string>("");
const activeDrop = ref<boolean>(false);
const media = ref<File[]>([]);

const { capitalizeFirst } = useCapitalize();

const emit = defineEmits<{
  (e: "create:post", v: Post): void;
}>();

async function onCreatePost() {
  const { addPost } = usePost();

  const post = await addPost({
    text: postContent.value,
    media: media.value[0],
  });

  if (post) {
    emit("create:post", post as Post);
    postContent.value = "";
  }
}
</script>

<template>
  <div
    class="app-post-creator app-bg--background-50 app-bra--md app-bc--primary-500 app-ba--hairline app-pa--xxxs app-gap--nano"
  >
    <Avatar></Avatar>
    <Textfield
      v-model="postContent"
      width="60%"
      :placeholder="capitalizeFirst($t('app.post-creator.placeholder'))"
    />
    <Dialog
      v-model="activeDrop"
      :title="capitalizeFirst($t('app.post-creator.dialog.title'))"
      :width="600"
      :confirm="capitalizeFirst($t('app.post-creator.dialog.confirm'))"
      activator
      persist
      @confirm="onCreatePost"
    >
      <template #activator-text>
        {{ capitalizeFirst($t("app.post-creator.addPhoto")) }}
      </template>

      <FileInput v-model="media" />
    </Dialog>
    <Button @click="onCreatePost">{{
      capitalizeFirst($t("app.post-creator.post"))
    }}</Button>
  </div>
</template>

<style lang="scss" scoped>
.app-post-creator {
  display: flex;
  align-items: center;
}
</style>
