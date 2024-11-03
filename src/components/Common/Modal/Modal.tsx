import { ReactNode, useRef, useEffect, useState } from 'react';
import useOutsideClick from '../../../hooks/useOutSideClick';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cn = classNames.bind(styles);

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
  className: string;
}

export default function Modal({ onClose, children, className }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    setIsMounted(true);

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useOutsideClick({ ref: modalRef, callback: onClose, enabled: isMounted });

  return (
    <>
      <div ref={modalRef} className={cn('modal-container')}>
        <img
          src="/images/close.svg"
          onClick={onClose}
          className={cn('close-button')}
        />
        <div className={cn('modal-inner', className)}>{children}</div>
      </div>
      <div className={cn('modal-background')} onClick={onClose}></div>
    </>
  );
}
