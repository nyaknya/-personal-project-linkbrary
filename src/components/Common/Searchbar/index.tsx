import styles from './Search.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

export default function Searchbar() {
  return (
    <section className="container">
      <div className={` ${cn('search-box')}`}>
        <input type="text" placeholder="링크를 검색해 보세요." />
        <img src="/images/search.svg" alt="" />
      </div>
    </section>
  );
}
