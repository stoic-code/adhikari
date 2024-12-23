import React from "react";

import OurGallery from "@/components/dashboard/OurGallery";
import Statistics from "@/components/dashboard/Statistics";
import ContributorsList from "@/components/dashboard/ContributorsList";
import RecentAlekhs from "@/components/dashboard/RecentAlekhs";
import RecentYogdans from "@/components/dashboard/RecentYogdans";
import KulthanMandir from "@/components/dashboard/KulthanMandir";
import Overview from "@/components/dashboard/Overview";
import EventCarousel from "@/components/dashboard/EventCarousel";

const Page = () => {
  return (
    <div>
      <EventCarousel />
      <section className=" py-20 space-y-10 2xl:container md:px-4 px-4 sm:px-10">
        {/* STATISTICS */}
        <Statistics />
        {/* OVERVIEW */}
        <Overview />
        {/* OUR GALLERY */}
        <OurGallery />

        {/* CONTRIBUTIONS LIST */}
        <ContributorsList />
        {/* RECENT ALEKHS */}
        <RecentAlekhs />
        {/* RECENT YOGDAN */}
        <RecentYogdans />

        {/* KULTHAN MANDIR */}
        <KulthanMandir />
      </section>
    </div>
  );
};

export default Page;
