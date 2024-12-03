/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from "classnames/bind";
import Image from "next/image";
import { useEffect, useState } from "react";

import { FolderCategoryData } from "@/types";
import apiRequest from "@/utils/apiRequest";

import Button from "../../Button";
import Modal from "../Modal";
import styles from "../Modal.module.scss";

const cn = classNames.bind(styles);

interface LinkFolderAddModalProps {
  onClose: () => void;
  linkUrl: string;
}

export default function LinkFolderAddModal({
  onClose,
  linkUrl,
}: LinkFolderAddModalProps) {
  const [folderListData, setFolderListData] = useState<
    FolderCategoryData[] | null
  >(null);
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);

  const fetchFolderListData = async () => {
    try {
      const data = await apiRequest({ endpoint: "/api/users/1/folders" });
      setFolderListData(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFolderListData();
  }, []);

  const handleFolderClick = (folderId: number) => {
    setSelectedFolderId(folderId);
  };

  return (
    <Modal onClose={onClose} className="link-folder-add-modal">
      <h2>폴더에 추가</h2>
      <p>{linkUrl}</p>
      <ul>
        {folderListData?.map((listitem) => (
          <li
            key={listitem.id}
            onClick={() => handleFolderClick(listitem.id)}
            className={cn(selectedFolderId === listitem.id ? "selected" : "")}
          >
            <div>
              <h3>{listitem.name}</h3>
              <span>{listitem.link.count}개 링크</span>
            </div>
            {selectedFolderId === listitem.id ? (
              <Image src="/images/check.svg" alt="체크 아이콘" />
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
      <Button
        onClick={() => {
          console.log("추후추가");
        }}
      >
        추가하기
      </Button>
    </Modal>
  );
}
