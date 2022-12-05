export function listPosts() {
  return useFetch(`http://localhost:3000/api/posts`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
}
