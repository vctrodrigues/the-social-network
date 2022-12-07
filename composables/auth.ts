import { login, logout, signup as _signup } from "@/services";

import { UserSignupPayload, UserSignupResponse } from "@/types/user.types";
import { APIMessage } from "@/types/api.types";

export function useAuth() {
  const signup = async (user: UserSignupPayload) => {
    const response = (await _signup(user).catch(
      () => null
    )) as APIMessage<UserSignupResponse> | null;

    if (!response) {
      return false;
    }

    return await login({
      email: response.payload.user.email,
      password: user.password,
    })
      .then(() => true)
      .catch(() => false);
  };

  return { login, logout, signup };
}
