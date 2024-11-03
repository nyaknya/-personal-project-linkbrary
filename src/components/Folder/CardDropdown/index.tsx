import styles from './CardDropdown.module.scss';
import classNames from 'classnames/bind';
import useModal from '../../../hooks/useModal';
const cn = classNames.bind(styles);

export default function CardDropdown() {
  const { openModal } = useModal();

  const handleAddClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    openModal({ type: 'folderAdd' });
  };
  return (
    <div className={cn('kebab-more-box')}>
      <ul>
        <li>삭제하기</li>
        <li className={cn('add-folder')} onClick={(e) => handleAddClick(e)}>
          폴더에 추가
        </li>
      </ul>
    </div>
  );
}
