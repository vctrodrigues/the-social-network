<script lang="ts" setup>
import { H3, Icon, Span } from "@cleancloud/design-system";
import { User } from "@/types/user.types";

const props = defineProps<{
  user: User;
}>();
</script>

<template>
  <div
    class="app-profile-card app-gap--xxs app-bra--md app-py--xs app-bg--background-50 app-ba--hairline app-bc--grey-300"
  >
    <div class="app-avatar app-bra--pill app-bg--grey-900 app-pa--xs">
      <Icon color="white500" size="xxl">person</Icon>
    </div>

    <div class="app-profile-card__info">
      <H3 semibold>{{ props.user.name }}</H3>
      <Span label>@{{ props.user.username }}</Span>
    </div>

    <Span body>{{ props.user.bio }}</Span>
  </div>
</template>

<style lang="scss" scoped>
.app-profile-card {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;

  align-items: center;

  .app-avatar {
    width: 124px;
    height: 124px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .app-profile-card__info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
