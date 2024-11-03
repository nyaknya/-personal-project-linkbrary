import { useRef } from 'react';
import useOutsideClick from '../../../hooks/useOutSideClick';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cn = classNames.bind(styles);

export default function Modal({ onClose, children, fix }) {
  const modalRef = useRef(null);

  const handleClose = () => {
    onClose();
  };

  useOutsideClick(modalRef, handleClose);

  return (
    <>
      <div ref={modalRef} className={cn('modal-container')}>
        <img
          src="/images/close.svg"
          onClick={onClose}
          className={cn('close-button')}
        />
        <div className={cn('modal-inner')}>{children}</div>
      </div>
      <div className={cn('modal-background')} onClick={onClose}></div>
    </>
  );
}
