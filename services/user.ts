export function listUsers() {
  return useFetch(`http://localhost:3000/api/users`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
}
