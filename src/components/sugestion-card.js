import { OPEN_GOOD_READS_URL } from "../api";

const SugestionCard = ({ obj }, index) => {

  return (
    <div>
      <p>{obj.title} </p>
      <p>{obj.by_statement} </p>
      <p>{obj.publish_date} </p>
      <p><a href={`${OPEN_GOOD_READS_URL}/${obj.identifiers.goodreads[0]}`} target="_blank" rel="noreferrer"> See on goodreads </a> </p>
    </div>
  );
};

export default SugestionCard;
