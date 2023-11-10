import React from "react";

import { books } from "./data";

import Search from "./components/Search";
import List from "./components/List";
import Hover from "./components/Hover";
import Input from "./components/Input";
import Toggle from "./components/Toggle";
import Books from "./components/Books";

import useLocalStorage from "./hooks/useLocalStorage";

const App: React.FC = () => {
  const [order, setOrder] = useLocalStorage([], "order");

  return (
    <div className="App">
      {/*<Input />*/}
      {/*<Hover />*/}
      {/*<List />*/}
      {/*<Search />*/}
      {/*<Toggle />*/}
      <Books items={books} addToOrder={() => {}} />
    </div>
  );
};

export default App;
