import { useEffect, useState } from 'react';
import Header from './components/Common/Header';
import Titlebar from './components/Shared/Titlebar';
import apiRequest from './utils/apiRequest';

function App() {
  const [folderData, setFolderData] = useState<FolderData | null>(null);

  const fetchFolderData = async () => {
    try {
      const data = await apiRequest({ endpoint: '/api/sample/folder' });
      setFolderData(data.folder);
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
    return <span>Loading...</span>;
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
      </main>
    </>
  );
}

export default App;
