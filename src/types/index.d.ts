interface LinkDataType {
  id: number;
  createdAt?: Date | string;
  url: string;
  title: string;
  description?: string;
  imageSource?: string;
}

interface FolderOwnerData {
  id: number;
  name: string;
  profileImageSource: string;
}

interface FolderData {
  count: number;
  id: number;
  links: LinkDataType[]; // LinkDataType 사용
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

interface FolderCategoryData {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}
