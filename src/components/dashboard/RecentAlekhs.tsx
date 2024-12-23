"use client";
import React from "react";
import CommonHeading from "./CommonHeading";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { useGetAlekhs } from "@/hooks/query/alekh.query";
import { dateFormatter } from "@/lib/date";
import Link from "next/link";
import { useParams } from "next/navigation";
import AlekhCard from "../alekh/AlekhCard";

export default function RecentAlekhs() {
  const { lang } = useParams();
  const { data: alekhs, isLoading } = useGetAlekhs();

  return (
    <div>
      <div className="pb-10 md:pb-16">
        <CommonHeading
          title="Recent Alekh"
          link_title="View All"
          link_src="/alekh"
        />
        {/* data &&
          data.alekhs &&
          data.alekhs.map((d: any, idx: number) => (
            <Link key={d._id.toString()} href={`/alekh/${d._id.toString()}`}>
              <div>
                <img src={d.image.secure_url} className="h-20 w-20" alt="" />
              </div>
            </Link>
          )) */}
        <div className="flex gap-10 flex-wrap pt-10 justify-center">
          {alekhs?.map((a: any, idx: number) => {
            return (
              <Link href={`/alekh/${a._id}`} key={idx} className="">
                <AlekhCard a={a} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
