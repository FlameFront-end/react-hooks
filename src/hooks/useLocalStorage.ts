import { useEffect, useState } from "react";

export default function useLocalStorage(initialValue: any, key: string) {
  const getValue = () => {
    const storage = localStorage.getItem(key); // string || value

    if (storage) {
      return JSON.parse(storage); // '[]'
    }

    return initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
