"use client";
import Image from "next/image";
import React from "react";
import CommonHeading from "./CommonHeading";
import { useGetYogdans } from "@/hooks/query/yogdan.query";
import Link from "next/link";
import YogdanPopup from "../yogdan/YogdanPopup";
import CardWithImgCircle from "../yogdan/CardWithImgCircle";

export default function RecentYogdans() {
  const { data, isLoading } = useGetYogdans();

  console.log("yogdanss", data);
  return (
    <div>
      <div className="   space-y-4">
        <CommonHeading
          title="Recent Yogdan"
          link_title="View All"
          link_src="/yogdan"
        />
        {/* LIST OF THE YOGDNIS */}
        <div className=" grid  grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3  pt-10">
          {/* <div className=" space-y-4"> */}
          {data?.slice(0, 3).map((yog: any, idx: number) => {
            return (
              <div key={idx} className=" w-full ">
                <YogdanPopup
                  key={idx}
                  name={yog.name}
                  description={yog.description}
                  image={yog.image.secure_url}
                  type={yog.type}
                  birthPlace={yog.birthPlace}
                  status={yog.status}
                >
                  <CardWithImgCircle
                    image={yog.image.secure_url}
                    desc={yog.description}
                    name={yog.name}
                  />
                  {/* <div
                    key={idx}
                    className=" p-3 flex  w-auto sm:flex-row flex-col gap-4 border-2 rounded-md"
                  >
                    <Image
                      alt="pic"
                      src={yog.image.secure_url}
                      height={400}
                      width={400}
                      className="w-[17vh] h-[17vh]  object-cover rounded-md"
                    />
                    <div className=" w-full  flex-1">
                      <h2 className=" text-black font-semibold">{yog.name}</h2>
                      <div>
                        <p className="  line-clamp-3 lg:line-clamp-none">
                          {yog.description}
                        </p>
                        <Link
                          href={"/yogdan"}
                          className=" text-gray-500 text-sm"
                        >
                          see more
                        </Link>
                      </div>
                    </div>
                  </div> */}
                </YogdanPopup>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
