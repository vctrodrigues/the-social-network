import { isBefore } from "date-fns";
import {
  commentPost,
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
      await listPosts().then((response: APIMessage<PostResponse[]>) => {
        const posts = response.payload;
        posts.forEach((post) => {
          post.comments = post.comments.sort((a, b) =>
            isBefore(new Date(a.created_at), new Date(b.created_at)) ? -1 : 1
          );
        });

        return posts;
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

  const addComment = async (post: Post, text: string) => {
    return commentPost(post, text)
      .then((res: APIMessage<PostResponse>) => res.payload)
      .catch(() => null);
  };

  return {
    listFeed,
    addPost,
    likePost,
    unlikePost,
    transformPost,
    addComment,
  };
}
