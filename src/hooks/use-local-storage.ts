import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(initialValue);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(key);
      if (stored) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setValue(JSON.parse(stored));
      }
    } catch {
      setValue(initialValue);
    } finally {
      setHydrated(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }, [hydrated, value, key]);

  // optionally: for sync between tabs
  useEffect(() => {
    if (!hydrated) return;
    const handler = (event: StorageEvent) => {
      if (event.key === key && event.newValue !== null) {
        try {
          setValue(JSON.parse(event.newValue));
        } catch {}
      }
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, [hydrated, key]);

  return [value, setValue];
}
