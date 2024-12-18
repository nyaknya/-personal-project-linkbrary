/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from "classnames/bind";

import useModal from "@/hooks/useModal";

import styles from "./CardDropdown.module.scss";

const cn = classNames.bind(styles);

interface CardDropdownProps {
  id: number;
  url: string;
}

export default function CardDropdown({ id, url }: CardDropdownProps) {
  const { openModal } = useModal();

  const handleDeleteClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    openModal({ type: "linkDelete", props: { id, linkUrl: url } });
  };

  const handleAddClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    openModal({ type: "linkFolderAdd", props: { linkUrl: url } });
  };
  return (
    <div className={cn("kebab-more-box")}>
      <ul>
        <li onClick={(e) => handleDeleteClick(e)}>삭제하기</li>
        <li className={cn("add-folder")} onClick={(e) => handleAddClick(e)}>
          폴더에 추가
        </li>
      </ul>
    </div>
  );
}
