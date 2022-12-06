import {
  createMediaPost,
  createPost,
  likePost,
  listPosts,
  unlikePost,
} from "@/services";

import { Post, PostRequest, PostResponse } from "@/types/post.types";
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
    const posts = (
      await listPosts().then((response) => {
        return (response as APIMessage).payload as PostResponse[];
      })
    ).map(transformPost);

    return posts ?? [];
  };

  const addPost = async (post: PostRequest): Promise<Post | boolean> => {
    if (post.media) {
      return createMediaPost(post)
        .then((response) => {
          const { user, text, media, comments, likes, created_at } =
            response as PostResponse;

          return {
            user,
            text,
            media,
            comments,
            likes,
            created_at,
          } as Post;
        })
        .catch(() => false);
    }

    return createPost(post)
      .then((response) => {
        const { user, text, media, comments, likes, created_at } =
          response as PostResponse;

        return {
          user,
          text,
          media,
          comments,
          likes,
          created_at,
        } as Post;
      })
      .catch(() => false);
  };

  return {
    listFeed,
    addPost,
    likePost,
    unlikePost,
    transformPost,
  };
}
