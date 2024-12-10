import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";

import apiRequest from "@/utils/apiRequest";

import Button from "../../Button";
import Modal from "../Modal";

interface FolderAddModalProps {
  onClose: () => void;
}

export default function FolderAddModal({ onClose }: FolderAddModalProps) {
  const [folderName, setFolderName] = useState("");

  const createFolderMutation = useMutation({
    mutationFn: async () => {
      return await apiRequest({
        endpoint: `/folders`,
        method: "POST",
        body: { name: folderName },
      });
    },
    onSuccess: () => {
      alert("폴더가 성공적으로 생성되었습니다!");
      setFolderName("");
      onClose();
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) {
        alert("요청 오류: 폴더 이름을 확인해주세요.");
      } else if (error.response?.status === 401) {
        alert("인증 오류: 다시 로그인해주세요.");
      } else if (error.response?.status === 403) {
        alert("권한 오류: 이 작업을 수행할 수 없습니다.");
      } else {
        alert("폴더 생성 중 오류가 발생했습니다.");
      }
    },
  });

  const handleCreateClick = () => {
    if (!folderName.trim()) {
      alert("폴더 이름을 입력해주세요.");
      return;
    }
    createFolderMutation.mutate();
  };

  return (
    <Modal onClose={onClose} className="folder-add-modal">
      <h2>폴더 추가</h2>
      <input
        type="text"
        placeholder="폴더 이름 입력"
        value={folderName}
        onChange={(e) => setFolderName(e.target.value)}
      />
      <Button
        onClick={handleCreateClick}
        disabled={createFolderMutation.status === "pending"}
      >
        {createFolderMutation.status === "pending" ? "생성 중..." : "추가하기"}
      </Button>
    </Modal>
  );
}
