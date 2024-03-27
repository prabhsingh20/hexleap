import Advertisement from "./Advertisement";
import Cards from "./Cards";

interface CardData {
  id: number;
  image: string;
  teamName: string;
  totalEvents: string;
  sports: string;
}

const data: CardData[] = [
  {
    id: 1,
    image: "/playeriamges/player1.jpg",
    teamName: "Sacramento River Cats",
    totalEvents: "48 Events",
    sports: "Baseball",
  },
  {
    id: 2,
    image: "/playeriamges/player2.jpg",
    teamName: "Las Vegas Aviators",
    totalEvents: "28 Events",
    sports: "Baseball",
  },
  {
    id: 3,
    image: "/playeriamges/player3.jpg",
    teamName: "New Jersey Devils",
    totalEvents: "15 Events",
    sports: "Ice Hockey",
  },
  {
    id: 4,
    image: "/playeriamges/player4.jpg",
    teamName: "Las Vegas Aviators",
    totalEvents: "28 Events",
    sports: "Baseball",
  },
];

const CardList: React.FC = () => {
  return (
    <>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {data.map((card) => (
          <Cards cards={card} key={card.id} />
        ))}
        <Advertisement />
      </ul>
      <button className="mx-auto mt-6 h-[46px] w-[124px] rounded-[3px] bg-dark-button px-[30px] py-[10px] text-sm font-semibold">
        See More
      </button>
    </>
  );
};

export default CardList;
