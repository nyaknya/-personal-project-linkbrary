import Modal from "../Modal";

interface FolderDeleteModalProps {
  onClose: () => void;
  folderName: string;
}

export default function FolderDeleteModal({
  onClose,
  folderName,
}: FolderDeleteModalProps) {
  return (
    <Modal onClose={onClose} className="folder-delete-modal">
      <h2>폴더 삭제</h2>
      <p>{folderName}</p>
      <button>삭제하기</button>
    </Modal>
  );
}
