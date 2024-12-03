import classNames from "classnames/bind";
import Image from "next/image";
import { useState } from "react";

import styles from "./Search.module.scss";
import useSearchStore from "../../../store/useSearchStore";

const cn = classNames.bind(styles);

export default function Searchbar() {
  const { searchTerm, setSearchTerm } = useSearchStore();
  const [inputValue, setInputValue] = useState("");

  const handleSearchClear = () => {
    setSearchTerm("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchTerm(inputValue);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <section className="container">
      <div className={cn("search-box")}>
        <input
          type="text"
          placeholder="링크를 검색해 보세요."
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <Image
          src={searchTerm ? "/images/searchActive.svg" : "/images/search.svg"}
          alt="Search Icon"
          className={cn("search-icon", searchTerm ? "active" : null)}
          width={16}
          height={16}
        />
        {searchTerm && (
          <Image
            src="/images/close.svg"
            alt="검색어 비우기"
            className={cn("search-clear")}
            onClick={handleSearchClear}
            width={24}
            height={24}
          />
        )}
      </div>
    </section>
  );
}
