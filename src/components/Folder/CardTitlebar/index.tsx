import useFolderStore from '../../../store/useFolderStore';
import styles from './CardTitlebar.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

export default function CardTitlebar() {
  const { selectedCategory } = useFolderStore();
  return (
    <div className={cn('card-titlebar')}>
      <h2>{selectedCategory}</h2>
    </div>
  );
}
