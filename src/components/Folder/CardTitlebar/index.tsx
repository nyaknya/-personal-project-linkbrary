/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from "classnames/bind";
import Image from "next/image";

import useModal from "@/hooks/useModal";
import useFolderStore from "@/store/useFolderStore";

import styles from "./CardTitlebar.module.scss";

const cn = classNames.bind(styles);

export default function CardTitlebar() {
  const { selectedCategory } = useFolderStore();
  const { openModal } = useModal();

  const handleShareClick = () => {
    openModal({
      type: "folderShare",
      props: { folderName: selectedCategory },
    });
  };

  const handleEditClick = () => {
    openModal({
      type: "folderEdit",
    });
  };

  const handleDeleteClick = () => {
    openModal({
      type: "folderDelete",
      props: { folderName: selectedCategory },
    });
  };

  return (
    <section className={`container ${cn("card-titlebar")}`}>
      <h2>{selectedCategory}</h2>
      {selectedCategory === "전체" ? null : (
        <div>
          <ul>
            <li onClick={handleShareClick}>
              <Image src="/images/share.svg" alt="공유 아이콘" />
              <span>공유</span>
            </li>
            <li onClick={handleEditClick}>
              <Image src="/images/edit.svg" alt="이름 변경 아이콘" />
              <span>이름 변경</span>
            </li>
            <li onClick={handleDeleteClick}>
              <Image src="/images/delete.svg" alt="삭제 아이콘" />
              <span>삭제</span>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}
