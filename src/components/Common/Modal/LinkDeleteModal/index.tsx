import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import apiRequest from "@/utils/apiRequest";

import Modal from "../Modal";

interface LinkDeleteModalProps {
  id: number;
  onClose: () => void;
  linkUrl: string;
}

export default function LinkDeleteModal({
  id,
  onClose,
  linkUrl,
}: LinkDeleteModalProps) {
  const deleteLinkMutation = useMutation({
    mutationFn: async () => {
      return await apiRequest({
        endpoint: `/links/${id}`,
        method: "DELETE",
      });
    },
    onSuccess: () => {
      alert("링크가 성공적으로 삭제되었습니다!");
      onClose();
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) {
        alert("요청 오류: 링크 삭제를 확인해주세요.");
      } else if (error.response?.status === 401) {
        alert("인증 오류: 다시 로그인해주세요.");
      } else if (error.response?.status === 403) {
        alert("권한 오류: 이 링크를 삭제할 권한이 없습니다.");
      } else {
        alert("링크 삭제 중 오류가 발생했습니다.");
      }
    },
  });

  const handleDeleteClick = () => {
    const confirmDelete = confirm(`"${linkUrl}" 링크를 삭제하시겠습니까?`);
    if (!confirmDelete) return;

    deleteLinkMutation.mutate();
  };

  return (
    <Modal onClose={onClose} className="link-delete-modal">
      <h2>링크 삭제</h2>
      <p>{linkUrl} 링크를 삭제하시겠습니까?</p>
      <button
        onClick={handleDeleteClick}
        disabled={deleteLinkMutation.status === "pending"}
      >
        {deleteLinkMutation.status === "pending" ? "삭제 중..." : "삭제하기"}
      </button>
    </Modal>
  );
}
