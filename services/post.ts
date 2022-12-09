import { Post, PostRequest } from "@/types/post.types";

export function listPosts() {
  return useCustomFetch(`/posts`, {
    method: "GET",
  });
}

export function createPost(post: PostRequest) {
  return useCustomFetch(`/posts`, {
    method: "POST",
    body: {
      ...post,
    },
  });
}

export function createMediaPost(post: PostRequest) {
  const formData = new FormData();
  formData.append("media", post.media as File);
  formData.append("text", post.text as string);

  return useCustomFetch(`/posts/media`, {
    method: "POST",
    body: formData,
  });
}

export function likePost(id: string) {
  return useCustomFetch(`/posts/${id}/like`, {
    method: "GET",
  });
}

export function unlikePost(id: string) {
  return useCustomFetch(`/posts/${id}/unlike`, {
    method: "GET",
  });
}

export function commentPost(post: Post, text: string) {
  return useCustomFetch(`/posts/${post.id}/comment`, {
    method: "POST",
    body: {
      text,
    },
  });
}
