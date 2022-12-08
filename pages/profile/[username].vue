<script lang="ts" setup>
import { UserProfileResponse } from "~~/types/user.types";

definePageMeta({
  middleware: "auth",
  layout: "internal",
});

const route = useRoute();
const { getUserProfile } = useUser();

const username = ref<string>(route.params.username as string);
const user = ref<UserProfileResponse>();

onMounted(async () => {
  if (username.value) {
    const _user = await getUserProfile(username.value);

    if (_user) {
      user.value = _user;
    }
  }
});
</script>

<template>
  <div class="app-profile app-pa--xs app-gap--xs">
    <ProfileCard v-if="user" :user="user" />
    <div class="app-profile__feed">
      <Feed v-if="user" :username="user.username" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-profile {
  display: flex;
  flex-direction: column;
  align-items: center;

  .app-profile__feed {
    width: 100%;
    max-width: 800px;
  }
}
</style>
