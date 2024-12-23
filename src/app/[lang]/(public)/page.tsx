"use client";
import { useSession } from "@/providers/SessionProvider";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { MapPin, Search } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import GetApp from "@/components/home/GetApp";
import Overview from "@/components/dashboard/Overview";
import Features from "@/components/home/Features";
import History from "@/components/home/History";

const page = () => {
  const { session } = useSession();

  const [firstText, setFirstText] = useState(false);

  const informations = [
    {
      title: "Get your own ID Card",
      desc: "Join Bansawali to get your ID Card.",
    },
    {
      title: "Get your own Ceritificate",
      desc: "Join Bansawali to get your certificate.",
    },
  ];

  return (
    <>
      {/* home */}
      <section
        className="p-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/home/homeBg.svg)` }}
      >
        <div className="2xl:container px-4 mx-auto">
          <div className="flex justify-between flex-col lg:flex-row">
            <div className="text-center xl:mt-[100px] lg:mt-[80px] lg:text-left p-4">
              <h2 className="mt-8 text-3xl  xl:text-6xl lg:text-4xl leading-relaxed lg:leading-snug xl:leading-snug text-white font-medium">
                स्वागत छ
                <br /> ठाडाराई अधिकारी सेवा
                <br />
                समाजमा
              </h2>
              <div className="mt-16">
                <Button className="bg-[#FFB70F] hover:bg-yellow-400 text-black px-8 py-6 text-lg lg:text-xl">
                  Explore
                </Button>
              </div>
            </div>
            <div className="relative animate-bounce z-10 xl:w-[390px] lg:w-[300px] flex flex-col items-center justify-center mt-[20px] mr-[60px] xl:mt-[250px] lg:mt-[180px] lg:mr-8 xl:mr-[80px]">
              <Image
                src="/home/rishi.svg"
                className="w-full"
                alt="Rishi"
                width={390}
                height={390}
              />
              {/* <h1 className="text-white lg:text-2xl text-xl font-bold">
                Jay Mahashri Aarti
              </h1> */}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN WRAPPER   */}
      <section className="   ">
        {/* history */}
        <History />
        {/* <section>
          <div className="h-[60vh] bg-red-200"></div>
        </section> */}
        {/* features */}

        <Features />
        {/* <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-[#FFFFD0] py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
            <div className="relative z-10 flex justify-center lg:justify-start mt-8 lg:mt-8 lg:mb-8 lg:pl-8 lg:ml-0">
              <Image
                src="/home/certificate.svg"
                alt="Certificate Ellipse"
                width={300}
                height={300}
              />
            </div>
            <div className="lg:w-1/2 lg:text-left text-center mt-16 lg:mb-16 lg:mr-[100px]">
              <h1 className="text-2xl lg:text-4xl font-bold">
                Get your own Certificate
              </h1>
              <p className="mt-4 text-sm lg:text-lg">
                Join Bansawali to get a certificate for making your
                contribution.
              </p>
              <div className="lg:mt-[100px] mt-16 text-center lg:text-right">
                <Button className="bg-[#FFB70F] hover:bg-yellow-400 text-black px-8 py-6 text-lg lg:text-xl">
                  Go now
                </Button>
              </div>
            </div>
            <div className="absolute lg:mt-[200px] mt-[150px] left-0 z-0 lg:block">
              <Image
                src="/home/certificateEllipse.svg"
                alt="Certificate Ellipse"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </section> */}
        {/* overview */}

        <div className="md:px-10 container mb-10">
          <Overview />
        </div>
        {/* 
        <section className=" bg-white ">
          <div className="2xl:container mx-auto px-8 sm:px-10 lg:px-16 py-10">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-left mb-8">
                Overview
              </h1>
              <div className="flex flex-row items-center mt-6 space-x-4">
                <Button className="bg-[#FFB70F] hover:bg-yellow-400 rounded-3xl text-black text-md lg:text-md">
                  Population
                </Button>
                <h2 className="text-xl lg:text-md text-center">Age</h2>
              </div>
              <div className="flex flex-row justify-between items-center mt-10">
                <h2 className="text-sm lg:text-lg">
                  Top 10 most populated Districts of Adhikari
                </h2>
                <Link href="/">
                  <h1 className="hover:underline font-medium font-semibold lg:text-lg text-md">
                    View All
                  </h1>
                </Link>
              </div>
              <div className="flex flex-wrap mt-16 -mx-4 pb-16">
                {[...Array(10)].map((_, index) => (
                  <div key={index} className="w-1/2 md:w-1/5 p-4">
                    <div className="bg-[#183760] h-[100px] w-[150px] rounded-lg flex flex-col justify-center items-center">
                      <span className="text-white text-lg font-semibold">
                        152
                      </span>
                      <span className="text-white text-lg font-semibold">
                        District 1
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        <section>
          <div className="bg-[#FFB70F]  py-6">
            <GetApp />
          </div>
        </section>
        <section>
          <div className=" 2xl:container px-8 sm:px-10 lg:px-16 py-10 mt-[100px]">
            <div className="mb-8 flex flex-row justify-between items-center">
              <h1 className="text-xl lg:text-4xl font-bold text-center lg:text-left">
                Kulthan Mandir
              </h1>
              <div className="relative rounded-lg mb-4 shadow-lg">
                <input
                  className="w-full sm:w-[200px] lg:w-[300px] h-12 mt-4 border-2 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-[#FFFFFF] focus:border-white text-sm bg-white"
                  placeholder="Search your Bansaj"
                />
                <Search
                  className="absolute right-4 top-8 text-blue-800"
                  size={18}
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-10">
              <Image
                src="/home/mandir.svg"
                alt="Mandir"
                width={400}
                height={400}
              />
              <div className="flex flex-col items-start lg:items-start text-left mt-4 lg:text-left space-y-4">
                <h1 className="text-xl lg:text-3xl font-bold">
                  Kulthan Mandir Name
                </h1>
                <p className="flex items-center mt-2 text-sm lg:text-lg text-gray-700">
                  <MapPin className="mr-2 text-green-600" /> Kadaghari,
                  Kathmandu
                </p>
                <p className="mt-4 text-sm lg:text-sm leading-relaxed text-justify">
                  Lorem ipsum dolor sit amet consectetur. Massa ullamcorper amet
                  nunc cras nisl auctor et. Purus id ultrices nulla vulputate
                  dictumst dictumst mauris. Lorem ipsum dolor sit amet
                  consectetur. Massa ullamcorper amet nunc cras nisl auctor et.
                  Purus id ultrices nulla vulputate dictumst dictumst mauris.
                  Lorem ipsum dolor sit amet consectetur. Massa ullamcorper amet
                  nunc cras nisl auctor et. Purus id ultrices nulla vulputate
                  dictumst dictumst mauris. Lorem ipsum dolor sit amet
                  consectetur. Massa ullamcorper amet nunc cras nisl auctor et.
                  Purus id ultrices nulla vulputate dictumst dictumst mauris.
                  Lorem ipsum dolor sit amet consectetur. Massa ullamcorper amet
                  nunc cras nisl auctor et. Purus id ultrices nulla vulputate
                  dictumst dictumst mauris. Lorem ipsum dolor sit amet
                  consectetur. Massa ullamcorper amet nunc cras nisl auctor et.
                  Purus id ultrices nulla vulputate dictumst dictumst mauris.
                  Lorem ipsum dolor sit amet consectetur. Massa ullamcorper amet
                  nunc cras nisl auctor et. Purus id ultrices nulla vulputate
                  dictumst dictumst mauris.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default page;
