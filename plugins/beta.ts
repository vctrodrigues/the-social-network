export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.directive("beta", {
    mounted(el: HTMLElement) {
      const env = useRuntimeConfig();

      if (env.app.environment === "production") {
        el.remove();
      }
    },
  });
});
