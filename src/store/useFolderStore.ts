import { create } from 'zustand';

interface FolderState {
  selectedCategory: string;
  selectedCategoryId: number | null;
  setSelectedCategory: (category: string) => void;
  setSelectedCategoryId: (id: number | null) => void;
}

const useFolderStore = create<FolderState>((set) => ({
  selectedCategory: '전체',
  selectedCategoryId: null,
  selectedCategoryLinkCount: null,
  setSelectedCategory: (category: string) =>
    set({ selectedCategory: category }),
  setSelectedCategoryId: (id: number | null) => set({ selectedCategoryId: id }),
}));

export default useFolderStore;
