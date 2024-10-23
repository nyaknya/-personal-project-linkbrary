import styles from './Titlebar.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

export default function Titlebar() {
  return (
    <>
      <div className={cn('image-box')}>
        <img src="" alt="" />
        <span></span>
      </div>
      <h2>임시</h2>
    </>
  );
}
