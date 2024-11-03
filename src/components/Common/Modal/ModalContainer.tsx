import styles from './Modal.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

interface ModalContainerProps {
  onClose: () => void;
}

export default function ModalContainer({ onClose }: ModalContainerProps) {
  return (
    <div id="modal">
      <div className={cn('modal-inner')}>
        <img
          src="/images/close.svg"
          onClick={onClose}
          className={cn('close-button')}
        />
      </div>
      <div className={cn('modal-background')} onClick={onClose}></div>
    </div>
  );
}
