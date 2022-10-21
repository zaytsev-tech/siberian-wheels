import { ProfileType } from "./types";

export const initialProfile: ProfileType = {
  auth: false,
  error: null,
  user: {
    id: "0",
    name: "",
    email: "",
    token: "",
  },
};
