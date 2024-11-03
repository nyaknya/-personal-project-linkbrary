import useFolderStore from '../../../store/useFolderStore';
import styles from './CardTitlebar.module.scss';
import classNames from 'classnames/bind';
import useModal from '../../../hooks/useModal';
const cn = classNames.bind(styles);

export default function CardTitlebar() {
  const { selectedCategory } = useFolderStore();
  const { openModal } = useModal();

  const handleEditClick = () => {
    openModal({
      type: 'folderEdit',
    });
  };

  const handleDeleteClick = () => {
    openModal({
      type: 'folderDelete',
      props: { folderName: selectedCategory },
    });
  };

  return (
    <section className={`container ${cn('card-titlebar')}`}>
      <h2>{selectedCategory}</h2>
      {selectedCategory === '전체' ? null : (
        <div>
          <ul>
            <li>
              <img src="/images/share.svg" alt="" />
              <span>공유</span>
            </li>
            <li onClick={handleEditClick}>
              <img src="/images/edit.svg" alt="" />
              <span>이름 변경</span>
            </li>
            <li onClick={handleDeleteClick}>
              <img src="/images/delete.svg" alt="" />
              <span>삭제</span>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}
