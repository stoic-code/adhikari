"use client";
import React from "react";
import YogdanPopup from "./YogdanPopup";
import CardWithImgCircle from "./CardWithImgCircle";

export default function YogdanGrid({ data }: { data: any }) {
  return (
    <div>
      {" "}
      <div className="my-16">
        <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {data &&
            data.map((d: any, idx: number) => (
              <YogdanPopup
                key={idx}
                name={d.name}
                description={d.description}
                image={d.image.secure_url}
                type={d.type}
                birthPlace={d.birthPlace}
                status={d.status}
              >
                <CardWithImgCircle
                  image={d.image.secure_url}
                  desc={d.description}
                  name={d.name}
                />
              </YogdanPopup>
            ))}
        </div>
      </div>
    </div>
  );
}
