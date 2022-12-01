<script lang="ts" setup>
import { H4 } from "@cleancloud/design-system";

const { capitalizeFirst } = useCapitalize();
</script>

<template>
  <div
    class="app-profile-suggest app-pa--xxxs app-bg--background-50 app-ba--hairline app-bc--grey-300 app-bra--md"
  >
    <H4 semibold>
      {{ capitalizeFirst($t("app.profile-suggest.youMightKnow")) }}
    </H4>
  </div>
</template>
