import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/router";

import apiRequest from "@/utils/apiRequest";

import Modal from "../Modal";

interface FolderDeleteModalProps {
  onClose: () => void;
  folderId: string;
  folderName: string;
}

export default function FolderDeleteModal({
  onClose,
  folderName,
}: FolderDeleteModalProps) {
  const router = useRouter();
  const folderId = router.query.id;

  const deleteFolderMutation = useMutation({
    mutationFn: async () => {
      return await apiRequest({
        endpoint: `/folders/${folderId}`,
        method: "DELETE",
      });
    },
    onSuccess: () => {
      alert("폴더가 성공적으로 삭제되었습니다!");
      onClose();
      router.push("/folder");
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) {
        alert("잘못된 요청입니다. 다시 시도해주세요.");
      } else if (error.response?.status === 401) {
        alert("인증 오류: 다시 로그인해주세요.");
      } else if (error.response?.status === 403) {
        alert("권한 오류: 이 폴더를 삭제할 권한이 없습니다.");
      } else {
        alert("폴더 삭제 중 오류가 발생했습니다.");
      }
    },
  });

  const handleDeleteClick = () => {
    const confirmDelete = confirm(`"${folderName}" 폴더를 삭제하시겠습니까?`);
    if (!confirmDelete) return;

    deleteFolderMutation.mutate();
  };

  return (
    <Modal onClose={onClose} className="folder-delete-modal">
      <h2>폴더 삭제</h2>
      <p>{folderName}</p>
      <button
        onClick={handleDeleteClick}
        disabled={deleteFolderMutation.status === "pending"}
      >
        {deleteFolderMutation.status === "pending" ? "삭제 중..." : "삭제하기"}
      </button>
    </Modal>
  );
}
