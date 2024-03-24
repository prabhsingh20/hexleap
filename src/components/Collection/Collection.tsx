import { useState, useEffect } from "react";
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
  // Add more data objects as needed
];

const Collection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [numCardsPerPage, setNumCardsPerPage] = useState(1);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setNumCardsPerPage(1);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setNumCardsPerPage(2);
      } else {
        setNumCardsPerPage(3);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set numCardsPerPage based on initial window width
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (startIndex < data.length - numCardsPerPage) {
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
      <div className="relative flex h-[918px] flex-col items-center justify-evenly bg-gradient-light dark:bg-gradient-dark lg:w-[1240px]">
        <HeaderCollection />
        <ul className="flex flex-wrap justify-center gap-8">
          {data
            .slice(startIndex, startIndex + numCardsPerPage)
            .map((collectionCards) => (
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
