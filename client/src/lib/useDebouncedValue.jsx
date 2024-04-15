import { useEffect, useRef, useState } from 'react';

const useDebouncedValue = (value, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState(value);

  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebounceValue(value), delay);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [value, delay]);
  return debounceValue;
};

export default useDebouncedValue;
