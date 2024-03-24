interface ButtonsProps {
  nextSlide: () => void;
  prevSlide: () => void;
  startIndex: number;
  data: any[];
}

const Buttons: React.FC<ButtonsProps> = ({
  nextSlide,
  prevSlide,
  startIndex,
  data,
}) => {
  return (
    <>
      <button
        className="arrow-button absolute left-20"
        onClick={prevSlide}
        disabled={startIndex === 0}
      >
        <span className="material-symbols-outlined border border-[#2C9CF0] py-2 pl-3 text-[#2C9CF0]">
          arrow_back_ios
        </span>
      </button>
      <button
        className="arrow-button absolute right-20"
        onClick={nextSlide}
        disabled={startIndex === data.length - 3}
      >
        <span className="material-symbols-outlined border border-[#2C9CF0] py-2 pl-2 pr-1 text-[#2C9CF0]">
          arrow_forward_ios
        </span>
      </button>
    </>
  );
};

export default Buttons;
