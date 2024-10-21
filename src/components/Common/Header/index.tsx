import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button';
import apiRequest from '../../../utils/apiRequest';
import UserProfile from './UserProfile';
import { useEffect, useState } from 'react';

const cn = classNames.bind(styles);

export default function Header() {
  const [userProfile, setUserProfile] = useState(null);
  const fetchUserData = async () => {
    const data = await apiRequest({ endpoint: '/api/sample/user' });
    setUserProfile(data);
  };

  useEffect(() => {
    fetchUserData();
  });

  if (!userProfile) {
    return <span>Loading...</span>;
  }
  const { name, email, profileImageSource } = userProfile;

  return (
    <header>
      <div className={cn('container')}>
        <img src="/images/logo.svg" alt="로고" />
        {userProfile ? (
          <UserProfile
            name={name}
            email={email}
            profileImageSource={profileImageSource}
          />
        ) : (
          <Button>로그인</Button>
        )}
      </div>
    </header>
  );
}
