interface CardsProps {
  cards: {
    image: string;
    teamName: string;
    totalEvents: string;
    sports: string;
  };
}

const Cards: React.FC<CardsProps> = ({ cards }) => {
  const { image, teamName, totalEvents, sports } = cards;

  return (
    <li className="flex h-[511px] w-[237px] flex-col gap-3 bg-light-secondary p-[0.6rem] shadow-custom dark:bg-dark-secondary">
      <div className="h-[385.3px] w-[217px] overflow-hidden">
        <img className="w-[219px]" src={image} alt={teamName} />
      </div>
      <h3 className="text-[17px] font-medium text-light-text dark:text-dark-text">
        {teamName}
      </h3>
      <div className="grid h-[54px] w-[214px] grid-cols-2 bg-light-main px-3 py-2 dark:bg-dark-main">
        <div className="h-[31px]">
          <p className="text-[12px] font-normal text-light-paragraph dark:text-dark-paragraph">
            Total Events
          </p>
          <span className="text-[14px] font-medium text-light-text dark:text-dark-text">
            {totalEvents}
          </span>
        </div>
        <div className="h-[31px]">
          <p className="text-[12px] font-normal text-light-paragraph dark:text-dark-paragraph">
            Sports
          </p>
          <span className="text-[14px] font-medium text-light-text dark:text-dark-text">
            {sports}
          </span>
        </div>
      </div>
    </li>
  );
};

export default Cards;
