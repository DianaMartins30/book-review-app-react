const SearchCard = ({ obj }, index) => {
  
  return (
    <div className="mx-2 my-8">
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-my-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 truncate">{obj.title}</div>
          <div className="mb-2 truncate">{obj.authors[0].name}</div>
     
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            teste
          </span>
          <span className="inline-block bg-my-green rounded-full px-3 py-1 text-sm font-semibold text-my-almost-white mr-2 mb-2">
            teste
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
