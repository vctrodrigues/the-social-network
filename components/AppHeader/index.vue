<script lang="ts" setup>
import { Button } from "@cleancloud/design-system";
import { useUserStore } from "~~/store";

const { logout } = useAuth();
const { user } = useUserStore();

function onLogout() {
  logout();
  useRouter().push("/login");
}

function onRedirectProfile() {
  useRouter().push(`/profile/${user?.username}`);
}
</script>

<template>
  <header
    class="app-header app-py--xxxs app-px--xxl app-bg--background-50 app-bb--hairline app-bc--grey-200"
  >
    <div class="app-header__column">
      <NuxtLink to="/"
        ><img
          class="app-header__logo"
          src="/img/logo.square.svg"
          alt="Logo TSN"
      /></NuxtLink>
    </div>
    <div class="app-header__column">
      <ProfileButton @click="onRedirectProfile" />
      <Button prepend-icon="logout" ghost icon @click="onLogout"></Button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header.app-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .app-header__column {
    display: flex;
    align-items: center;
    gap: var(--app-sizes-xxs);
  }

  img.app-header__logo {
    height: var(--app-sizes-xxs);
  }
}
</style>
