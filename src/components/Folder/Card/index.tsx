import styles from './Card.module.scss';
import classNames from 'classnames/bind';
import sliceDate from '../../../utils/sliceDate';
import getElapsedTime from '../../../utils/getElapsedTime';
import { FolderLinksType } from '../../../types';
import CardDropdown from '../CardDropdown';
import { useRef, useState } from 'react';
import useOutSideClick from '../../../hooks/useOutSideClick';

const cn = classNames.bind(styles);

interface CardProps {
  link: FolderLinksType;
}

export default function Card({ link }: CardProps) {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { url, image_source, title, description, created_at } = link;
  const postDate = sliceDate(created_at);
  const getTimeAgo = getElapsedTime(created_at);

  const handleSrc =
    image_source && image_source.trim() !== ''
      ? image_source
      : 'images/defaultimg.png';

  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    event.currentTarget.src = 'images/defaultimg.png';
  };

  const handleToggleDropdown = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setToggleDropdown((prev) => !prev);
  };

  useOutSideClick({
    ref: dropdownRef,
    callback: () => setToggleDropdown(false),
  });

  return (
    <a href={url} className={cn('card')} target="blank">
      {toggleDropdown && (
        <div ref={dropdownRef}>
          <CardDropdown />
        </div>
      )}
      <img
        src="/images/star.svg"
        alt="즐겨찾기"
        className={cn('bookmark-icon')}
      />
      <div className={cn('image-box')}>
        <img src={handleSrc} onError={handleImageError} alt={title} />
      </div>
      <div className={cn('card-content')}>
        <span className={cn('time-stamp')}>
          {getTimeAgo}{' '}
          <img
            src="/images/kebab.svg"
            alt="케밥 버튼"
            onClick={handleToggleDropdown}
          />
        </span>
        <p>{description}</p>
        <span className={cn('post-date')}>{postDate}</span>
      </div>
    </a>
  );
}
