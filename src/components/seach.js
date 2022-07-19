import { useState } from "react";

const Search = () => {
  const [inputValue, setInputValue] = useState("");

  const [book, setBook] = useState(null);

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const bookSearched = () => {
    fetch(`http://openlibrary.org/search.json?q=${inputValue}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setBook(response);
        
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="m-4">
      <input
        type="text"
        name="book"
        placeholder="Write the name of your favorite book..."
        onChange={onChangeHandler}
        value={inputValue}
      />{" "}
      <button onClick={bookSearched}>Search</button>

      {book && <div>{book.q}</div>}

    </div>
  );
};

export default Search;
