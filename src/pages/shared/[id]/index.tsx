import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import Loading from "@/components/Common/Loading";
import Searchbar from "@/components/Common/Searchbar";
import SearchMessage from "@/components/Common/SearchMessage";
import CardList from "@/components/Shared/CardList";
import Titlebar from "@/components/Shared/Titlebar";
import useSearchStore from "@/store/useSearchStore";
import { FolderData, UserData, FolderLinksType } from "@/types";
import apiRequest from "@/utils/apiRequest";

export default function FolderPage() {
  const [folderData, setFolderData] = useState<FolderData | null>(null);
  const [ownerData, setOwnerData] = useState<UserData | null>(null);
  const [folderLinks, setFolderLinks] = useState<FolderLinksType[] | null>(
    null
  );
  const { searchTerm } = useSearchStore();
  const router = useRouter();
  const folderId = router.query.id;

  const fetchFolderData = async () => {
    try {
      const folderResponse = await apiRequest<{ data: FolderData[] }>({
        endpoint: `/api/folders/${folderId}`,
      });
      const folder = folderResponse.data[0];
      setFolderData(folder);

      if (folder) {
        const userResponse = await apiRequest<{ data: UserData[] }>({
          endpoint: `/api/users/${folder.user_id}`,
        });
        setOwnerData(userResponse.data[0]);
        fetchFolderLinks(folder.user_id);
      }
    } catch (error) {
      console.error(
        "폴더 및 사용자 데이터를 가져오는 중 오류가 발생했습니다:",
        error
      );
    }
  };

  const fetchFolderLinks = async (userId: number) => {
    try {
      if (!userId || !folderId) {
        console.error("userId 또는 folderId가 없습니다.");
        return;
      }

      const response = await apiRequest<{ data: FolderLinksType[] }>({
        endpoint: `/api/users/${userId}/links?folderId=${folderId}`,
      });
      setFolderLinks(response.data);
    } catch (error) {
      console.error("링크 데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    if (folderId) {
      fetchFolderData();
    }
  }, [folderId]);

  if (!folderData || !ownerData || !folderLinks) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <main>
        <Titlebar
          userImage={ownerData.image_source || ""}
          userName={ownerData.name || ""}
          folderName={folderData.name}
        />
        <Searchbar />
        {searchTerm && <SearchMessage />}
        <CardList data={folderLinks} />
      </main>
      <Footer />
    </>
  );
}
