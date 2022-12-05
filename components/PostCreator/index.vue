<script lang="ts" setup>
import { Avatar, Button, Textfield } from "@cleancloud/design-system";

const postContent = ref<string>("");

const { capitalizeFirst } = useCapitalize();
</script>

<template>
  <div
    class="app-post-creator app-bg--background-50 app-bra--md app-bc--primary-500 app-ba--hairline app-pa--xxxs app-gap--nano"
  >
    <Avatar></Avatar>
    <Textfield
      v-model="postContent"
      :placeholder="capitalizeFirst($t('app.post-creator.placeholder'))"
    />
    <Button secondary>
      {{ capitalizeFirst($t("app.post-creator.addPhoto")) }}
    </Button>
    <Button>{{ capitalizeFirst($t("app.post-creator.post")) }}</Button>
  </div>
</template>

<style lang="scss" scoped>
.app-post-creator {
  display: flex;
}
</style>
