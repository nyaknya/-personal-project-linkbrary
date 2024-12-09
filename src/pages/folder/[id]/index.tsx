import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

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
import { FolderCategoryData, FolderLinksType } from "@/types";
import apiRequest from "@/utils/apiRequest";

export default function FolderDetailPage() {
  const { searchTerm } = useSearchStore();
  const router = useRouter();
  const id = router.query.id;

  const { data: folderListData, isLoading: isFolderListLoading } = useQuery({
    queryKey: ["folderList"],
    queryFn: async () => {
      return await apiRequest<FolderCategoryData[]>({ endpoint: `/folders` });
    },
  });

  const { data: folderLinksData, isLoading: isFolderLinksLoading } = useQuery({
    queryKey: ["folderLinks", id],
    queryFn: async () => {
      return await apiRequest<FolderLinksType[]>({
        endpoint: `/folders/${id}/links`,
      });
    },
    enabled: !!id,
  });

  // 현재 폴더 이름 설정
  const folderName =
    folderListData?.find((folder) => folder.id === Number(id))?.name || "전체";

  if (isFolderListLoading || isFolderLinksLoading) {
    return <Loading />;
  }

  if (!folderLinksData) {
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
