"use client";
import PageLoadingUI from "@/components/PageLoadingUI";
import AlekhCard from "@/components/alekh/AlekhCard";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGetAlekhs } from "@/hooks/query/alekh.query";
import { useDebounce } from "@uidotdev/usehooks";
import { Calendar, Filter, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

export default function page() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [search, setSearch] = useState("");
  const searchTerm = useDebounce(search, 200);

  const { data: alekhs, isLoading } = useGetAlekhs();

  useEffect(() => {
    router.push(`${pathname}?q=${search}`);
  }, [searchTerm]);

  if (isLoading) return <PageLoadingUI />;
  return (
    <div className=" 2xl:container px-4 py-8 space-y-4">
      {/* HEADING PART */}
      <div className=" flex justify-between items-center">
        <h2 className=" text-3xl font-semibold "> Alekh</h2>
        <div className=" flex items-center gap-2">
          <div className="flex items-center gap-2  w-fit p-2 bg-white  border-2 rounded-md">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className=" outline-none text-sm "
            />
            <Search />
          </div>
          <Button asChild className="  h-10">
            <Link href={"/alekh/new"}>Add Alekh</Link>
          </Button>
        </div>
      </div>
      <div>
        <div className=" grid gap-2  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {alekhs.map((a: any, idx: number) => {
            return (
              <Link
                href={`/alekh/${a._id}`}
                key={idx}
                // style={{
                //   background: "url(/dummy/oldpage.png) center/contain",
                // }}
                className=""
              >
                <AlekhCard a={a} />
                {/* <Image
                  alt="pic"
                  src={a.image.secure_url}
                  height={400}
                  width={400}
                  className=" flex-shrink-0   h-[180px] object-cover object-center w-[300px] rounded-md"
                /> */}
                {/* <div className=" flex justify-between flex-col gap-4 h-auto ">
             
                  <div>
                    <h2 className=" text-black font-semibold">{a.title}</h2>

                    <p
                      className="  line-clamp-4 "
                      dangerouslySetInnerHTML={{ __html: `${a.desc}` }}
                    ></p>
                  </div>
                  <div className=" self-end flex  items-center gap-8 text-muted-foreground font-medium text-sm">
                    <p>{a.author} </p>
                    <p>|</p>
                    <p className=" flex gap-1 items-center text-sm">
                      <Calendar size={16} /> 2081-01-21
                    </p>
                  </div>
                </div> */}
              </Link>
            );
          })}
        </div>
        {/* <div className=" mt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div> */}
      </div>
    </div>
  );
}
