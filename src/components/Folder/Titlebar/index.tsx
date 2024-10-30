import Button from '../../Common/Button';
import styles from './Titlebar.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

export default function Titlebar() {
  return (
    <div className={cn('title-bar')}>
      <div className={cn('link-add-bar')}>
        <input type="text" placeholder="링크를 추가해 보세요" />
        <Button>추가하기</Button>
      </div>
    </div>
  );
}
