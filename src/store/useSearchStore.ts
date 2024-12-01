import { create } from 'zustand';

interface SearchState {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const useSearchStore = create<SearchState>((set) => ({
  searchTerm: '',
  setSearchTerm: (term: string) => set({ searchTerm: term }),
}));

export default useSearchStore;
