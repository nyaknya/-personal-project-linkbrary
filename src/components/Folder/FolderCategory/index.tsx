import useFolderStore from '../../../store/useFolderStore';
import { FolderCategoryData } from '../../../types';
import Loading from '../../Common/Loading';
import styles from './FolderCategory.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface FolderCategoryProps {
  list: FolderCategoryData[] | null;
}

export default function FolderCategory({ list }: FolderCategoryProps) {
  const { selectedCategory, setSelectedCategory, setSelectedCategoryId } =
    useFolderStore();

  if (!list) {
    return <Loading />;
  }

  return (
    <section>
      <ul className={`container ${cn('folder-category')}`}>
        <li
          className={selectedCategory === '전체' ? cn('active') : ''}
          onClick={() => {
            setSelectedCategory('전체');
            setSelectedCategoryId(null);
          }}
        >
          전체
        </li>
        {list.map((listitem) => (
          <li
            key={listitem.id}
            className={selectedCategory === listitem.name ? cn('active') : ''}
            onClick={() => {
              setSelectedCategory(listitem.name);
              setSelectedCategoryId(listitem.id);
            }}
          >
            {listitem.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
