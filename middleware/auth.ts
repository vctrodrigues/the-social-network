import { useUserStore } from "@/store";

export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = useUserStore();

  if (!isAuthenticated && to.path === "/") {
    return navigateTo("/login");
  }

  if (isAuthenticated && ["/login", "/signup"].includes(to.path)) {
    return navigateTo("/");
  }
});
