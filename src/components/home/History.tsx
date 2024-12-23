"use client";
import {
  AnimatePresence,
  inView,
  motion,
  useInView,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

export default function History() {
  const firstpara = useRef(null);
  const secondpara = useRef(null);
  const thirdpara = useRef(null);

  const inViewFirst = useInView(firstpara);
  const inViewSecond = useInView(secondpara);
  const inViewThird = useInView(thirdpara);
  console.log("invieww", inView);

  //   useEffect(() => {
  //     inView("secondpara", () => {
  //       setSecond(true);
  //       console.log("seconf hai", second);
  //     });
  //   }, [second]);
  console.log("first hai", inViewFirst);
  console.log("seconf hai", inViewSecond);
  console.log("seconf hai", inViewThird);

  function handleDownload() {
    const link = document.createElement("a");

    link.href = "/dashboard/girl.jpg";
    link.download = "SheIsGirl.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div>
      {" "}
      <section className="bg-blue-50">
        <div className=" 2xl:container  lg:p-12 p-4 ">
          <div className="flex  relative flex-col md:items-start md:flex-row gap-6  xl:gap-6 mt-6 mb-6  md:min-h-screen  ">
            <div className="absolute  md:sticky inset-0   top-20  left-0 z-20">
              {/* <AnimatePresence> */}
              {inViewFirst && (
                <motion.div
                  key={"first"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.5 } }}
                  exit={{ opacity: 0 }}
                  // transition={{ delay: 0.5 }}
                  className=" sticky top-0 left-0 z-10 order-2 lg:order-1 flex justify-center lg:justify-start"
                >
                  {inViewFirst && (
                    <div className=" absolute inset-0 md:hidden bg-white/70 "></div>
                  )}

                  <Image
                    src="/home/history.svg"
                    alt="History"
                    className="md:w-[250px] lg:w-[300px] lg:h-[300px] h-[100vh]  w-full     md:h-[250px] object-cover"
                    width={300}
                    height={300}
                  />
                </motion.div>
              )}
              {inViewSecond && !inViewFirst && (
                <motion.div
                  key={"second"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.5 } }}
                  exit={{ opacity: 0 }}
                  // transition={{ delay: 0.5 }}
                  className="sticky    top-0 left-0 z-10 order-2 lg:order-1 flex justify-center lg:justify-start"
                >
                  {inViewSecond && !inViewFirst && (
                    <div className=" md:hidden absolute inset-0  bg-white/70 "></div>
                  )}
                  <Image
                    src="/dashboard/girl.jpg"
                    alt="History"
                    className="lg:w-[300px] md:w-[250px] md:h-[250px] h-[100vh] w-full      lg:h-[300px] object-cover"
                    width={300}
                    height={300}
                  />
                </motion.div>
              )}
              {inViewThird && !inViewSecond && (
                <motion.div
                  key={"third"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  // transition={{ delay: 0.5 }}
                  className="sticky    top-0 left-0 z-10 order-2 lg:order-1 flex justify-center lg:justify-start"
                >
                  {inViewThird && !inViewSecond && (
                    <div className="md:hidden absolute inset-0  bg-white/70 "></div>
                  )}

                  <Image
                    src="/dashboard/temple3.jpg"
                    alt="History"
                    className="md:w-[250px] lg:w-[300px] lg:h-[300px] h-[100vh]  w-full     md:h-[250px] object-cover"
                    width={300}
                    height={300}
                  />
                </motion.div>
              )}
              {/* </AnimatePresence> */}
            </div>

            <div className=" flex-1 order-1 lg:order-2 overflow-hidden">
              <div ref={firstpara}>
                <h1 className="text-4xl  relative z-40  lg:text-5xl font-bold text-center lg:text-left text-black">
                  History
                </h1>
                <p className=" mt-12 text-sm lg:text-base text-justify  relative z-40 text-black  lg:text-left">
                  The surname "Adhikari" carries significant historical and
                  cultural importance in Nepal and India. Deriving from the
                  Sanskrit word "Adhikara," meaning "authority" or "office," it
                  communities. Indian Adhikaris have been notable in areas such
                  as social reform, education, and politics, shaping the
                  cultural and intellectual landscapes of their regions.
                  Throughout history, many Adhikaris have distinguished meaning
                  "authority" or "office," it traditionally signifies someone
                  holding a position of power or responsibility. In Nepal, the
                  Adhikari surname is prominent among the Brahmin community,
                  known as Bahun, and individuals with this surname have
                  historically engaged in religious, scholarly, and
                  administrative roles. They have significantly influenced
                  Nepalese society through contributions to politics, education,
                  and culture. In India, the Adhikari surname is found among
                  Bengali, Assamese, and other North Indian communities. Indian
                  Adhikaris have been notable in areas such as social reform,
                  education, and politics, shaping the cultural and intellectual
                  or responsibility. In Nepal, the Adhikari surname is prominent
                  among the Brahmin community, known as Bahun, and individuals
                  with this surname have historically engaged in religious,
                  scholarly, and administrative roles. They have significantly
                  influenced Nepalese society through contributions to politics,
                  education, and culture. In India, the Adhikari surname is
                  found among Bengali, Assamese, and other North Indian
                  communities. Indian Adhikaris have been notable in areas such
                  as social reform, education, and politics, shaping the
                  cultural and intellectual landscapes of their regions.
                  Throughout history, many Adhikaris have distinguished themse
                  Nepalese society through contributions to politics, education,
                  and culture. In India, the Adhikari surname is found among
                  Bengali, Assamese, and other North Indian communities. Indian
                  Adhikaris have been notable in areas such as social reform,
                  education, and politics, shaping the cultural and intellectual
                  landscapes of their regions. Throughout history, many
                  Adhikaris have distinguished themselves as leaders, scholars,
                  and reformers, leaving a lasting impact on their communities.
                  The surname "Adhikari" carries significant historical and
                  cultural importance in Nepal and India. Deriving from the
                  Sanskrit word "Adhikara," meaning "authority" or "office," it
                  traditionally signifies someone holding a position of power or
                  responsibility. In Nepal, the Adhikari surname is prominent
                  among the Brahmin community, known as Bahun, and individuals
                  with this surname have historically engaged in religious,
                  scholarly, and administrative roles. They have significantly
                  influenced Nepalese society through contributions to politics,
                  education, and culture. In India, the Adhikari surname is
                  Throughout history, many Adhikaris have distinguished thems
                  communities. Indian Adhikaris have been notable in areas such
                  as social reform, education, and politics, shaping the
                  cultural and intellectual landscapes of their regions.
                  Throughout history, many Adhikaris have distinguished
                  themselves as leaders, scholars, and reformers, leaving a
                  lasting impact on their communities. The surname "Adhikari"
                  carries significant historical and cultural importance in
                  Nepal and India. Deriving from the Sanskrit word "Adhikara,"
                  meaning "authority" or "office," it traditionally signifies
                  someone holding a position of power or responsibility. In
                  Nepal, the Adhikari surname is prominent among the Brahmin
                  community, known as Bahun, and individuals with this surname
                  have historically engaged in religious, scholarly, and
                  Bengali, Assamese, and other North Indian communities. Indian
                  Adhikaris have been notable in areas such as social reform,
                  education, and politics, shaping the cultural and intellectual
                  landscapes of their regions. Throughout history, many
                  Adhikaris have distinguished themselves as leaders, scholars,
                  and reformers, leaving a lasting impact on their communities.
                </p>
              </div>

              <div ref={secondpara}>
                <h1 className="text-4xl mt-12  text-black z-40 relative lg:text-5xl font-bold text-center lg:text-left">
                  World War Two
                </h1>
                <p className="thirdpara mt-12 text-sm lg:text-base text-justify  relative z-40 text-black  lg:text-left">
                  The surname "Adhikari" carries significant historical and
                  cultural importance in Nepal and India. Deriving from the
                  Sanskrit word "Adhikara," meaning "authority" or "office," it
                  communities. Indian Adhikaris have been notable in areas such
                  as social reform, education, and politics, shaping the
                  cultural and intellectual landscapes of their regions.
                  Throughout history, many Adhikaris have distinguished meaning
                  "authority" or "office," it traditionally signifies someone
                  holding a position of power or responsibility. In Nepal, the
                  Adhikari surname is prominent among the Brahmin community,
                  known as Bahun, and individuals with this surname have
                  historically engaged in religious, scholarly, and
                  administrative roles. They have significantly influenced
                  Nepalese society through contributions to politics, education,
                  and culture. In India, the Adhikari surname is found among
                  Bengali, Assamese, and other North Indian communities. Indian
                  Adhikaris have been notable in areas such as social reform,
                  education, and politics, shaping the cultural and intellectual
                  or responsibility. In Nepal, the Adhikari surname is prominent
                  among the Brahmin community, known as Bahun, and individuals
                  with this surname have historically engaged in religious,
                  scholarly, and administrative roles. They have significantly
                  influenced Nepalese society through contributions to politics,
                  education, and culture. In India, the Adhikari surname is
                  found among Bengali, Assamese, and other North Indian
                  communities. Indian Adhikaris have been notable in areas such
                  as social reform, education, and politics, shaping the
                  cultural and intellectual landscapes of their regions.
                  Throughout history, many Adhikaris have distinguished themse
                  Nepalese society through contributions to politics, education,
                  and culture. In India, the Adhikari surname is found among
                  Bengali, Assamese, and other North Indian communities. Indian
                  Adhikaris have been notable in areas such as social reform,
                  education, and politics, shaping the cultural and intellectual
                  landscapes of their regions. Throughout history, many
                  Adhikaris have distinguished themselves as leaders, scholars,
                  and reformers, leaving a lasting impact on their communities.
                  The surname "Adhikari" carries significant historical and
                  cultural importance in Nepal and India. Deriving from the
                  Sanskrit word "Adhikara," meaning "authority" or "office," it
                  traditionally signifies someone holding a position of power or
                  responsibility. In Nepal, the Adhikari surname is prominent
                  among the Brahmin community, known as Bahun, and individuals
                  with this surname have historically engaged in religious,
                  scholarly, and administrative roles. They have significantly
                  influenced Nepalese society through contributions to politics,
                  education, and culture. In India, the Adhikari surname is
                  Throughout history, many Adhikaris have distinguished thems
                  communities. Indian Adhikaris have been notable in areas such
                  as social reform, education, and politics, shaping the
                  cultural and intellectual landscapes of their regions.
                  Throughout history, many Adhikaris have distinguished
                  themselves as leaders, scholars, and reformers, leaving a
                  lasting impact on their communities. The surname "Adhikari"
                  carries significant historical and cultural importance in
                  Nepal and India. Deriving from the Sanskrit word "Adhikara,"
                  meaning "authority" or "office," it traditionally signifies
                  someone holding a position of power or responsibility. In
                  Nepal, the Adhikari surname is prominent among the Brahmin
                  community, known as Bahun, and individuals with this surname
                  have historically engaged in religious, scholarly, and
                  Bengali, Assamese, and other North Indian communities. Indian
                  Adhikaris have been notable in areas such as social reform,
                  education, and politics, shaping the cultural and intellectual
                  landscapes of their regions. Throughout history, many
                  Adhikaris have distinguished themselves as leaders, scholars,
                  and reformers, leaving a lasting impact on their communities.
                </p>
              </div>

              <div ref={thirdpara}>
                <h1 className="text-4xl mt-12  lg:text-5xl relative z-40 font-bold text-center lg:text-left text-black">
                  Cinema
                </h1>
                <p className="thirdpara mt-12 text-sm lg:text-base text-justify  relative z-40 text-black  lg:text-left">
                  The surname "Adhikari" carries significant historical and
                  cultural importance in Nepal and India. Deriving from the
                  Sanskrit word "Adhikara," meaning "authority" or "office," it
                  communities. Indian Adhikaris have been notable in areas such
                  as social reform, education, and politics, shaping the
                  cultural and intellectual landscapes of their regions.
                  Throughout history, many Adhikaris have distinguished meaning
                  "authority" or "office," it traditionally signifies someone
                  holding a position of power or responsibility. In Nepal, the
                  Adhikari surname is prominent among the Brahmin community,
                  known as Bahun, and individuals with this surname have
                  historically engaged in religious, scholarly, and
                  administrative roles. They have significantly influenced
                  Nepalese society through contributions to politics, education,
                  and culture. In India, the Adhikari surname is found among
                  Bengali, Assamese, and other North Indian communities. Indian
                  Adhikaris have been notable in areas such as social reform,
                  education, and politics, shaping the cultural and intellectual
                  or responsibility. In Nepal, the Adhikari surname is prominent
                  among the Brahmin community, known as Bahun, and individuals
                  with this surname have historically engaged in religious,
                  scholarly, and administrative roles. They have significantly
                  influenced Nepalese society through contributions to politics,
                  education, and culture. In India, the Adhikari surname is
                  found among Bengali, Assamese, and other North Indian
                  communities. Indian Adhikaris have been notable in areas such
                  as social reform, education, and politics, shaping the
                  cultural and intellectual landscapes of their regions.
                  Throughout history, many Adhikaris have distinguished themse
                  Nepalese society through contributions to politics, education,
                  and culture. In India, the Adhikari surname is found among
                  Bengali, Assamese, and other North Indian communities. Indian
                  Adhikaris have been notable in areas such as social reform,
                  education, and politics, shaping the cultural and intellectual
                  landscapes of their regions. Throughout history, many
                  Adhikaris have distinguished themselves as leaders, scholars,
                  and reformers, leaving a lasting impact on their communities.
                  The surname "Adhikari" carries significant historical and
                  cultural importance in Nepal and India. Deriving from the
                  Sanskrit word "Adhikara," meaning "authority" or "office," it
                  traditionally signifies someone holding a position of power or
                  responsibility. In Nepal, the Adhikari surname is prominent
                  among the Brahmin community, known as Bahun, and individuals
                  with this surname have historically engaged in religious,
                  scholarly, and administrative roles. They have significantly
                  influenced Nepalese society through contributions to politics,
                  education, and culture. In India, the Adhikari surname is
                  Throughout history, many Adhikaris have distinguished thems
                  communities. Indian Adhikaris have been notable in areas such
                  as social reform, education, and politics, shaping the
                  cultural and intellectual landscapes of their regions.
                  Throughout history, many Adhikaris have distinguished
                  themselves as leaders, scholars, and reformers, leaving a
                  lasting impact on their communities. The surname "Adhikari"
                  carries significant historical and cultural importance in
                  Nepal and India. Deriving from the Sanskrit word "Adhikara,"
                  meaning "authority" or "office," it traditionally signifies
                  someone holding a position of power or responsibility. In
                  Nepal, the Adhikari surname is prominent among the Brahmin
                  community, known as Bahun, and individuals with this surname
                  have historically engaged in religious, scholarly, and
                  Bengali, Assamese, and other North Indian communities. Indian
                  Adhikaris have been notable in areas such as social reform,
                  education, and politics, shaping the cultural and intellectual
                  landscapes of their regions. Throughout history, many
                  Adhikaris have distinguished themselves as leaders, scholars,
                  and reformers, leaving a lasting impact on their communities.
                  cultural and intellectual landscapes of their regions.
                  Throughout history, many Adhikaris have distinguished
                  themselves as leaders, scholars, and reformers, leaving a
                  lasting impact on their communities. The surname "Adhikari"
                  carries significant historical and cultural importance in
                  Nepal and India. Deriving from the Sanskrit word "Adhikara,"
                  meaning "authority" or "office," it traditionally signifies
                  someone holding a position of power or responsibility. In
                  Nepal, the Adhikari surname is prominent among the Brahmin
                  community, known as Bahun, and individuals with this surname
                  have historically engaged in religious, scholarly, and
                  Bengali, Assamese, and other North Indian communities. Indian
                  Adhikaris have been notable in areas such as social reform,
                  education, and politics, shaping the cultural and intellectual
                  landscapes of their regions. Throughout history, many
                  Adhikaris have distinguished themselves as leaders, scholars,
                  and reformers, leaving a lasting impact on their communities.
                </p>
              </div>
              <div
                onClick={handleDownload}
                className=" relative z-40 mb-4 mr-2 cursor-pointer flex items-center justify-end mt-4 gap-2"
              >
                <Download size={30} />
                <Button className="bg-[#FFB70F] hover:bg-yellow-400 font-semibold text-black px-8 py-6 text-lg ">
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
