import useFolderStore from '../../../store/useFolderStore';
import styles from './CardTitlebar.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

export default function CardTitlebar() {
  const { selectedCategory } = useFolderStore();
  return (
    <section className={`container ${cn('card-titlebar')}`}>
      <h2>{selectedCategory}</h2>
      {selectedCategory === '전체' ? null : <div></div>}
    </section>
  );
}
