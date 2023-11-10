import React from "react";

type Book = {
  id: number;
  title: string;
  price: number;
};

type BookWithOrder = Book & {
  addToOrder: (id: number) => void;
};

type BooksProps = {
  items: Book[];
  addToOrder: () => void;
};

const Books: React.FC<BooksProps> = ({ items = [], addToOrder }) => {
  return (
    <div className="books">
      {items.map((book) => (
        <Book key={book.id} addToOrder={addToOrder} {...book} />
      ))}
    </div>
  );
};

const Book: React.FC<BookWithOrder> = ({ id, title, price, addToOrder }) => {
  return (
    <div className="book">
      <h2>{title}</h2>
      <span>{price} </span>
      <button onClick={() => addToOrder(id)}>Buy</button>
    </div>
  );
};

export default Books;
