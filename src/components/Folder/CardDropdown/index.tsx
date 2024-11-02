import styles from './CardDropdown.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

export default function CardDropdown() {
  return (
    <div className={cn('kebab-more-box')}>
      <ul>
        <li>삭제하기</li>
        <li className={cn('add-folder')}>폴더에 추가</li>
      </ul>
    </div>
  );
}
