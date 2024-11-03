import { ReactNode, useRef, useEffect, useState } from 'react';
import useOutsideClick from '../../../hooks/useOutSideClick';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cn = classNames.bind(styles);

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
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
        <div className={cn('modal-inner')}>{children}</div>
      </div>
      <div className={cn('modal-background')} onClick={onClose}></div>
    </>
  );
}
