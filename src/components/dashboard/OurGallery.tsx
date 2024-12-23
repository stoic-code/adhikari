"use client";
import Image from "next/image";
import React from "react";
import CommonHeading from "./CommonHeading";
import { useGetGalleries } from "@/hooks/query/gallery.query";
import PageLoadingUI from "../PageLoadingUI";
import Link from "next/link";
import { Images } from "lucide-react";

export default function OurGallery() {
  const { data, isLoading } = useGetGalleries();
  console.log("gallery", data);

  if (isLoading) return <PageLoadingUI />;
  return (
    <div>
      <div className="   space-y-8">
        <CommonHeading
          title="Our Gallery"
          link_title="View All"
          link_src="/gallery"
        />

        <div className=" space-y-4">
          {/* FIRST GRID */}
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href={`/gallery/${data[0]._id}`}
              className=" relative cursor-pointer order-1 md:order-2   col-span-2 h-[20vh] md:h-[40vh]  rounded-md"
            >
              {data[0] && (
                <Image
                  src={data[0]?.images[0].secure_url}
                  alt="temple"
                  height={400}
                  width={400}
                  className=" w-full  h-full rounded-md object-cover"
                />
              )}
              <div className="rounded-md absolute inset-0 cursor-pointer bg-none transition-all duration-500 group hover:bg-black/80">
                <div className="transition-all space-y-2 cursor-pointer duration-500  absolute top-[50%] left-[50%] -translate-x-[50%] group-hover:text-white font-medium tracking-widest  text-transparent">
                  {data[0]?.title}
                  <span className=" flex gap-2 items-center  justify-center">
                    <Images size={16} /> {data[0]?.images.length}
                  </span>
                </div>
              </div>
            </Link>
            <Link
              href={`/gallery/${data[1]._id}`}
              className=" relative cursor-pointer h-[20vh] md:h-[40vh] order-1 rounded-md"
            >
              {data[1] && (
                <Image
                  src={data[1]?.images[0].secure_url}
                  alt="temple"
                  height={400}
                  width={400}
                  className=" w-full  h-full rounded-md object-cover"
                />
              )}{" "}
              <div className="rounded-md absolute inset-0 cursor-pointer bg-none transition-all duration-500  group hover:bg-black/80">
                <div className="transition-all space-y-2 cursor-pointer duration-500  absolute top-[50%] left-[50%] -translate-x-[50%] group-hover:text-white font-medium tracking-widest  text-transparent">
                  {data[1]?.title}
                  <span className=" flex gap-2 items-center  justify-center">
                    <Images size={16} /> {data[1]?.images.length}
                  </span>
                </div>
              </div>
            </Link>
            <Link
              href={`/gallery/${data[2]._id}`}
              className="relative h-[20vh] md:h-[40vh] order-3"
            >
              {data[2] && (
                <Image
                  src={data[2]?.images[0].secure_url}
                  alt="temple"
                  height={400}
                  width={400}
                  className=" w-full h-full  rounded-md object-cover"
                />
              )}{" "}
              <div className="rounded-md absolute inset-0 cursor-pointer bg-none transition-all duration-500 group  hover:bg-black/80">
                <div className="transition-all space-y-2 cursor-pointer duration-500  absolute top-[50%] left-[50%] -translate-x-[50%] group-hover:text-white font-medium tracking-widest  text-transparent">
                  {data[2]?.title}
                  <span className=" flex gap-2 items-center  justify-center">
                    <Images size={16} /> {data[2]?.images.length}
                  </span>
                </div>
              </div>
            </Link>
          </div>
          {/* SECOND GRID */}
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href={`/gallery/${data[3]._id}`}
              className="relative order-3 md:order-3   col-span-2 h-[20vh] md:h-[40vh] "
            >
              {data[3] && (
                <Image
                  src={data[3]?.images[0].secure_url}
                  alt="temple"
                  height={400}
                  width={400}
                  className=" w-full h-full   rounded-md object-cover"
                />
              )}{" "}
              <div className="rounded-md absolute inset-0 cursor-pointer group bg-none transition-all duration-500  hover:bg-black/80">
                <div className="transition-all space-y-2 cursor-pointer duration-500  absolute top-[50%] left-[50%] -translate-x-[50%] group-hover:text-white font-medium tracking-widest  text-transparent">
                  {data[3]?.title}
                  <span className=" flex gap-2 items-center  justify-center">
                    <Images size={16} /> {data[3]?.images.length}
                  </span>
                </div>
              </div>
            </Link>
            <Link
              href={`/gallery/${data[4]._id}`}
              className="relative h-[20vh] md:h-[40vh] order-1"
            >
              {data[4] && (
                <Image
                  src={data[4]?.images[0].secure_url}
                  alt="temple"
                  height={400}
                  width={400}
                  className=" w-full h-full  rounded-md object-cover"
                />
              )}{" "}
              <div className="rounded-md group absolute inset-0 cursor-pointer bg-none transition-all duration-500  hover:bg-black/80">
                <div className="transition-all space-y-2 cursor-pointer duration-500  absolute top-[50%] left-[50%] -translate-x-[50%] group-hover:text-white font-medium tracking-widest  text-transparent">
                  {data[4]?.title}
                  <span className=" flex gap-2 items-center  justify-center">
                    <Images size={16} /> {data[4]?.images.length}
                  </span>
                </div>
              </div>
            </Link>
            <Link
              href={`/gallery/${data[5]._id}`}
              className="relative  h-[20vh] md:h-[40vh] order-2"
            >
              {data[5] && (
                <Image
                  src={data[5]?.images[0].secure_url}
                  alt="temple"
                  height={400}
                  width={400}
                  className=" w-full h-full rounded-md object-cover"
                />
              )}{" "}
              <div className="group rounded-md absolute inset-0 bg-none cursor-pointer transition-all duration-500  hover:bg-black/80">
                <div className="transition-all space-y-2 cursor-pointer duration-500  absolute top-[50%] left-[50%] -translate-x-[50%] group-hover:text-white font-medium tracking-widest  text-transparent">
                  {data[5]?.title}
                  <span className=" flex gap-2 items-center  justify-center">
                    <Images size={16} /> {data[5]?.images.length}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
