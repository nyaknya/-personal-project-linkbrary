import { useCallback, useEffect, useState } from "react";

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
import useFolderStore from "@/store/useFolderStore";
import useSearchStore from "@/store/useSearchStore";
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
  const { selectedCategory, selectedCategoryId } = useFolderStore();
  const { searchTerm } = useSearchStore();

  const fetchData = useCallback(async () => {
    const folderList = await apiRequest<ApiFolderListResponse>({
      endpoint: "/api/folders",
    });
    setFolderListData(folderList.data.folder);

    const linksEndpoint =
      selectedCategory === "전체"
        ? "/api/users/1/links"
        : `/api/users/1/links?folderId=${selectedCategoryId}`;
    const folderLinks = await apiRequest<ApiFolderLinksResponse>({
      endpoint: linksEndpoint,
    });
    setFolderLinksData(folderLinks.data);
  }, [selectedCategory, selectedCategoryId]);

  useEffect(() => {
    fetchData();
  }, [selectedCategory, fetchData]);

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
