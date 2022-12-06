import {
  UserPayload,
  UserProfileResponse,
  UserResponse,
} from "@/types/user.types";

import { useUserStore } from "@/store";

export async function login(user: UserPayload) {
  const successful = await useCustomFetch(`/auth/login`, {
    method: "POST",
    body: {
      user,
    },
  })
    .then(({ data: { value } }) => {
      const { access_token } = value as UserResponse;
      localStorage.setItem("access_token", access_token);

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

async function saveProfile() {
  return await useCustomFetch(`/profile`, {
    method: "GET",
  })
    .then(({ data: { value } }) => {
      const { id, name, username, cpf, bio, email, picture, role } =
        value as UserProfileResponse;

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
    .catch(() => false);
}
