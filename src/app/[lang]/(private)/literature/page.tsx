"use client";
import { Button } from "@/components/ui/button";
import { Filter, Plus, Search } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGetLiteratures } from "@/hooks/query/literatures.query";
import PageLoadingUI from "@/components/PageLoadingUI";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@uidotdev/usehooks";
import { useGetAlekhs } from "@/hooks/query/alekh.query";

export default function page() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [search, setSearch] = useState("");
  const searchTerm = useDebounce(search, 200);

  useEffect(() => {
    router.push(`${pathname}?q=${search}`);
  }, [searchTerm]);
  const { data, isLoading } = useGetLiteratures();

  if (isLoading) return <PageLoadingUI />;

  console.log("literaures", data);
  return (
    <div className=" 2xl:container   px-4 py-8 space-y-8">
      {/* HEADING PART */}
      <div className=" flex md:flex-row flex-col justify-between  items-start md:items-center">
        <h2 className=" text-lg md:text-3xl font-semibold ">
          {" "}
          Literatures Collections
        </h2>
        <div className=" flex md:flex-row flex-col items-start md:items-center gap-2">
          <div className="flex items-center gap-2 w-fit p-2 bg-white  border-2 rounded-md">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none text-sm"
            />
            <Search />
          </div>
          <Button asChild className="  h-10">
            <Link href={"/literature/new"} className=" flex gap-2">
              {" "}
              <Plus size={20} className=" text-yellow-400" />
              Add Literatures
            </Link>
          </Button>
        </div>
      </div>

      {/* CARDS PART */}

      {data.map((literature: any, idx: number) => {
        return (
          <div
            key={idx}
            className=" flex gap-8 bg-white p-4 items-center rounded-lg"
          >
            <div className=" flex-shrink-0 gap-2 flex flex-col items-center justify-center">
              <img
                src={literature.author_image.secure_url}
                alt="pic"
                className=" w-8 h-8 sm:w-14 sm:h-14 rounded-full  object-cover"
              />
              <h2 className=" text-sm sm:text-base font-medium">
                {literature.author}
              </h2>
            </div>

            <div>
              <p
                dangerouslySetInnerHTML={{ __html: `${literature.content}` }}
                className=" sm:text-base text-xs text-muted-foreground  line-clamp-3"
              ></p>
              <Link
                href={`/literature/${1}`}
                className="  text-xs sm:text-sm font-medium "
              >
                see more
              </Link>
            </div>
          </div>
        );
      })}

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
  );
}