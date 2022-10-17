export interface User {
  id: string;
  name: string;
  email: string;
  token: string;
}

export type ProfileType = {
  auth: boolean;
  error: any;
  user: User;
};
