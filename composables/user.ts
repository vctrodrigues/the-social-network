import { listUsers } from "@/services";
import { useUserStore } from "@/store";

import { User, UserProfileResponse } from "@/types/user.types";

export function useUser() {
  const { user } = useUserStore();

  const listSuggestedUsers = async (): Promise<User[]> => {
    const users = await listUsers()
      .then((response) => {
        if (response.error?.value) {
          return [];
        }

        return (response as UserProfileResponse[]).map(
          ({ id, username, name, cpf, email, picture, bio, role }) => ({
            id,
            username,
            name,
            cpf,
            email,
            picture,
            bio,
            role,
          })
        );
      })
      .catch(() => []);

    return users.filter((_user) => user?.email !== _user.email).slice(0, 3);
  };

  return {
    listSuggestedUsers,
  };
}
