/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from "next/image";

import useFolderStore from "@/store/useFolderStore";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { useKakaoSdk } from "@/utils/useKakaoSdk";

import Modal from "../Modal";

interface FolderShareModalProps {
  onClose: () => void;
  folderName: string;
}

export default function FolderShareModal({
  onClose,
  folderName,
}: FolderShareModalProps) {
  const { selectedCategoryId } = useFolderStore();
  const { shareKakao } = useKakaoSdk();

  const KAKAO_SHARE_DATA = {
    title: "Linkbrary",
    description: "링크를 저장하고 공유하는 가장 쉬운 방법",
    imageUrl:
      "https://codeit-frontend.codeit.com/static/images/brand/og_tag.png",
  };

  const shareLink = `${window.location.origin}/shared?user=1&folder=${selectedCategoryId}`;

  const handleKakaoClick = () => {
    shareKakao({ url: shareLink, ...KAKAO_SHARE_DATA });
  };
  const handleFacebookClick = () =>
    window.open(`http://www.facebook.com/sharer.php?u=${shareLink}`);
  const handleLinkCopyClick = () => copyToClipboard(shareLink);

  return (
    <Modal onClose={onClose} className="folder-share-modal">
      <h2>폴더 이름 변경</h2>
      <p>{folderName}</p>
      <ul>
        <li onClick={handleKakaoClick}>
          <Image
            src="/images/kakaoShare.svg"
            alt="카카오 공유하기"
            width={42}
            height={42}
          />
          <span>카카오톡</span>
        </li>
        <li onClick={handleFacebookClick}>
          <Image
            src="/images/facebookShare.svg"
            alt="페이스북 공유하기"
            width={42}
            height={42}
          />
          <span>페이스북</span>
        </li>
        <li onClick={handleLinkCopyClick}>
          <Image
            src="/images/linkShare.svg"
            alt="링크 공유하기"
            width={42}
            height={42}
          />
          <span>링크 복사</span>
        </li>
      </ul>
    </Modal>
  );
}
