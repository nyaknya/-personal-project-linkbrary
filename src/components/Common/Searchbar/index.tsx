import { useState } from 'react';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import useSearchStore from '../../../store/useSearchStore';

const cn = classNames.bind(styles);

export default function Searchbar() {
  const { setSearchTerm } = useSearchStore();
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchTerm(inputValue);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <section className="container">
      <div className={` ${cn('search-box')}`}>
        <input
          type="text"
          placeholder="링크를 검색해 보세요."
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <img src="/images/search.svg" alt="Search Icon" />
      </div>
    </section>
  );
}
