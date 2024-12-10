import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

import apiRequest from "@/utils/apiRequest";

import Button from "../../Button";
import Modal from "../Modal";

interface FolderEditModalProps {
  onClose: () => void;
}

export default function FolderEditModal({ onClose }: FolderEditModalProps) {
  const router = useRouter();
  const folderId = router.query.id;

  const [newFolderName, setNewFolderName] = useState("");

  const updateFolderNameMutation = useMutation({
    mutationFn: async () => {
      return await apiRequest({
        endpoint: `/folders/${folderId}`,
        method: "PUT",
        body: { name: newFolderName },
      });
    },
    onSuccess: () => {
      alert("폴더 이름이 성공적으로 변경되었습니다!");
      onClose();
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) {
        alert("잘못된 요청입니다. 폴더 이름을 확인해주세요.");
      } else if (error.response?.status === 401) {
        alert("인증 오류: 다시 로그인해주세요.");
      } else if (error.response?.status === 403) {
        alert("권한 오류: 이 폴더를 수정할 권한이 없습니다.");
      } else {
        alert("폴더 이름 변경 중 오류가 발생했습니다.");
      }
    },
  });

  const handleUpdateClick = () => {
    if (!newFolderName.trim()) {
      alert("폴더 이름을 입력해주세요.");
      return;
    }
    if (!folderId) {
      alert("폴더 ID가 유효하지 않습니다.");
      return;
    }
    updateFolderNameMutation.mutate();
  };

  return (
    <Modal onClose={onClose} className="folder-add-modal">
      <h2>폴더 이름 변경</h2>
      <input
        type="text"
        placeholder="새 폴더 이름 입력"
        value={newFolderName}
        onChange={(e) => setNewFolderName(e.target.value)}
      />
      <Button
        onClick={handleUpdateClick}
        disabled={updateFolderNameMutation.status === "pending"}
      >
        {updateFolderNameMutation.status === "pending"
          ? "변경 중..."
          : "변경하기"}
      </Button>
    </Modal>
  );
}
