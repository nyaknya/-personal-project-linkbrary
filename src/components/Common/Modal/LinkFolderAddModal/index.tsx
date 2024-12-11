/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useQuery, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
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

  const addLinkMutation = useMutation({
    mutationFn: async () => {
      if (!selectedFolderId || !linkUrl) {
        throw new Error("폴더 ID와 링크 URL이 필요합니다.");
      }
      return await apiRequest({
        endpoint: `/links`,
        method: "POST",
        body: {
          url: linkUrl,
          folderId: selectedFolderId,
        },
      });
    },
    onSuccess: () => {
      alert("링크가 성공적으로 추가되었습니다!");
      onClose();
    },
    onError: (error: AxiosError) => {
      console.error("API 요청 오류:", error.response);
      if (error.response?.status === 400) {
        alert("요청 오류: 입력값을 확인해주세요.");
      } else if (error.response?.status === 401) {
        alert("인증 오류: 다시 로그인해주세요.");
      } else if (error.response?.status === 403) {
        alert("권한 오류: 이 작업을 수행할 권한이 없습니다.");
      } else {
        alert("링크 추가 중 오류가 발생했습니다.");
      }
    },
  });

  const handleFolderClick = (folderId: number) => {
    setSelectedFolderId(folderId);
  };

  const handleAddLink = () => {
    if (!selectedFolderId) {
      alert("폴더를 선택해주세요.");
      return;
    }
    addLinkMutation.mutate();
  };

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
                <Image
                  src="/images/check.svg"
                  alt="체크 아이콘"
                  width={14}
                  height={14}
                />
              )}
            </li>
          ))}
        </ul>
      )}

      <Button
        onClick={handleAddLink}
        disabled={addLinkMutation.status === "pending"}
      >
        {addLinkMutation.status === "pending" ? "추가 중..." : "추가하기"}
      </Button>
    </Modal>
  );
}
