import { useQuery } from "@tanstack/react-query";

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
import { useRedirectIfNotAuthenticated } from "@/hooks/useRedirectIfNotAuthenticated";
import useSearchStore from "@/store/useSearchStore";
import { FolderCategoryData, FolderLinksType } from "@/types";
import apiRequest from "@/utils/apiRequest";

export default function FolderPage() {
  useRedirectIfNotAuthenticated();
  const { searchTerm } = useSearchStore();

  const { data: folderListData, isLoading: isFolderListLoading } = useQuery<
    FolderCategoryData[]
  >({
    queryKey: ["folderList"],
    queryFn: async () => {
      return await apiRequest<FolderCategoryData[]>({ endpoint: `/folders` });
    },
  });

  const { data: folderLinksData, isLoading: isFolderLinksLoading } = useQuery<
    FolderLinksType[]
  >({
    queryKey: ["folderLinks"],
    queryFn: async () => {
      return await apiRequest<FolderLinksType[]>({ endpoint: `/links` });
    },
  });

  if (isFolderListLoading || isFolderLinksLoading) {
    return <Loading />;
  }

  if (!folderLinksData || !folderListData) {
    return <p>데이터를 불러오지 못했습니다.</p>;
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
