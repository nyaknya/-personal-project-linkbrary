import { useEffect, useState } from 'react';
import Footer from '../../components/Common/Footer';
import Header from '../../components/Common/Header';
import Searchbar from '../../components/Common/Searchbar';
import NotSavedLink from '../../components/Folder/NotSavedLink';
import Titlebar from '../../components/Folder/Titlebar';
import apiRequest from '../../utils/apiRequest';
import FolderCategory from '../../components/Folder/FolderCategory';
import useFolderStore from '../../store/useFolderStore';
import CardList from '../../components/Folder/CardList';
import CardTitlebar from '../../components/Folder/CardTitlebar';
import Loading from '../../components/Common/Loading';
import { FolderCategoryData, FolderLinksType } from '../../types';
import useSearchStore from '../../store/useSearchStore';
import SearchMessage from '../../components/Common/SearchMessage';

export default function FolderPage() {
  const [folderListData, setFolderListData] = useState<
    FolderCategoryData[] | null
  >(null);
  const [folderLinksData, setFolderLinksData] = useState<
    FolderLinksType[] | null
  >(null);
  const { selectedCategory, selectedCategoryId } = useFolderStore();
  const { searchTerm } = useSearchStore();

  const fetchData = async () => {
    try {
      const folderList = await apiRequest({ endpoint: '/api/users/1/folders' });
      setFolderListData(folderList.data);

      const linksEndpoint =
        selectedCategory === '전체'
          ? '/api/users/1/links'
          : `/api/users/1/links?folderId=${selectedCategoryId}`;
      const folderLinks = await apiRequest({ endpoint: linksEndpoint });
      setFolderLinksData(folderLinks.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategory]);

  if (!folderLinksData) {
    return <Loading />;
  }

  return (
    <>
      <Header isSticky={false} />
      <main>
        <Titlebar />
        <Searchbar />
        {searchTerm && <SearchMessage />}
        <FolderCategory list={folderListData} />
        <CardTitlebar />
        {folderLinksData.length > 0 ? (
          <CardList data={folderLinksData} />
        ) : (
          <NotSavedLink />
        )}
      </main>

      <Footer />
    </>
  );
}
