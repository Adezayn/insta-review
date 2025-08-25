import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

const ClickableRating = ({handleClick}: {handleClick: (e:number)=>void, rating: number}) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number>(0);

  // i want the rating updated to 0 after submitting review so that the stars become unselected
  return (
    <div className="flex space-x-1">
      {Array.from({ length: 5 }, (_, index) => {
        const starNumber = index + 1;
        const isActive = hovered !== null
          ? starNumber <= hovered
          : starNumber <= selected;

        return (
          <FaStar
            key={index}
            size={30}
            className={`cursor-pointer transition-colors ${
              isActive ? 'text-orange-400' : 'text-gray-300'
            }`}
            onMouseEnter={() => setHovered(starNumber)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => {
                setSelected(starNumber);
                handleClick(starNumber);
            }}
          />
        );
      })}
    </div>
  );
};

export default ClickableRating;
