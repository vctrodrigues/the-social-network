<script lang="ts" setup>
import { Avatar } from "@cleancloud/design-system";
import { User } from "@/types/user.types";

const props = defineProps<{
  user?: User | null;
}>();
</script>

<template>
  <div class="app-profile-link">
    <div class="app-profile-link__info app-gap--nano">
      <Avatar></Avatar>
      <div class="app-profile-link__info__column">
        <Span label semibold>{{ props.user?.name }}</Span>
        <Span>@{{ props.user?.username }}</Span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-profile-link {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .app-profile-link__info {
    display: flex;
    align-items: center;

    .app-profile-link__info__column {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
