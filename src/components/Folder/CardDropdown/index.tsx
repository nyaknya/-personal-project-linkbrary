import styles from './CardDropdown.module.scss';
import classNames from 'classnames/bind';
import useModal from '../../../hooks/useModal';
const cn = classNames.bind(styles);

interface CardDropdownProps {
  url: string;
}

export default function CardDropdown({ url }: CardDropdownProps) {
  const { openModal } = useModal();

  const handleDeleteClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    openModal({ type: 'linkDelete', props: { linkUrl: url } });
  };

  const handleAddClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    openModal({ type: 'folderAdd' });
  };
  return (
    <div className={cn('kebab-more-box')}>
      <ul>
        <li onClick={(e) => handleDeleteClick(e)}>삭제하기</li>
        <li className={cn('add-folder')} onClick={(e) => handleAddClick(e)}>
          폴더에 추가
        </li>
      </ul>
    </div>
  );
}
