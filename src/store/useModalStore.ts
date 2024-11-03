import { create } from 'zustand';

interface ModalState {
  isModalOpen: string | null;
  modalProps: any;
  openModal: (type: string, props?: any) => void;
  closeModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  isModalOpen: null,
  modalProps: {},
  openModal: (type, props = {}) =>
    set({ isModalOpen: type, modalProps: props }),
  closeModal: () => set({ isModalOpen: null, modalProps: {} }),
}));

export default useModalStore;
