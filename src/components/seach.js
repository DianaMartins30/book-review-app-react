import { useState } from "react";
import { OPEN_LIBRARY_API_URL } from "../api";

const Search = () => {
  const [inputValue, setInputValue] = useState("");

  const [book, setBook] = useState(null);

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const bookSearched = () => {
    fetch(`${OPEN_LIBRARY_API_URL}/subjects/${inputValue}.json?details=true`)
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
        placeholder="Write a topic of interest to you..."
        onChange={onChangeHandler}
        value={inputValue}
      />{" "}
      <button onClick={bookSearched}>Search</button>
      {book && <div>there are {book.work_count} books on this subject</div>}
    </div>
  );
};

export default Search;
