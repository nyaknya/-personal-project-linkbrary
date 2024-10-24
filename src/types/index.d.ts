interface SharedFolderLinksData {
  id: number;
  createdAt?: Date | string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
}

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

interface UserProfileData {
  email: string;
  id: number;
  name: string;
  profileImageSource?: string;
}

interface FolderUserData {
  auth_id?: string;
  created_at?: string;
  email: string;
  id: number;
  image_source?: string;
  name: string;
}

interface FolderFilterKeywordData {
  created_at: Date;
  favorite: boolean;
  id: number;
  link: { count: number };
  name: string;
  user_id: number;
}

type LinkDataType = FolderLinksData | SharedFolderLinksData;
