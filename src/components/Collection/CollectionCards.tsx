interface CollectionCardProps {
  collectionCards: {
    image: string;
    teamName: string;
    date: string;
    day: string;
    time: string;
    location: string;
    collection: string;
  };
}

const CollectionCards: React.FC<CollectionCardProps> = ({
  collectionCards,
}) => {
  const { image, teamName, date, day, time, location, collection } =
    collectionCards;

  return (
    <li className="relative flex h-[624px] w-[257px] flex-col items-center gap-3 bg-light-main p-3 shadow-custom dark:bg-dark-secondary">
      <img
        className="relative h-[401.2px] w-[233.1px] "
        src={image}
        alt={teamName}
      />
      <h3 className="mt-5 font-Poppins text-[17px] font-medium text-light-text dark:text-dark-text">
        {teamName}
      </h3>
      <p className="font-Poppins text-[14px] font-normal text-light-text dark:text-dark-text">
        {date} | {day} | {time}
      </p>
      <p className="font-Inter text-[14px] font-normal text-light-paragraph dark:text-dark-paragraph">
        {location}
      </p>
      <button className="mt-2 h-[36px] w-[213px] bg-[#000] text-[12.7px] font-medium">
        {collection}
      </button>
    </li>
  );
};

export default CollectionCards;
