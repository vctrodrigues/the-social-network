import { isBefore } from "date-fns";
import {
  addComment,
  deleteComment,
  createMediaPost,
  createPost,
  likePost,
  listPosts,
  unlikePost,
} from "@/services";

import { Post, PostRequest, PostResponse, Comment } from "@/types/post.types";
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
            isBefore(
              new Date(a.created_at as string),
              new Date(b.created_at as string)
            )
              ? -1
              : 1
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

  const sendComment = async (post: Post, text: string) => {
    return await addComment(post, text)
      .then((res: APIMessage<PostResponse>) => res.payload)
      .catch(() => null);
  };

  const removeComment = async (post: Post, comment: Comment) => {
    return await deleteComment(post, comment)
      .then(() => true)
      .catch(() => false);
  };

  return {
    listFeed,
    addPost,
    likePost,
    unlikePost,
    transformPost,
    sendComment,
    removeComment,
  };
}
