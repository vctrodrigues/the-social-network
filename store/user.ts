import { defineStore } from "pinia";

import { User } from "@/types/user.types";

export const useUserStore = defineStore(
  "user",
  () => {
    const user = ref<User | null>(null);
    const isAuthenticated = ref<boolean>(false);

    function setUser(_user: User | null) {
      if (!_user) {
        isAuthenticated.value = false;
        user.value = null;
        return;
      }

      isAuthenticated.value = true;
      user.value = _user;
    }

    return {
      user,
      isAuthenticated,
      setUser,
    };
  },
  {
    persist: true,
  }
);
