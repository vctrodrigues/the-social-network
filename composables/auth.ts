import { login, logout } from "@/services";

export function useAuth() {
  return { login, logout };
}
