import styles from './Card.module.scss';
import classNames from 'classnames/bind';
import sliceDate from '../../../utils/sliceDate';

const cn = classNames.bind(styles);

interface CardProps {
  link: SharedFolderLinksData;
}

export default function Card({ link }: CardProps) {
  const { url, imageSource, title, description, createdAt } = link;

  const postDate = sliceDate(createdAt);

  return (
    <a href={url}>
      <img src={imageSource} alt={title} />
      <span className={cn('time-stamp')}></span>
      <p>{description}</p>
      <span className={cn('post-date')}>postDate</span>
    </a>
  );
}
