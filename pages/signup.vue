<script lang="ts" setup>
import { Button, Textfield } from "@cleancloud/design-system";
import { useI18n } from "vue-i18n";

definePageMeta({
  middleware: "auth",
  layout: "external",
});

const name = ref<string>("");
const username = ref<string>("");
const cpf = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const passwordCheck = ref<string>("");
const active = ref<boolean>(false);

const { capitalizeFirst, capitalizeDot } = useCapitalize();
const { t } = useI18n();

const orLogin = computed(() => {
  return t("app.signup.orLogin").split("#");
});

async function onSignup() {
  const { signup } = useAuth();
  if (password.value === passwordCheck.value) {
    const success = await signup({
      name: name.value,
      username: username.value,
      cpf: cpf.value,
      email: email.value,
      password: password.value,
    });

    if (success) {
      useRouter().push("/");
    } else {
      active.value = true;
    }
  } else {
    active.value = true;
  }
}
</script>

<template>
  <div class="app-signup-container app-pa--xl app-bra--md">
    <img
      src="/img/logo.svg"
      alt="Logotipo The Social Network"
      class="app-logo app-mb--xs"
    />

    <form class="app-signup-container__form">
      <Textfield
        v-model="name"
        :placeholder="capitalizeFirst($t('app.signup.name'))"
        class="app-mb--nano"
      />
      <Textfield
        v-model="username"
        :placeholder="capitalizeFirst($t('app.signup.username'))"
        class="app-mb--nano"
      />
      <Textfield
        v-model="cpf"
        :placeholder="capitalizeFirst($t('app.signup.cpf'))"
        class="app-mb--nano"
      />
      <Textfield
        v-model="email"
        type="email"
        :placeholder="capitalizeFirst($t('app.signup.email'))"
        class="app-mb--nano"
      />
      <Textfield
        v-model="password"
        type="password"
        :placeholder="capitalizeFirst($t('app.signup.password'))"
        class="app-mb--nano"
      />
      <Textfield
        v-model="passwordCheck"
        type="password"
        :placeholder="capitalizeFirst($t('app.signup.passwordCheck'))"
        class="app-mb--nano"
      />
      <Button append-icon="chevron_right" @click.prevent="onSignup">{{
        capitalizeFirst($t("app.signup.button"))
      }}</Button>
    </form>

    <Span class="app-mt--xs" body>
      {{ orLogin[0] }} <NuxtLink to="/login">{{ orLogin[1] }}</NuxtLink>
    </Span>

    <Alert
      v-model="active"
      :title="capitalizeFirst($t('app.signup.errorTitle'))"
      icon="error"
      :timeout="4000"
      error
      mark
    >
      {{ capitalizeDot($t("app.signup.errorOnSignup")) }}
    </Alert>
  </div>
</template>

<style lang="scss" scoped>
.app-signup-container {
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

.app-signup-container__form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
