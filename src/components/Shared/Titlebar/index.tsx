import styles from './Titlebar.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface TitlebarProps {
  userImage: string;
  userName: string;
  folderName: string;
}

export default function Titlebar({
  userImage,
  userName,
  folderName,
}: TitlebarProps) {
  return (
    <div className={cn('title-bar')}>
      <div className={cn('image-box')}>
        <img src={userImage} alt="프로필 이미지" />
        <span>{userName}</span>
      </div>
      <h2>{folderName}</h2>
    </div>
  );
}
