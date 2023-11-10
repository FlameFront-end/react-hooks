import React, { useRef, useState } from "react";
import useScroll from "../hooks/useScroll";

interface Todo {
  id: number;
  title: string;
}

const List: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [page, setPage] = useState<number>(1);

  const limit: number = 20;

  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  useScroll(parentRef, childRef, () => fetchTodos(page, limit));

  function fetchTodos(page: number, limit: number) {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`,
    )
      .then((response) => response.json())
      .then((json: Todo[]) => {
        setTodos((prevState) => [...prevState, ...json]);
        setPage((prevState) => prevState + 1);
      });
  }

  return (
    <div ref={parentRef} style={{ height: "100vh", overflow: "auto" }}>
      {todos.map((todo) => (
        <div key={todo.id} style={{ padding: 30, border: "2px solid black" }}>
          {todo.id}. {todo.title}
        </div>
      ))}
      <div ref={childRef} style={{ height: 20, background: "transparent" }} />
    </div>
  );
};

export default List;
