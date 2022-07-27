import { OPEN_GOOD_READS_URL } from "../api";

const SugestionCard = ({ obj }, index) => {
  return (
    <div className="m-12">
      <div class="max-w-sm rounded-lg overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{obj.title}</div>
          <p class="text-gray-700 text-base"><ion-icon name="person"></ion-icon> {obj.by_statement}</p>
        </div>
        <div class="px-6 pt-4 pb-2 flex justify-between">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {obj.publish_date}
          </span>
          <span class="inline-block bg-yellow-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
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
