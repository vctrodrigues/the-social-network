import { listPosts } from "@/services";
import { useUserStore } from "@/store";

import { Post, PostResponse } from "@/types/post.types";
import { APIMessage } from "@/types/api.types";

export function usePost() {
  const transformPost = (post: PostResponse): Post => {
    const { id, user, text, media, comments, likes, created_at } = post;

    return {
      id,
      user,
      text,
      media,
      comments,
      likes,
      created_at,
    };
  };

  const listFeed = async () => {
    const { user } = useUserStore();

    const posts = (
      await listPosts().then(({ data }) =>
        ((data.value as APIMessage).payload as PostResponse[]).filter(
          (post) => post.user.id !== user?.id
        )
      )
    ).map(transformPost);

    return posts ?? [];
  };

  return {
    listFeed,
  };
}
