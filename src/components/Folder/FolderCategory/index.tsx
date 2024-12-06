/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Loading from "@/components/Common/Loading";
import useModal from "@/hooks/useModal";
import { FolderCategoryData } from "@/types";

import styles from "./FolderCategory.module.scss";

const cn = classNames.bind(styles);

interface FolderCategoryProps {
  list: FolderCategoryData[] | null;
}

export default function FolderCategory({ list }: FolderCategoryProps) {
  const router = useRouter();

  if (!list) {
    return <Loading />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { openModal } = useModal();

  const handleAddClick = () => {
    openModal({ type: "folderAdd" });
  };

  const handleFolderClick = (folderId: number) => {
    router.push(`/folder/${folderId}`);
  };

  return (
    <section className={`container ${cn("folder-category-wrap")}`}>
      <ul className={cn("folder-category")}>
        <li className={router.pathname === "/folder" ? cn("active") : ""}>
          <Link href="/folder">전체</Link>
        </li>
        {list.map((listitem) => (
          <li
            key={listitem.id}
            className={
              router.asPath === `/folder/${listitem.id}` ? cn("active") : ""
            }
            onClick={() => handleFolderClick(listitem.id)}
          >
            {listitem.name}
          </li>
        ))}
      </ul>
      <div className={cn("folder-add")} onClick={handleAddClick}>
        <span>폴더 추가</span>
        <Image src="/images/add.svg" alt="폴더 추가" width={16} height={16} />
      </div>
    </section>
  );
}
