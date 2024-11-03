import Button from '../../Button';
import Modal from '../Modal';

interface FolderAddModalProps {
  onClose: () => void;
}

export default function FolderAddModal({ onClose }: FolderAddModalProps) {
  return (
    <Modal onClose={onClose} className="folder-add-modal">
      <h2>폴더 추가</h2>
      <input type="text" placeholder="내용 입력" />
      <Button
        onClick={() => {
          console.log('추후추가');
        }}
      >
        추가하기
      </Button>
    </Modal>
  );
}
