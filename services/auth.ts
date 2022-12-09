import {
  UserPayload,
  UserProfileResponse,
  UserResponse,
  UserSignupPayload,
} from "@/types/user.types";

import { useUserStore } from "@/store";

export async function login(user: UserPayload) {
  const successful = await useCustomFetch(`/auth/login`, {
    method: "POST",
    body: user,
  })
    .then((response: UserResponse) => {
      localStorage.setItem("access_token", response.access_token);

      return true;
    })
    .catch(() => {
      localStorage.removeItem("access_token");

      return false;
    });

  if (successful) {
    await saveProfile();
  }

  return successful;
}

export function logout() {
  localStorage.removeItem("access_token");

  const { setUser } = useUserStore();
  setUser(null);
}

export function signup(payload: UserSignupPayload) {
  return useCustomFetch(`/users/signup`, {
    method: "POST",
    body: payload,
  });
}

async function saveProfile() {
  return await useCustomFetch(`/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  })
    .then((response: UserProfileResponse) => {
      const { id, name, username, cpf, bio, email, picture, role } = response;

      const { setUser } = useUserStore();

      setUser({
        id,
        name,
        username,
        cpf,
        email,
        picture,
        bio,
        role,
      });

      return true;
    })
    .catch((err) => {
      debugger;
      return false;
    });
}
