export function listUsers() {
  return useCustomFetch(`/users`, {
    method: "GET",
  });
}
