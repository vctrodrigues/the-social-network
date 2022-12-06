<script lang="ts" setup>
import { H4 } from "@cleancloud/design-system";
import { User } from "@/types/user.types";

const users = ref<User[]>();

const { capitalizeFirst } = useCapitalize();
const { listSuggestedUsers } = useUser();

onMounted(() => {
  setTimeout(() => {
    loadUsers();
  }, 100);
});

async function loadUsers() {
  users.value = await listSuggestedUsers();
}
</script>

<template>
  <div
    class="app-profile-suggest app-pa--xxxs app-gap--xxxs app-bg--background-50 app-ba--hairline app-bc--grey-300 app-bra--md"
  >
    <H4 semibold>
      {{ capitalizeFirst($t("app.profile-suggest.youMightKnow")) }}
    </H4>
    <ProfileLink v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<style lang="scss" scoped>
.app-profile-suggest {
  display: flex;
  flex-direction: column;
}
</style>
