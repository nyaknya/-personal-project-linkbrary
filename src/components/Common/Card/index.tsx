import styles from './Card.module.scss';
import classNames from 'classnames/bind';
import sliceDate from '../../../utils/sliceDate';
import { SyntheticEvent } from 'react';

const cn = classNames.bind(styles);

interface CardProps {
  link: SharedFolderLinksData;
}

export default function Card({ link }: CardProps) {
  const { url, imageSource, title, description, createdAt } = link;

  const postDate = sliceDate(createdAt);

  const handleSrc =
    imageSource && imageSource.trim() !== ''
      ? imageSource
      : 'images/defaultimg.png';

  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    event.currentTarget.src = 'images/defaultimg.png';
  };

  return (
    <a href={url} className={cn('card')}>
      <div className={cn('image-box')}>
        <img src={handleSrc} onError={handleImageError} alt={title} />
      </div>
      <div className={cn('card-content')}>
        <span className={cn('time-stamp')}></span>
        <p>{description}</p>
        <span className={cn('post-date')}>{postDate}</span>
      </div>
    </a>
  );
}
