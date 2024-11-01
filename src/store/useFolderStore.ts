import { create } from 'zustand';

// 상태 인터페이스 정의
interface FolderState {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

// Zustand 스토어 생성
const useFolderStore = create<FolderState>((set) => ({
  selectedCategory: '전체',
  setSelectedCategory: (category: string) =>
    set({ selectedCategory: category }),
}));

export default useFolderStore;
