interface FolderLinksData {
  created_at?: Date;
  description: string;
  folder_id?: number;
  id: number;
  updated_at?: Date;
  image_source?: string;
  title: string;
  url: string;
}

interface FolderOwnerData {
  id: number;
  name: string;
  profileImageSource: string;
}

interface FolderData {
  count: number;
  id: number;
  links: SharedFolderLinksData[];
  name: string;
  owner: FolderOwnerData;
}
