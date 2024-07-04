import { User } from "@/app/types/userType";
import { create } from "zustand";

type StateType = {
  accessToken?: string;
  userInfo?: User;
  setAccessToken: (accessToken: string) => void;
  setUserInfo: (userName: User) => void;
};

const useStore = create<StateType>((set) => ({
  accessToken: undefined,
  userInfo: undefined,
  setAccessToken: (accessToken: string) => set({ accessToken }),
  setUserInfo: (userInfo: User) => set({ userInfo }),
}));
export default useStore;
