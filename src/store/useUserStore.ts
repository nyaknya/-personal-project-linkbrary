import { create } from "zustand";

interface UserStore {
  userId: number | null;
  setUserId: (id: number) => void;
  clearUserId: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  userId: null,
  setUserId: (id: number) => set({ userId: id }),
  clearUserId: () => set({ userId: null }),
}));

export default useUserStore;
