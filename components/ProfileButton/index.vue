<script lang="ts" setup>
import { Avatar, Label } from "@cleancloud/design-system";
import { useUserStore } from "@/store";

const { user } = useUserStore();
</script>

<template>
  <div
    class="app-profile-button app-gap--nano app-px--xxxs app-py--nano app-bg--grey-100 app-bra--sm app-ba--hairline app-bc--grey-300"
  >
    <Avatar></Avatar>
    <Label semibold>Olá, {{ user?.name }}</Label>
  </div>
</template>

<style lang="scss" scoped>
.app-profile-button {
  display: flex;
  align-items: center;
  transition: var(--app-transitions-2);
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }
}
</style>
