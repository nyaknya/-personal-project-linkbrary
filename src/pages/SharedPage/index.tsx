import { useEffect, useState } from 'react';
import Header from '../../components/Common/Header';
import Titlebar from '../../components/Shared/Titlebar';
import Searchbar from '../../components/Common/Searchbar';
import apiRequest from '../../utils/apiRequest';
import CardList from '../../components/Folder/CardList';
import Footer from '../../components/Common/Footer';
import Loading from '../../components/Common/Loading';

export default function SharedPage() {
  const [folderData, setFolderData] = useState<FolderData | null>(null);

  const fetchFolderData = async () => {
    try {
      const data = await apiRequest({ endpoint: '/api/sample/folder' });
      setFolderData(data.folder);
      console.log(data.folder);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    try {
      fetchFolderData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  if (!folderData) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <main>
        <Titlebar
          userImage={folderData.owner.profileImageSource}
          userName={folderData.owner.name}
          folderName={folderData.name}
        />
        <Searchbar />
        <CardList data={folderData.links} />
        <Footer />
      </main>
    </>
  );
}
