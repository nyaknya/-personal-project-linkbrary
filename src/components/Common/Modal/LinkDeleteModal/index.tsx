import Modal from '../Modal';

interface LinkDeleteModalProps {
  onClose: () => void;
  LinkUrl: string;
}

export default function LinkDeleteModal({
  onClose,
  LinkUrl,
}: LinkDeleteModalProps) {
  return (
    <Modal onClose={onClose} className="folder-delete-modal">
      <h2>링크 삭제</h2>
      <p>{LinkUrl}</p>
      <button>삭제하기</button>
    </Modal>
  );
}
