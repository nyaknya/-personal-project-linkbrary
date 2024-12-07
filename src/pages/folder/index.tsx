import { useEffect, useState } from "react";

import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import Loading from "@/components/Common/Loading";
import Searchbar from "@/components/Common/Searchbar";
import SearchMessage from "@/components/Common/SearchMessage";
import CardList from "@/components/Folder/CardList";
import CardTitlebar from "@/components/Folder/CardTitlebar";
import FolderCategory from "@/components/Folder/FolderCategory";
import NotSavedLink from "@/components/Folder/NotSavedLink";
import Titlebar from "@/components/Folder/Titlebar";
import useSearchStore from "@/store/useSearchStore";
import useUserStore from "@/store/useUserStore";
import {
  FolderCategoryData,
  FolderLinksType,
  ApiFolderListResponse,
  ApiFolderLinksResponse,
} from "@/types";
import apiRequest from "@/utils/apiRequest";

export default function FolderPage() {
  const [folderListData, setFolderListData] = useState<
    FolderCategoryData[] | null
  >(null);
  const [folderLinksData, setFolderLinksData] = useState<
    FolderLinksType[] | null
  >(null);
  const { searchTerm } = useSearchStore();
  const { isUserIdSet } = useUserStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const folderList = await apiRequest<ApiFolderListResponse>({
          endpoint: `/sample/folders/1`, //샘플. 바꿔야함
        });
        setFolderListData(folderList.data.folder);

        const folderLinks = await apiRequest<ApiFolderLinksResponse>({
          endpoint: `/sample/links`, //샘플. 바꿔야함
        });
        setFolderLinksData(folderLinks.data.folder);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    };

    if (isUserIdSet) {
      fetchData();
    }
  }, [isUserIdSet]);

  if (!isUserIdSet || !folderLinksData) {
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
        <CardTitlebar folderName="전체" />
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
