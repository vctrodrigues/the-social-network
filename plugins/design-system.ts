import DesignSystem from "@cleancloud/design-system";

import { createI18n } from "vue-i18n";

import en from "@/locales/en.json";
import pt from "@/locales/pt.json";

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(DesignSystem);

  const i18n = createI18n({
    legacy: false, // composition API
    globalInjection: true, // inject on vue instance ==> $i18n
    locale: "en", // default locale ==> english
    messages: {
      en,
      pt,
    },
  });

  vueApp.use(i18n);
});
