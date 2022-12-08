// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: ["@/plugins/design-system.ts", "@/plugins/persistedstate.ts"],
  css: ["@cleancloud/design-system/styles.css"],
  modules: ["@pinia/nuxt"],
  runtimeConfig: {
    app: {
      environment: process.env.NODE_ENV,
    },
    public: {
      baseURL: `http://localhost:3001/api`,
    },
  },
});
