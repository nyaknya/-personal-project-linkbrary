import Modal from '../Modal';

interface LinkDeleteModalProps {
  onClose: () => void;
  linkUrl: string;
}

export default function LinkDeleteModal({
  onClose,
  linkUrl,
}: LinkDeleteModalProps) {
  return (
    <Modal onClose={onClose} className="link-delete-modal">
      <h2>링크 삭제</h2>
      <p>{linkUrl}</p>
      <button>삭제하기</button>
    </Modal>
  );
}
