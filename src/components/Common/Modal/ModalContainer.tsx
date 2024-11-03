/* eslint-disable @typescript-eslint/no-explicit-any */
import { createPortal } from 'react-dom';
import useModalStore from '../../../store/useModalStore';
import FolderAddModal from './FolderAddModal';
import FolderDeleteModal from './FolderDeleteModal';
import LinkDeleteModal from './LinkDeleteModal';
import FolderEditModal from './FolderEditModal';

const MODAL_COMPONENTS: { [key: string]: React.FC<any> } = {
  folderAdd: FolderAddModal,
  folderEdit: FolderEditModal,
  folderDelete: FolderDeleteModal,
  linkDelete: LinkDeleteModal,
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
