import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button';
import apiRequest from '../../../utils/apiRequest';
import { useEffect, useState } from 'react';

const cn = classNames.bind(styles);

interface HedaerProps {
  isStiky?: boolean;
}

export default function Header({ isStiky = true }: HedaerProps) {
  const [userProfile, setUserProfile] = useState(null);
  const fetchUserData = async () => {
    const data = await apiRequest({ endpoint: '/api/sample/user' });
    setUserProfile(data);
  };

  useEffect(() => {
    fetchUserData();
  });

  // const { email, name, profileImageSource } = userProfile;

  return (
    <header>
      <div className={cn('container')}>
        <img src="/images/logo.svg" alt="로고" />
        {userProfile ? <span>있어여</span> : <Button>로그인</Button>}
      </div>
    </header>
  );
}
