import Loading from '../../Common/Loading';
import styles from './FolderCategory.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface FolderCategoryProps {
  list: FolderCategoryData[] | null;
}

export default function FolderCategory({ list }: FolderCategoryProps) {
  if (!list) {
    return <Loading />;
  }

  return (
    <ul className={`container ${cn('folder-category')}`}>
      <li>전체</li>
      {list.map((listitem) => {
        return <li key={listitem.id}>{listitem.name}</li>;
      })}
    </ul>
  );
}
