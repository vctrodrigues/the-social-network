<script lang="ts" setup>
import { Button, Textfield } from "@cleancloud/design-system";

const search = ref<string>("");

const { logout } = useAuth();
const { capitalizeFirst } = useCapitalize();

function onLogout() {
  logout();
  useRouter().push("/login");
}
</script>

<template>
  <header
    class="app-header app-py--xxxs app-px--xxl app-bg--background-50 app-bb--hairline app-bc--grey-200"
  >
    <div class="app-header__column">
      <img class="app-header__logo" src="/img/logo.square.svg" alt="Logo TSN" />
      <Textfield
        v-model="search"
        prepend-icon="search"
        :placeholder="capitalizeFirst($t('app.header.search'))"
      />
    </div>
    <div class="app-header__column">
      <ProfileButton />
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
