import styles from './UserProfile.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface UserProfileProps {
  name: string;
  email: string;
  profileImageSource: string;
}

export default function UserProfile({
  name,
  email,
  profileImageSource,
}: UserProfileProps) {
  return (
    <div className={cn('user-profile')}>
      <img src={profileImageSource} alt={name} />
      <span>{email}</span>
    </div>
  );
}
