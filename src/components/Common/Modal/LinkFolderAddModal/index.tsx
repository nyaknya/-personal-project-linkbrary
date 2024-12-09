/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useQuery } from "@tanstack/react-query";
import classNames from "classnames/bind";
import Image from "next/image";
import { useState } from "react";

import Loading from "@/components/Common/Loading";
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
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);

  const { data: folderListData, isLoading: isFolderListLoading } = useQuery<
    FolderCategoryData[]
  >({
    queryKey: ["folderList"],
    queryFn: async () => {
      return await apiRequest<FolderCategoryData[]>({ endpoint: `/folders` });
    },
  });

  const handleFolderClick = (folderId: number) => {
    setSelectedFolderId(folderId);
  };

  console.log(folderListData);

  return (
    <Modal onClose={onClose} className="link-folder-add-modal">
      <h2>폴더에 추가</h2>
      <p>{linkUrl}</p>

      {isFolderListLoading ? (
        <Loading />
      ) : (
        <ul>
          {folderListData?.map((listitem) => (
            <li
              key={listitem.id}
              onClick={() => handleFolderClick(listitem.id)}
              className={cn(selectedFolderId === listitem.id ? "selected" : "")}
            >
              <div>
                <h3>{listitem.name}</h3>
                <span>{listitem.link_count}개 링크</span>
              </div>
              {selectedFolderId === listitem.id && (
                <Image src="/images/check.svg" alt="체크 아이콘" />
              )}
            </li>
          ))}
        </ul>
      )}

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
