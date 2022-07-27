import { useState } from "react";
import { OPEN_LIBRARY_API_URL } from "../api";
import SugestionCard from "./sugestion-card";


const Sugestions = () => {
  const [bookSugestions, setBookSugestions] = useState([]);

  const sugestions = [
    "9780805209990",
    "9789722313308",
    "9780679420293",
    "9780452284234",
    "9780141439570",
    "9780451528957",
    "9780486295725",
    "9780679457312",
   
  ];

  
  // (`${OPEN_LIBRARY_API_URL}/search.json?q=${sugestion}`)
  const someSugestions = (sugestion) => {
     fetch(`${OPEN_LIBRARY_API_URL}/isbn/${sugestion}.json`)
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
