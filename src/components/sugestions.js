import { useState } from "react";
import { OPEN_LIBRARY_API_URL } from "../api";
import SugestionCard from "./sugestion-card";


const Sugestions = () => {
  const [bookSugestions, setBookSugestions] = useState([]);

  const sugestions = [
    "100 Years of solitude",
    "1984",
    "Crime and punishement",
    "Dr Jackill and Mrs Hide",
    "Madame Bovary",
  ];

  const someSugestions = (sugestion) => {
     fetch(`${OPEN_LIBRARY_API_URL}/search.json?q=${sugestion}`)
      .then((response) => response.json())
      .then((response) => {
        setBookSugestions(oldBookSugestions => [...oldBookSugestions, response]);
      })
      .catch((err) => console.error(err));
  };

  const loop = () => sugestions.forEach(someSugestions);

  return (
    <div className="m-4">
      <p>Do you want my book's recomendations? Please click on the button</p>
      <button onClick={loop}>SUGESTIONS</button>
      {bookSugestions.map((bookSugestion, index) => <SugestionCard obj={bookSugestion} key={index}/>)}
    </div>
  );
};

export default Sugestions;
