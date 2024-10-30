import { useEffect, useState } from 'react';
import Footer from '../../components/Common/Footer';
import Header from '../../components/Common/Header';
import Searchbar from '../../components/Common/Searchbar';
import NotSavedLink from '../../components/Folder/NotSavedLink';
import Titlebar from '../../components/Folder/Titlebar';
import apiRequest from '../../utils/apiRequest';
import FolderCategory from '../../components/Folder/FolderCategory';

export default function FolderPage() {
  const [folderListData, setFolderListData] = useState<
    FolderCategoryData[] | null
  >(null);
  const [folderLinksData, setFolderLinksData] =
    useState<FolderLinksData | null>(null);

  const fetchFolderListData = async () => {
    try {
      const data = await apiRequest({ endpoint: '/api/users/1/folders' });
      setFolderListData(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFolderLinksData = async () => {
    try {
      const data = await apiRequest({ endpoint: '/api/users/1/links' });
      setFolderLinksData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    try {
      fetchFolderListData();
      fetchFolderLinksData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  console.log(folderListData);
  console.log(folderLinksData);

  return (
    <>
      <Header isSticky={false} />
      <Titlebar />
      <Searchbar />
      <FolderCategory list={folderListData} />
      <NotSavedLink />
      <Footer />
    </>
  );
}
