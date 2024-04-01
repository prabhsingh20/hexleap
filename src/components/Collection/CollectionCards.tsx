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
    <li className="relative flex h-[624px] w-[257px] flex-col items-center gap-3 bg-light-secondary p-3 shadow-custom dark:bg-dark-secondary">
      <img
        className="relative h-[401.2px] w-[233.1px] shadow-[0px_8px_16px_0px_#00000033] "
        src={image}
        alt={teamName}
      />
      <h3 className="mt-5 pt-1 font-Poppins text-[17px] font-medium text-light-text dark:text-dark-text">
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

      {/* <div className="absolute -left-[0.6em]  top-[26.5rem] h-5 w-5 rounded-full  dark:bg-gradient-dark"></div> */}
      {/* <div className="absolute -right-[0.6rem]  top-[26.5rem] h-5 w-5 rounded-full  dark:bg-gradient-dark"></div> */}

      <div className="absolute left-[2px]  top-[26.5rem] h-[20px] w-[20px] -translate-x-[12px] rounded-full bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] shadow-[inset_-7px_0px_8px_0px_#00000015] dark:from-[#18282A] dark:to-[#221A2C]"></div>

      <div className="absolute right-[2px]  top-[26.5rem] h-[20px] w-[20px] translate-x-[12px] rounded-full bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] shadow-[inset_7px_0px_8px_0px_#00000015] dark:from-[#18282A] dark:to-[#221A2C]"></div>

      <div className=" absolute  left-5 top-[25.8rem] mt-5  w-[84%] border-t-2 border-dashed border-[#A9ACB2]  dark:border-[#818A97]"></div>
    </li>
  );
};

export default CollectionCards;
