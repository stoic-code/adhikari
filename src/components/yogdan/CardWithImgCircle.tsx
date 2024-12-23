import React, { FC } from "react";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

type TCardProps = {
  image: string;
  desc: string;
  name: string;
};

const CardWithImgCircle: FC<TCardProps> = ({ name, image, desc }) => {
  return (
    <Card className="relative pt-10 shadow-md">
      <div className="absolute left-4 top-[-2rem] flex h-20 w-20 items-center justify-center rounded-full border-primary bg-primary">
        <img
          alt="avatar"
          className="h-[95%] w-[95%] rounded-full bg-cover object-cover"
          src={image ? image : "/avatar.jpg"}
          width={100}
          height={100}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-md md:text-xl">{name}</CardTitle>
        <CardDescription className="line-clamp-5 min-h-[6.2rem]">
          {desc}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default CardWithImgCircle;
