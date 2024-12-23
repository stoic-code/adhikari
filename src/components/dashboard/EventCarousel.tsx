"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import { Button } from "../ui/button";
import { useGetEvents } from "@/hooks/query/events.query";
import PageLoadingUI from "../PageLoadingUI";
import Link from "next/link";

export default function EventCarousel() {
  const { data: active_events, isLoading } = useGetEvents();
  console.log("events", active_events);

  if (isLoading) return <PageLoadingUI />;

  return (
    <div
      style={{ background: "url(/dashboard/blob.svg) no-repeat bottom/cover" }}
    >
      <div className="bg-white px-4 sm:px-20 md:bg-transparent">
        <Carousel className="w-full">
          <CarouselContent className="h-full md:h-[70vh]">
            {active_events.map((event: any, index: number) => (
              <CarouselItem key={index}>
                <div className="p-4 py-10 text-muted">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                    <div className="md:order-2">
                      <Image
                        src={event.image.secure_url}
                        alt="img"
                        height={800}
                        width={400}
                        className="w-full h-[30vh] md:h-[55vh] object-cover rounded-md"
                      />
                    </div>
                    <div className="text md:order-1 space-y-4">
                      <h3 className="text-3xl sm:text-5xl font-semibold text-black md:text-white">
                        {event.title}
                      </h3>
                      <h5 className="text-muted-foreground md:text-white/90">
                        Organized By:  {event.organizer}
                      </h5>
                      <p className="md:line-clamp-none line-clamp-2 text-muted-foreground md:text-white/90">
                        {event.description}
                      </p>
                      <Button
                        asChild
                        className="bg-yellow-600 hover:bg-yellow-600"
                      >
                        <Link href={`/contributions/${event._id}`}>
                          Learn More
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-black -left-4 sm:-left-8 md:text-white hover:text-accent" />
          <CarouselNext className="-right-4 sm:-right-8" />
        </Carousel>
      </div>
    </div>
  );
}
