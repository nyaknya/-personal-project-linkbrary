import { create } from "zustand";

interface UserState {
  userId: number | null;
  isUserIdSet: boolean;
  setUserId: (id: number | null) => void;
}

const useUserStore = create<UserState>((set) => ({
  userId: null,
  isUserIdSet: false,
  setUserId: (id) =>
    set({
      userId: id,
      isUserIdSet: id !== null,
    }),
}));

export default useUserStore;
