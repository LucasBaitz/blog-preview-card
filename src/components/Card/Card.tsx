import Image from "next/image";
import React from "react";
import Badge from "../Badge/Badge";

interface CardProps {
  image: string;
  date: string;
  title: string;
  description: string;
  creatorPicture: string;
  creatorName: string;
}

const Card: React.FC<CardProps> = ({
  image,
  date,
  creatorName,
  creatorPicture,
  description,
  title,
}) => {
  return (
    <div className="max-w-sm rounded-3xl p-5 overflow-hidden shadow-right-bottom outline outline-[0.5px] bg-white">
      <Image
        src={image}
        alt="Card image"
        width={500}
        height={500}
        className="rounded-xl"
      />
      <div className="mt-5">
        <Badge text="Learning" backgroundColor="bg-[#F4D04E]" />
      </div>
      <div className="flex flex-col gap-4 mt-2">
        <span className="text-sm">{date}</span>
        <h2 className="font-extrabold text-2xl">{title}</h2>
        <p className="text-base text-gray-500 ">{description}</p>
      </div>
      <footer className="flex items-center justify-start w-full gap-3 mt-5">
        <Image
          src={creatorPicture}
          alt={`${creatorName} picture`}
          width={35}
          height={35}
        />
        <p className="font-extrabold">{creatorName}</p>
      </footer>
    </div>
  );
};

export default Card;
