export type User = {
  id: string;
  username: string;
  name: string;
  cpf: string;
  email: string;
  picture?: string;
  bio?: string;
  role: "ADMIN" | "VERIFIED" | "USER";
};

export type UserPayload = {
  email: string;
  password: string;
};

export type UserResponse = {
  access_token: string;
};

export type UserProfileResponse = {
  id: string;
  cpf: string;
  email: string;
  name: string;
  username: string;
  bio?: string;
  picture?: string;
  role: "ADMIN" | "VERIFIED" | "USER";
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
};
