import Button from '../../Button';
import Modal from '../Modal';

interface FolderEditModalProps {
  onClose: () => void;
}

export default function FolderEditModal({ onClose }: FolderEditModalProps) {
  return (
    <Modal onClose={onClose} className="folder-add-modal">
      <h2>폴더 이름 변경</h2>
      <input type="text" placeholder="내용 입력" />
      <Button
        onClick={() => {
          console.log('추후추가');
        }}
      >
        변경하기
      </Button>
    </Modal>
  );
}
