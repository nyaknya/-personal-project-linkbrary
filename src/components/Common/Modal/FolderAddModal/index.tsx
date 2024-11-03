import Modal from '../Modal';

interface FolderAddModal {
  onClose: () => void;
}

export default function FolderAddModal({ onClose }: FolderAddModal) {
  return (
    <Modal onClose={onClose}>
      <h2>폴더 추가</h2>
      <input type="text" />
      <button>추가하기</button>
    </Modal>
  );
}
