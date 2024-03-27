import Header from "./Header";
import CardList from "./CardList";

const DetailCards: React.FC = () => {
  return (
    <div className="flex justify-center px-2 py-10">
      <div className="flex flex-col gap-6 xl:h-[673px] xl:w-[1241px]">
        <Header />
        <CardList />
       
      </div>
    </div>
  );
};

export default DetailCards;
