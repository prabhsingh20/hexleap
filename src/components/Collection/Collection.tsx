import CollectionList from "./CollectionList";
import HeaderCollection from "./HeaderCollection";

const Collection: React.FC = () => {
  return (
    <div className="flex items-center justify-center text-center">
      <div className="relative flex h-[918px] w-[350px] flex-col items-center justify-evenly bg-gradient-light dark:bg-gradient-dark md:w-[1240px]">
        <HeaderCollection />
        <CollectionList />
      </div>
    </div>
  );
};

export default Collection;
