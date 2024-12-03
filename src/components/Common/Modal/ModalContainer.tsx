/* eslint-disable @typescript-eslint/no-explicit-any */
import { createPortal } from "react-dom";

import useModalStore from "@/store/useModalStore";

import FolderAddModal from "./FolderAddModal";
import FolderDeleteModal from "./FolderDeleteModal";
import FolderEditModal from "./FolderEditModal";
import FolderShareModal from "./FolderShareModal";
import LinkDeleteModal from "./LinkDeleteModal";
import LinkFolderAddModal from "./LinkFolderAddModal";

const MODAL_COMPONENTS: { [key: string]: React.FC<any> } = {
  folderAdd: FolderAddModal,
  folderEdit: FolderEditModal,
  folderDelete: FolderDeleteModal,
  folderShare: FolderShareModal,
  linkDelete: LinkDeleteModal,
  linkFolderAdd: LinkFolderAddModal,
};

export default function ModalContainer() {
  const { isModalOpen, modalProps, closeModal } = useModalStore();

  if (!isModalOpen) return null;

  const ModalComponent = MODAL_COMPONENTS[isModalOpen];
  if (!ModalComponent) return null;

  return createPortal(
    <ModalComponent {...modalProps} onClose={closeModal} />,
    document.getElementById("modal")!
  );
}
