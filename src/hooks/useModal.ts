/* eslint-disable @typescript-eslint/no-explicit-any */
import useModalStore from "@/store/useModalStore";

function useModal() {
  const { openModal, closeModal } = useModalStore();

  const handleOpenModal = ({
    type,
    props = {},
  }: {
    type: string;
    props?: any;
  }) => {
    openModal(type, props);
  };

  const handleCloseModal = () => {
    closeModal();
  };

  return { openModal: handleOpenModal, closeModal: handleCloseModal };
}

export default useModal;
