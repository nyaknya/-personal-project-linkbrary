export interface LinkDataType {
  id: number;
  created_at?: Date | string;
  url: string;
  title: string;
  description?: string;
  image_source?: string;
}

export interface FolderLinksType {
  id: number;
  favorite: boolean;
  created_at: string;
  url: string;
  title: string;
  image_source?: string;
  description: string;
}

export interface FolderOwnerData {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface FolderData {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
}

export interface UserProfileData {
  id: number;
  name: string;
  image_source?: string;
  email: string;
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
  favorite: boolean;
  name: string;
  link_count: number;
}

export interface CardProps {
  link: LinkDataType;
}

export interface UserData {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}
