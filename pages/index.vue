<script lang="ts" setup>
import { Button, H1 } from "@cleancloud/design-system";
import { useUserStore } from "@/store";

const { user } = useUserStore();
const { logout } = useAuth();

definePageMeta({
  middleware: "auth",
});

function onLogout() {
  logout();
  useRouter().push("/login");
}
</script>

<template>
  <div class="app-home">
    <H1 class="app-mr--xs" semibold>Olá, {{ user?.name }}</H1>
    <Button prepend-icon="logout" secondary @click="onLogout">Sair</Button>
  </div>
</template>

<style lang="scss" scoped>
.app-home {
  display: flex;
}
</style>
