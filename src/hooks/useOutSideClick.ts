import { useEffect } from 'react';

export type useOutSideClickProps<T> = {
  ref: React.RefObject<T>;
  callback: () => void;
};

export default function useOutSideClick<
  T extends HTMLElement = HTMLDivElement,
>({ ref, callback }: useOutSideClickProps<T>) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, callback]);
}
