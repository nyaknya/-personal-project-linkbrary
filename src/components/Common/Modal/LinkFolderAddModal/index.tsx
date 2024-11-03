import Button from '../../Button';
import Modal from '../Modal';

interface LinkFolderAddModalProps {
  onClose: () => void;
  linkUrl: string;
}

export default function LinkFolderAddModal({
  onClose,
  linkUrl,
}: LinkFolderAddModalProps) {
  return (
    <Modal onClose={onClose} className="link-folder-add-modal">
      <h2>폴더에 추가</h2>
      <p>{linkUrl}</p>
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
