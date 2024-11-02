import { useEffect, useState } from 'react';
import Footer from '../../components/Common/Footer';
import Header from '../../components/Common/Header';
import Searchbar from '../../components/Common/Searchbar';
import NotSavedLink from '../../components/Folder/NotSavedLink';
import Titlebar from '../../components/Folder/Titlebar';
import apiRequest from '../../utils/apiRequest';
import FolderCategory from '../../components/Folder/FolderCategory';
import useFolderStore from '../../store/useFolderStore';
import CardList from '../../components/Common/CardList';
import Loading from '../../components/Common/Loading';

export default function FolderPage() {
  const [folderListData, setFolderListData] = useState<
    FolderCategoryData[] | null
  >(null);
  const [folderLinksData, setFolderLinksData] = useState<
    FolderLinksData[] | null
  >(null);
  const { selectedCategory, selectedCategoryId } = useFolderStore();

  const fetchFolderListData = async () => {
    try {
      const data = await apiRequest({ endpoint: '/api/users/1/folders' });
      setFolderListData(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFolderAllLinksData = async () => {
    try {
      const data = await apiRequest({ endpoint: '/api/users/1/links' });
      setFolderLinksData(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFolderEachLinksData = async () => {
    try {
      const data = await apiRequest({
        endpoint: `/api/users/1/links?folderId=${selectedCategoryId}`,
      });
      setFolderLinksData(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFolderListData();
    fetchFolderAllLinksData();
  }, []);

  useEffect(() => {
    if (selectedCategory === '전체') {
      fetchFolderAllLinksData();
    } else {
      fetchFolderEachLinksData();
    }
  }, [selectedCategory]);

  if (!folderLinksData) {
    return <Loading />;
  }

  return (
    <>
      <Header isSticky={false} />
      <Titlebar />
      <Searchbar />
      <FolderCategory list={folderListData} />
      {folderLinksData.length > 0 ? (
        <CardList data={folderLinksData} />
      ) : (
        <NotSavedLink />
      )}
      <Footer />
    </>
  );
}
