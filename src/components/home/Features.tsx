"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function Features() {
  const [zIndex1, setZIndex1] = useState(true);
  const [zIndex2, setZIndex2] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setZIndex1((prev) => !prev);
      setZIndex2((prev) => !prev);
    }, 5000); // Change z-index every 2 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      {" "}
      <section className="bg-[#ECF5FB] ">
        <div className="2xl:container  overflow-hidden md:h-[70vh] lg:h-[60vh] h-[70vh]  ">
          <div className=" grid grid-cols-1 gap-8 lg:grid-cols-2 ">
            {/* TEXT PART */}
            <div className="lg:w-1/3 text-left p-4 ml-2 ">
              <div className="lg:text-left text-center  mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold">Features</h1>
              </div>

              <AnimatePresence>
                <div className=" relative">
                  {/* {isVisible && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )} */}

                  <motion.div
                    animate={{
                      opacity: zIndex1 ? 1 : 0,
                      y: zIndex2 ? 10 : 0,

                      transition: { duration: 0.2 },
                    }}
                    className=" whitespace-nowrap   absolute  inset-0"
                  >
                    <h1
                      className={`text-2xl lg:text-3xl font-medium  ease-in-out transition-opacity duration-500  `}
                    >
                      Get your own Certificate
                      {/* {zIndex2 ? informations[0].title : informations[1].title} */}
                    </h1>
                  </motion.div>

                  <motion.div
                    animate={{
                      opacity: zIndex2 ? 1 : 0,
                      y: zIndex2 ? 0 : -10,
                      transition: { duration: 0.2 },
                    }}
                    className=" whitespace-nowrap absolute inset-0 "
                  >
                    <h1
                      className={`text-2xl lg:text-3xl font-medium  ease-in-out transition-opacity duration-500 `}
                    >
                      Get your own ID Card
                      {/* {zIndex2 ? informations[0].title : informations[1].title} */}
                    </h1>
                  </motion.div>
                </div>
              </AnimatePresence>

              <div className="mt-[100px] text-center hidden lg:block lg:text-left">
                <Button className="bg-[#FFB70F] hover:bg-yellow-400 text-black lg:px-8 lg:py-6 text-lg lg:text-xl">
                  Go now
                </Button>
              </div>
            </div>
            {/* IMAGE PART */}
            <div className=" ">
              <div className="    relative left-[20%] lg:left-0  z-20 p-0  h-full w-auto ">
                <motion.div
                  className={` transition-all ease-linear   ${
                    zIndex1
                      ? "z-10 top-[10%] left-[45%] md:left-[25%] lg:left-[50%]  w-[100px]"
                      : "z-40 top-0  left-4 lg:-left-2  w-[900px]  delay-100"
                  }  absolute`}
                >
                  <img
                    src="/home/idCardHigh.png"
                    alt="idCard "
                    className="  w-[100px] sm:w-[150px]   drop-shadow-lg"
                  />
                </motion.div>
                <motion.div
                  className={`  h-[50vh] transition-all    absolute  ${
                    zIndex2
                      ? "z-10 top-[100px] md:top-[150px]  lg:top-[30%]   left-[10%] md:left-[30%] lg:left-[20%] scale-75"
                      : "z-40 delay-75  top-[100px] md:top-[150px] lg:top-[30%]   -left-[10%] md:-left-[8%]  lg:-left-[20%] scale-110"
                  }  `}
                >
                  <img
                    src="/home/myInvitationHigh.png"
                    alt="certificate "
                    className=" w-[200px] sm:w-[300px] lg:w-[400px]   drop-shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
