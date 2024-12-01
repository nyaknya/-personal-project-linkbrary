export interface LinkDataType {
  id: number;
  createdAt?: Date | string;
  url: string;
  title: string;
  description?: string;
  imageSource?: string;
}

export interface FolderLinksType {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string;
  description: string;
  image_source?: string;
  folder_id: number;
}

export interface FolderOwnerData {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface FolderData {
  count: number;
  id: number;
  links: LinkDataType[];
  name: string;
  owner: FolderOwnerData;
}

export interface UserProfileData {
  email: string;
  id: number;
  name: string;
  profileImageSource?: string;
}

export interface FolderUserData {
  auth_id?: string;
  created_at?: string;
  email: string;
  id: number;
  image_source?: string;
  name: string;
}

export interface FolderCategoryData {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}

export interface CardProps {
  link: LinkDataType;
}
