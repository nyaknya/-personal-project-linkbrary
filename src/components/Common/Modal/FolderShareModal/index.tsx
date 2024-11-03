import Button from '../../Button';
import Modal from '../Modal';

interface FolderShareModalProps {
  onClose: () => void;
  folderName: string;
}

export default function FolderShareModal({
  onClose,
  folderName,
}: FolderShareModalProps) {
  return (
    <Modal onClose={onClose} className="folder-share-modal">
      <h2>폴더 이름 변경</h2>
      <p>{folderName}</p>
      <ul>
        <li>
          <img src="/images/kakaoShare.svg" alt="카카오 공유하기" />
          <span>카카오톡</span>
        </li>
        <li>
          <img src="/images/facebookShare.svg" alt="페이스북 공유하기" />
          <span>페이스북</span>
        </li>
        <li>
          <img src="/images/linkShare.svg" alt="링크 공유하기" />
          <span>링크 복사</span>
        </li>
      </ul>
    </Modal>
  );
}
