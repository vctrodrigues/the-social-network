<script lang="ts" setup>
import { Button, Textfield } from "@cleancloud/design-system";

definePageMeta({
  middleware: "auth",
});

const name = ref<string>("");
const cpf = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const passwordCheck = ref<string>("");
</script>

<template>
  <div class="app-signup-container app-pa--xl app-bra--md">
    <img
      src="/img/logo.svg"
      alt="Logotipo The Social Network"
      class="app-logo app-mb--xs"
    />

    <form class="app-signup-container__form">
      <Textfield v-model="name" placeholder="Nome" class="app-mb--nano" />
      <Textfield v-model="cpf" placeholder="CPF" class="app-mb--nano" />
      <Textfield v-model="email" placeholder="E-mail" class="app-mb--nano" />
      <Textfield v-model="password" placeholder="Senha" class="app-mb--nano" />
      <Textfield
        v-model="passwordCheck"
        placeholder="Repita sua senha"
        class="app-mb--nano"
      />
      <Button append-icon="chevron_right">Cadastrar</Button>
    </form>

    <Span class="app-mt--xs" body>
      ou <NuxtLink to="/login">faça seu login</NuxtLink>
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
