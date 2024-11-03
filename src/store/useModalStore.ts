import { create } from 'zustand';

interface ModalState {
  isModalOpen: string | null;
  modalProps: Record<string, any>;
  setOpenModal: (key: string, props?: any) => void;
  closeModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  isModalOpen: null,
  modalProps: {},
  setOpenModal: (key, props = {}) =>
    set({ isModalOpen: key, modalProps: { [key]: props } }),
  closeModal: () => set({ isModalOpen: null, modalProps: {} }),
}));

export default useModalStore;
