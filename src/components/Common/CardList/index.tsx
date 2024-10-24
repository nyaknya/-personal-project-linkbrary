import Card from '../Card';
import styles from './CardList.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface CardListProps {
  data: FolderLinksData[];
}

export default function CardList({ data }: CardListProps) {
  return (
    <div className={`container ${cn('card-list-box')}`}>
      <ul>
        {data.map((link) => {
          return <Card key={link.id} link={link} />;
        })}
      </ul>
    </div>
  );
}
