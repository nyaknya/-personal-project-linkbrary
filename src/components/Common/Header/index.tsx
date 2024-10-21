import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button';

const cn = classNames.bind(styles);

interface HedaerProps {
  isStiky?: boolean;
}

export default function Header({ isStiky = true }: HedaerProps) {
  return (
    <header>
      <div className={cn('container')}>
        <img src="/images/logo.svg" alt="로고" />
        <Button>로그인</Button>
      </div>
    </header>
  );
}
