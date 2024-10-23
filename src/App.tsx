import { useEffect, useState } from 'react';
import Header from './components/Common/Header';
import Titlebar from './components/Shared/Titlebar';
import apiRequest from './utils/apiRequest';

function App() {
  const [folderData, setFolderData] = useState(null);

  const fetchFolderData = async () => {
    const data = await apiRequest({ endpoint: '/api/sample/user' });
    setFolderData(data);
  };

  useEffect(() => {
    try {
      fetchFolderData();
      console.log;
    } catch (error) {
      console.error(error);
    }
  }, []);

  if (!folderData) {
    return null;
  }

  return (
    <>
      <Header />
      <main>
        {/* <Titlebar
          userImage={folderData.folder.owner.profileImageSource}
          userName={folderData.folder.owner.name}
          folderName={folderData.folder.name}
        /> */}
      </main>
    </>
  );
}

export default App;
