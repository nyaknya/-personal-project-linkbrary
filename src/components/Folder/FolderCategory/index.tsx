/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from "classnames/bind";
import Image from "next/image";

import Loading from "@/components/Common/Loading";
import useModal from "@/hooks/useModal";
import useFolderStore from "@/store/useFolderStore";
import { FolderCategoryData } from "@/types";

import styles from "./FolderCategory.module.scss";

const cn = classNames.bind(styles);

interface FolderCategoryProps {
  list: FolderCategoryData[] | null;
}

export default function FolderCategory({ list }: FolderCategoryProps) {
  const { selectedCategory, setSelectedCategory, setSelectedCategoryId } =
    useFolderStore();

  if (!list) {
    return <Loading />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { openModal } = useModal();

  const handleAddClick = () => {
    openModal({ type: "folderAdd" });
  };

  return (
    <section className={`container ${cn("folder-category-wrap")}`}>
      <ul className={cn("folder-category")}>
        <li
          className={selectedCategory === "전체" ? cn("active") : ""}
          onClick={() => {
            setSelectedCategory("전체");
            setSelectedCategoryId(null);
          }}
        >
          전체
        </li>
        {list.map((listitem) => (
          <li
            key={listitem.id}
            className={selectedCategory === listitem.name ? cn("active") : ""}
            onClick={() => {
              setSelectedCategory(listitem.name);
              setSelectedCategoryId(listitem.id);
            }}
          >
            {listitem.name}
          </li>
        ))}
      </ul>
      <div className={cn("folder-add")} onClick={handleAddClick}>
        <span>폴더 추가</span>
        <Image src="/images/add.svg" alt="폴더 추가" />
      </div>
    </section>
  );
}
