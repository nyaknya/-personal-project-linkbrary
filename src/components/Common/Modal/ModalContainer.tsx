import { ReactNode } from 'react';
import styles from './Modal.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

interface ModalContainerProps {
  onClose: () => void;
  children: ReactNode;
}

export default function ModalContainer({
  onClose,
  children,
}: ModalContainerProps) {
  return (
    <div id="modal">
      <div className={cn('modal-container')}>
        <img
          src="/images/close.svg"
          onClick={onClose}
          className={cn('close-button')}
        />
        <div className={cn('modal-inner')}>{children}</div>
      </div>
      <div className={cn('modal-background')} onClick={onClose}></div>
    </div>
  );
}
