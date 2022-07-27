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
        setInputValue("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="w-full py-12">
        <div className="flex items-center border-b border-my-purple py-2">
          <input
            type="text"
            name="book"
            placeholder="Write a topic of interest to you..."
            onChange={onChangeHandler}
            value={inputValue}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          />
          <button
            onClick={bookSearched}
            className="flex-shrink-0 bg-my-purple hover:bg-my-dark-purple border-my-purple hover:border-my-dark-purple text-sm border-4 text-white py-1 px-2 rounded"
            type="button">
            Search
          </button>
        </div>
      {book && <div>there are {book.work_count} books on this subject</div>}
    </div>
  );
};

export default Search;
