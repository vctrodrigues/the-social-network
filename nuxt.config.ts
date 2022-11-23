// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: ["@/plugins/design-system.ts", "@/plugins/persistedstate.ts"],
  css: ["@cleancloud/design-system/styles.css"],
  modules: ["@pinia/nuxt"],
});
