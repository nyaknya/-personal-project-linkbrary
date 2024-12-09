import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import Loading from "@/components/Common/Loading";
import Searchbar from "@/components/Common/Searchbar";
import SearchMessage from "@/components/Common/SearchMessage";
import NotSavedLink from "@/components/Folder/NotSavedLink";
import CardList from "@/components/Shared/CardList";
import Titlebar from "@/components/Shared/Titlebar";
import useSearchStore from "@/store/useSearchStore";
import { FolderData, UserData, FolderLinksType } from "@/types";
import apiRequest from "@/utils/apiRequest";

export default function FolderPage() {
  const { searchTerm } = useSearchStore();
  const router = useRouter();
  const folderId = router.query.id;

  const {
    data: folderData,
    status: folderStatus,
    error: folderError,
  } = useQuery<FolderData[] | undefined>({
    queryKey: ["folderData", folderId],
    queryFn: async () => {
      return await apiRequest<FolderData[]>({
        endpoint: `/folders/${folderId}`,
      });
    },
    enabled: !!folderId,
  });

  const { data: ownerData, status: ownerStatus } = useQuery<
    UserData[] | undefined
  >({
    queryKey: ["ownerData", folderData?.[0]?.user_id],
    queryFn: async () => {
      return await apiRequest<UserData[]>({
        endpoint: `/users/${folderData?.[0]?.user_id}`,
      });
    },
    enabled: !!folderData?.[0]?.user_id,
  });

  const { data: folderLinks, status: linksStatus } = useQuery<
    FolderLinksType[] | undefined
  >({
    queryKey: ["folderLinks", folderId],
    queryFn: async () => {
      return await apiRequest<FolderLinksType[]>({
        endpoint: `/folders/${folderId}/links`,
      });
    },
    enabled: !!folderId,
  });

  if (folderStatus === "error" || ownerStatus === "error") {
    const error = folderError as { message?: string; status?: number };
    if (error?.status === 404) {
      return <p>폴더가 존재하지 않습니다.</p>;
    }
    return <p>폴더 데이터를 불러오는 중 오류가 발생했습니다.</p>;
  }

  if (folderStatus === "pending" || ownerStatus === "pending") {
    return <Loading />;
  }

  if (!folderData || folderData.length === 0 || !ownerData) {
    return <p>데이터를 불러오지 못했습니다.</p>;
  }

  return (
    <>
      <Header />
      <main>
        {folderData[0] && (
          <Titlebar
            userImage={ownerData[0]?.image_source || ""}
            userName={ownerData[0]?.name || ""}
            folderName={folderData[0]?.name || ""}
          />
        )}
        <Searchbar />
        {searchTerm && <SearchMessage />}

        {linksStatus === "pending" ? (
          <Loading />
        ) : folderLinks && folderLinks.length > 0 ? (
          <CardList data={folderLinks} />
        ) : (
          <NotSavedLink />
        )}
      </main>
      <Footer />
    </>
  );
}
