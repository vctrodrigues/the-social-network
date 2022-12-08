<script lang="ts" setup>
import { Avatar, Button } from "@cleancloud/design-system";
import { User } from "@/types/user.types";

const { capitalizeFirst } = useCapitalize();

const props = defineProps<{
  user?: User | null;
}>();

function onAccessProfile() {
  useRouter().push(`/profile/${props.user?.username}`);
}
</script>

<template>
  <div class="app-profile-link" @click="onAccessProfile">
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
  cursor: pointer;

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
