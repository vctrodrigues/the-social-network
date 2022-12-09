<script lang="ts" setup>
import { Alert, Button, Textfield } from "@cleancloud/design-system";
import { useI18n } from "vue-i18n";

definePageMeta({
  middleware: "auth",
  layout: "external",
});

const email = ref<string>("");
const password = ref<string>("");
const active = ref<boolean>(false);

const { capitalizeFirst, capitalizeDot } = useCapitalize();
const { login } = useAuth();
const { t } = useI18n();

const orSignup = computed(() => {
  return t("app.login.orSignup").split("#");
});

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
      <Textfield
        v-model="email"
        type="email"
        :placeholder="capitalizeFirst($t('app.login.email'))"
        class="app-mb--nano"
      />
      <Textfield
        v-model="password"
        type="password"
        :placeholder="capitalizeFirst($t('app.login.password'))"
        class="app-mb--nano"
      />
      <Button append-icon="chevron_right" @click.prevent="onLogin">{{
        capitalizeFirst($t("app.login.button"))
      }}</Button>
    </form>

    <Span class="app-mt--xs" body>
      {{ orSignup[0] }}
      <NuxtLink to="/signup">{{ orSignup[1] }}</NuxtLink>
      {{ orSignup[2] }}
    </Span>

    <Alert
      v-model="active"
      :title="capitalizeFirst($t('app.login.errorTitle'))"
      icon="error"
      :timeout="4000"
      error
      mark
    >
      {{ capitalizeDot($t("app.login.invalidCredentials")) }}
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
