import styles from './SearchMessage.module.scss';
import useSearchStore from '../../../store/useSearchStore';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

export default function SearchMessage() {
  const { searchTerm } = useSearchStore();

  return (
    <div className="container">
      <h3 className={cn('search-keyword')}>
        <span>{searchTerm}</span>으로 검색한 결과입니다.
      </h3>
    </div>
  );
}
