/* eslint-disable @typescript-eslint/no-explicit-any */
import { createPortal } from 'react-dom';
import useModalStore from '../../../store/useModalStore';
import FolderAddModal from './FolderAddModal';

const MODAL_COMPONENTS: { [key: string]: React.FC<any> } = {
  folderAdd: FolderAddModal,
};

export default function ModalContainer() {
  const { isModalOpen, modalProps, closeModal } = useModalStore();

  if (!isModalOpen) return null;

  const ModalComponent = MODAL_COMPONENTS[isModalOpen];
  if (!ModalComponent) return null;

  return createPortal(
    <ModalComponent {...modalProps} onClose={closeModal} />,
    document.getElementById('modal')!,
  );
}
