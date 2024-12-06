import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import Loading from "@/components/Common/Loading";
import Searchbar from "@/components/Common/Searchbar";
import SearchMessage from "@/components/Common/SearchMessage";
import Titlebar from "@/components/Shared/Titlebar";
import useSearchStore from "@/store/useSearchStore";
import { FolderData, UserData } from "@/types";
import apiRequest from "@/utils/apiRequest";

export default function FolderPage() {
  const [folderData, setFolderData] = useState<FolderData | null>(null);
  const [ownerData, setOwnerData] = useState<UserData | null>(null); // UserData 타입 수정
  const { searchTerm } = useSearchStore();
  const router = useRouter();
  const folderId = router.query.id;

  const fetchFolderData = async () => {
    try {
      const response = await apiRequest<{ data: FolderData[] }>({
        endpoint: `/api/folders/${folderId}`,
      });
      const folder = response.data[0];
      setFolderData(folder);

      if (folder) {
        const userResponse = await apiRequest<{ data: UserData[] }>({
          endpoint: `/api/users/${folder.user_id}`,
        });
        setOwnerData(userResponse.data[0]);
      }
    } catch (error) {
      console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    if (folderId) {
      fetchFolderData();
    }
  }, [folderId]);

  if (!folderData || !ownerData) {
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
        {/* <CardList data={folderData.links || []} /> */}
      </main>
      <Footer />
    </>
  );
}
