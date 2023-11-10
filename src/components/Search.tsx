import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

const Search = () => {
  const [value, setValue] = useState("");

  const debouncedCallback = useDebounce(search, 500);

  function search(query: string) {
    fetch(`https://jsonplaceholder.typicode.com/todo?query=${query}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
    debouncedCallback(e.target.value);
  };

  return (
    <div>
      <input type="search" value={value} onChange={onChange} />
    </div>
  );
};

export default Search;
