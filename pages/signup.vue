<script lang="ts" setup>
import { Button, Textfield } from "@cleancloud/design-system";
import { useI18n } from "vue-i18n";

definePageMeta({
  middleware: "auth",
  layout: "external",
});

const name = ref<string>("");
const cpf = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const passwordCheck = ref<string>("");

const { capitalizeFirst } = useCapitalize();
const { t } = useI18n();

const orLogin = computed(() => {
  return t("app.signup.orLogin").split("#");
});
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
        v-model="cpf"
        :placeholder="capitalizeFirst($t('app.signup.cpf'))"
        class="app-mb--nano"
      />
      <Textfield
        v-model="email"
        :placeholder="capitalizeFirst($t('app.signup.email'))"
        class="app-mb--nano"
      />
      <Textfield
        v-model="password"
        :placeholder="capitalizeFirst($t('app.signup.password'))"
        class="app-mb--nano"
      />
      <Textfield
        v-model="passwordCheck"
        :placeholder="capitalizeFirst($t('app.signup.passwordCheck'))"
        class="app-mb--nano"
      />
      <Button append-icon="chevron_right">{{
        capitalizeFirst($t("app.signup.button"))
      }}</Button>
    </form>

    <Span class="app-mt--xs" body>
      {{ orLogin[0] }} <NuxtLink to="/login">{{ orLogin[1] }}</NuxtLink>
    </Span>
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
