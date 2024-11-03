import styles from './Card.module.scss';
import classNames from 'classnames/bind';
import sliceDate from '../../../utils/sliceDate';
import getElapsedTime from '../../../utils/getElapsedTime';
import { FolderLinksType } from '../../../types';
import CardDropdown from '../CardDropdown';
import { useRef } from 'react';
import useOutSideClick from '../../../hooks/useOutSideClick';

const cn = classNames.bind(styles);

interface CardProps {
  link: FolderLinksType;
  isOpen: boolean;
  onToggleDropdown: () => void;
}

export default function Card({ link, isOpen, onToggleDropdown }: CardProps) {
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

  useOutSideClick({
    ref: dropdownRef,
    callback: () => {
      if (isOpen) onToggleDropdown();
    },
  });

  return (
    <a href={url} className={cn('card')} target="blank">
      {isOpen && (
        <div ref={dropdownRef}>
          <CardDropdown url={url} />
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
          {getTimeAgo}
          <img
            src="/images/kebab.svg"
            alt="케밥 버튼"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onToggleDropdown();
            }}
          />
        </span>
        <p>{description}</p>
        <span className={cn('post-date')}>{postDate}</span>
      </div>
    </a>
  );
}
