import { useRouter } from "next/router";
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

export default function FolderDetailPage() {
  const [folderListData, setFolderListData] = useState<
    FolderCategoryData[] | null
  >(null);
  const [folderLinksData, setFolderLinksData] = useState<
    FolderLinksType[] | null
  >(null);
  const [folderName, setFolderName] = useState<string>("전체"); // 폴더 이름 상태 추가
  const { searchTerm } = useSearchStore();
  const { isUserIdSet } = useUserStore();
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const folderList = await apiRequest<ApiFolderListResponse>({
          endpoint: `/api/folders`,
        });
        setFolderListData(folderList.data.folder);

        // 폴더 이름 설정
        const currentFolder = folderList.data.folder.find(
          (folder) => folder.id === Number(id)
        );
        setFolderName(currentFolder ? currentFolder.name : "전체");

        const folderLinks = await apiRequest<ApiFolderLinksResponse>({
          endpoint: `/api/links?folderId=${id}`,
        });
        setFolderLinksData(folderLinks.data.folder);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    };

    if (isUserIdSet && id) {
      fetchData();
    }
  }, [isUserIdSet, id]);

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
        <CardTitlebar folderName={folderName} />
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
