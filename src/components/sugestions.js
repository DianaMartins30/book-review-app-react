import { useState } from "react";
import { OPEN_LIBRARY_API_URL } from "../api";
import SugestionCard from "./sugestion-card";

const Sugestions = () => {
  const [bookSugestions, setBookSugestions] = useState([]);

  const sugestions = [
    "9780805209990",
    "9789722313308",
    "9780679420293",
    "9780141439570",
    "9780451528957",
    "9780486295725",
  ];

  const someSugestions = (sugestion) => {
    fetch(`${OPEN_LIBRARY_API_URL}/isbn/${sugestion}.json`)
      .then((response) => response.json())
      .then((response) => {
        setBookSugestions((oldBookSugestions) => [
          ...oldBookSugestions,
          response,
        ]);
      })
      .catch((err) => console.error(err));
  };

  const loop = () => sugestions.forEach(someSugestions);

  return (
    <div className="">
      <div className="flex items-center border-b border-my-green py-2 w-full">
        <label className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none">
          Do you want some of my book's recomendations?
        </label>
        <button
          onClick={loop}
          className="flex-shrink-0 bg-my-green hover:bg-my-green border-my-green hover:border-my-green text-sm border-4 text-white py-1 px-2 rounded"
          type="button">
          Click here!
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {bookSugestions.map((bookSugestion, index) => (
          <SugestionCard obj={bookSugestion} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Sugestions;
