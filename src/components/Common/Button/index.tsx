import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface ButtonProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export default function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled} className={cn('cta-button')}>
      {children}
    </button>
  );
}
