<script lang="ts" setup>
import { Alert, Button, Textfield } from "@cleancloud/design-system";

definePageMeta({
  middleware: "auth",
});

const email = ref<string>("");
const password = ref<string>("");
const active = ref<boolean>(false);

const { login } = useAuth();

async function onLogin() {
  if (await login({ email: email.value, password: password.value })) {
    useRouter().push("/");
  } else {
    active.value = true;
  }
}
</script>

<template>
  <div class="app-login-container app-pa--xl app-bra--md">
    <img
      src="/img/logo.svg"
      alt="Logotipo The Social Network"
      class="app-logo app-mb--xs"
    />

    <form class="app-login-container__form">
      <Textfield v-model="email" placeholder="E-mail" class="app-mb--nano" />
      <Textfield v-model="password" placeholder="Senha" class="app-mb--nano" />
      <Button append-icon="chevron_right" @click.prevent="onLogin"
        >Entrar</Button
      >
    </form>

    <Span class="app-mt--xs" body>
      ou <NuxtLink to="/signup">cadastre-se</NuxtLink> agora
    </Span>

    <Alert
      v-model="active"
      title="Erro no login"
      icon="error"
      :timeout="4000"
      error
      mark
    >
      Suas credenciais são inválidas. Tente novamente.
    </Alert>
  </div>
</template>

<style lang="scss" scoped>
.app-login-container {
  width: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--app-colors-white500);
  box-shadow: var(--app-shadows-1);
}

.app-logo {
  height: var(--app-sizes-xl);
}

.app-login-container__form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
