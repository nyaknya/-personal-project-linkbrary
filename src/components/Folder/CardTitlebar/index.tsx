import useFolderStore from '../../../store/useFolderStore';
import styles from './CardTitlebar.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

export default function CardTitlebar() {
  const { selectedCategory } = useFolderStore();
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
            <li>
              <img src="/images/edit.svg" alt="" />
              <span>이름 변경</span>
            </li>
            <li>
              <img src="/images/delete.svg" alt="" />
              <span>삭제</span>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}
