export function listUsers() {
  return useCustomFetch(`/users`, {
    method: "GET",
  });
}

export function getProfile(username: string) {
  return useCustomFetch(`/users/username/${username}`, {
    method: "GET",
  });
}
