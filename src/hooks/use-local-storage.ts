import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
  const isBrowser = typeof window !== 'undefined';

  const [value, setValue] = useState<T>(() => {
    if (!isBrowser) return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    if (!isBrowser) return;
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [isBrowser, key, value]);

  // update local state if localStorage changes elsewhere
  useEffect(() => {
    if (!isBrowser) return;
    const handler = (event: StorageEvent) => {
      if (event.key === key && event.newValue) {
        try {
          setValue(JSON.parse(event.newValue));
        } catch {
          // ignore parse errors (e.g. if localStorage is corrupted)
        }
      }
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return [value, setValue];
}
