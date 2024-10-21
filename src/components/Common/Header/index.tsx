import styles from './Header.module.scss';
import classNames from 'classnames';

const cn = classNames.bind(styles);

interface HedaerProps {
  isStiky?: boolean;
}

export default function Header({ isStiky = true }: HedaerProps) {
  return (
    <header>
      <div className={cn('container')}>테스트</div>
    </header>
  );
}
