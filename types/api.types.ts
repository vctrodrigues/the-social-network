import { PostResponse } from "./post.types";
import { UserProfileResponse, UserResponse } from "./user.types";

export type APIMessage<T> = {
  payload: T;
  message: string;
  success: boolean;
};
