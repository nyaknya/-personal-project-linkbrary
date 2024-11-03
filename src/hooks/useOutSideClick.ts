import { useEffect } from 'react';

export type useOutSideClickProps<T> = {
  ref: React.RefObject<T>;
  callback: () => void;
  enabled?: boolean;
};

export default function useOutsideClick<
  T extends HTMLElement = HTMLDivElement,
>({ ref, callback, enabled = true }: useOutSideClickProps<T>) {
  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, callback, enabled]);
}
