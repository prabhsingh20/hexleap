import { useState } from "react";
import CollectionCards from "./CollectionCards";
import HeaderCollection from "./HeaderCollection";
import Buttons from "./Buttons";

interface CollectionData {
  id: number;
  image: string;
  teamName: string;
  date: string;
  day: string;
  time: string;
  location: string;
  collection: string;
}

const data: CollectionData[] = [
  {
    id: 1,
    image: "/collection/collection1.jpg",
    teamName: "Las Vegas Aviatars",
    date: "OCT 15",
    day: "SUN",
    time: "4.30 PM",
    location: "Las Vegas Ballpark, Las Vegas, Nevada",
    collection: "Take Flight Collection",
  },
  {
    id: 2,
    image: "/collection/collection2.jpg",
    teamName: "Sacramento River Cats",
    date: "OCT 15",
    day: "SUN",
    time: "4.30 PM",
    location: "Sytter Health Park, Sacramento, California",
    collection: "Orange Collection",
  },
  {
    id: 3,
    image: "/collection/collection3.jpg",
    teamName: "Las Vegas Aviatars",
    date: "OCT 15",
    day: "SUN",
    time: "4.30 PM",
    location: "Las Vegas Ballpark, Las Vegas, Nevada",
    collection: "Take Flight Collection",
  },
  {
    id: 4,
    image: "/collection/collection2.jpg",
    teamName: "Las Vegas Aviatars",
    date: "OCT 15",
    day: "SUN",
    time: "4.30 PM",
    location: "Las Vegas Ballpark, Las Vegas, Nevada",
    collection: "Take Flight Collection",
  },
  {
    id: 5,
    image: "/collection/collection3.jpg",
    teamName: "Las Vegas Aviatars",
    date: "OCT 15",
    day: "SUN",
    time: "4.30 PM",
    location: "Las Vegas Ballpark, Las Vegas, Nevada",
    collection: "Take Flight Collection",
  },
];

const Collection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    if (startIndex < data.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="flex items-center justify-center text-center">
      <div className="dark:bg-gradient-dark bg-gradient-light  relative flex h-[918px] w-[1240px] flex-col items-center justify-evenly">
        <HeaderCollection />
        <ul className="flex gap-8">
          {data.slice(startIndex, startIndex + 3).map((collectionCards) => (
            <CollectionCards
              collectionCards={collectionCards}
              key={collectionCards.id}
            />
          ))}
        </ul>
        <Buttons
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          startIndex={startIndex}
          data={data}
        />
      </div>
    </div>
  );
};

export default Collection;
