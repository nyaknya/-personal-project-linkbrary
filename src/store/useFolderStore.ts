import { create } from 'zustand';

interface FolderState {
  selectedCategory: string;
  selectedCategoryId: number | null;
  selectedCategoryLinkCount: number | null;
  setSelectedCategory: (category: string) => void;
  setSelectedCategoryId: (id: number | null) => void;
  setSelectedCategoryLinkCount: (count: number | null) => void;
}

const useFolderStore = create<FolderState>((set) => ({
  selectedCategory: '전체',
  selectedCategoryId: null,
  selectedCategoryLinkCount: null,
  setSelectedCategory: (category: string) =>
    set({ selectedCategory: category }),
  setSelectedCategoryId: (id: number | null) => set({ selectedCategoryId: id }),
  setSelectedCategoryLinkCount: (count: number | null) =>
    set({ selectedCategoryLinkCount: count }),
}));

export default useFolderStore;
