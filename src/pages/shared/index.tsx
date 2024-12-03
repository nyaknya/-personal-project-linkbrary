import { useEffect, useState } from "react";

import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import Loading from "@/components/Common/Loading";
import Searchbar from "@/components/Common/Searchbar";
import SearchMessage from "@/components/Common/SearchMessage";
import CardList from "@/components/Shared/CardList";
import Titlebar from "@/components/Shared/Titlebar";
import useSearchStore from "@/store/useSearchStore";
import { FolderData } from "@/types";
import apiRequest from "@/utils/apiRequest";

export default function FolderPage() {
  const [folderData, setFolderData] = useState<FolderData | null>(null);
  const { searchTerm } = useSearchStore();

  const fetchFolderData = async () => {
    try {
      const data = await apiRequest({ endpoint: "/api/sample/folder" });
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
        {searchTerm && <SearchMessage />}
        <CardList data={folderData.links} />
      </main>
      <Footer />
    </>
  );
}
