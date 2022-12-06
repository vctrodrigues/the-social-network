import { PostResponse } from "./post.types";
import { UserProfileResponse } from "./user.types";

export type APIMessage = {
  payload?: UserProfileResponse[] | PostResponse[] | PostResponse;
  message: string;
  success: boolean;
};
