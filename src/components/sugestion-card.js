import { useEffect, useRef, useState } from "react";
import { OPEN_GOOD_READS_URL } from "../api";
import { OPEN_LIBRARY_API_URL } from "../api";

const SugestionCard = ({ obj }, index) => {
  const [author, setAuthor] = useState({});

  let isRendered = useRef(false);
  useEffect(() => {
    isRendered = true;
    fetch(`${OPEN_LIBRARY_API_URL}${obj.authors[0].key}.json`)
      .then((response) => response.json())
      .then((response) => {
        setAuthor(response);
      })
      .catch((err) => console.error(err));
    return () => {
      isRendered = false;
    };
  }, []);

  return (
    <div className="mx-2 my-8">
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-my-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{obj.title}</div>
          <p className="text-gray-700 text-base">
            <ion-icon name="person"></ion-icon> {author.name}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {obj.publish_date}
          </span>
          <span className="inline-block bg-my-green rounded-full px-3 py-1 text-sm font-semibold text-my-almost-white mr-2 mb-2">
            <a
              href={`${OPEN_GOOD_READS_URL}/${obj.identifiers.goodreads[0]}`}
              target="_blank"
              rel="noreferrer">
              {" "}
              See book on goodreads{" "}
            </a>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SugestionCard;
