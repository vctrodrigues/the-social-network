<script lang="ts" setup>
import { Avatar, Button, H3, Label, Span } from "@cleancloud/design-system";
import { useUserStore } from "@/store";

const { user } = useUserStore();
const { capitalizeFirst } = useCapitalize();

function onAccessProfile() {
  useRouter().push(`/profile/${user?.username}`);
}
</script>

<template>
  <div
    class="app-profile-summary app-bg--background-50 app-ba--hairline app-bc--grey-300 app-bra--md"
  >
    <div class="app-profile-summary__top app-pt--huge app-pb--xxxs">
      <img
        class="app-profile-summary__cover app-brtl--md app-brtr--md"
        src="/img/cover.png"
        alt="Victor Cover"
      />
      <Avatar large />
      <H3 class="app-mt--micro" semibold>{{ user?.name }}</H3>
      <Label>@{{ user?.username }}</Label>
      <Span class="app-mt--xs" body>{{ user?.bio }}</Span>
    </div>
    <div
      class="app-profile-summary__bottom app-bt--hairline app-bc--grey-300 app-pa--micro"
    >
      <Button ghost @click="onAccessProfile">
        {{ capitalizeFirst($t("app.profile-summary.my-profile")) }}
      </Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-profile-summary {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(2 * var(--app-sizes-giant));

  .app-profile-summary__top {
    display: flex;
    flex-direction: column;
    align-items: center;

    .app-profile-summary__cover {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }
  .app-profile-summary__bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
}
</style>

<style lang="scss">
.app-profile-summary {
  .app-profile-summary__top {
    & * {
      z-index: 2;
    }
  }
}
</style>
