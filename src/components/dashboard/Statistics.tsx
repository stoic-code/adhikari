import { Cake, CakeIcon, Frown, GitFork, Skull } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Statistics() {
  // return (
  //   <div>
  //     {" "}
  //     <div className="grid   grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  //       <div className="bg-primary text-white space-y-8 rounded-md w-full p-4  px-4 sm:px-10">
  //         <div className=" flex items-center gap-4">
  //           <GitFork size={60} className=" text-[#FFB70F] flex-shrink-0" />
  //           <h2 className=" text-5xl font-semibold">10</h2>
  //         </div>
  //         <p className="  capitalize text-lg">Bansha created</p>
  //       </div>
  //       <div className="bg-primary text-white space-y-8 rounded-md w-full p-4 px-4 sm:px-10">
  //         <div className=" flex items-center gap-4">
  //           <CakeIcon size={60} className=" text-[#FFB70F] flex-shrink-0" />
  //           <h2 className=" text-5xl font-semibold">10</h2>
  //         </div>
  //         <p className="  capitalize text-lg">Birthday</p>
  //       </div>
  //       <div className="bg-primary text-white space-y-8 rounded-md w-full p-4 px-4 sm:px-10">
  //         <div className=" flex items-center gap-4">
  //           <Image
  //             src={"/dashboard/ring.png"}
  //             width={40}
  //             height={40}
  //             alt="ring"
  //             className="20 flex-shrink-0"
  //           />
  //           <h2 className=" text-5xl font-semibold">10</h2>
  //         </div>
  //         <p className="  capitalize text-lg">Anniversary</p>
  //       </div>
  //       <div className="bg-primary text-white space-y-8 rounded-md w-full p-4 px-4 sm:px-10">
  //         <div className=" flex items-center gap-4">
  //           <Skull size={60} className=" text-[#FFB70F] flex-shrink-0" />
  //           <h2 className=" text-5xl font-semibold">10</h2>
  //         </div>
  //         <p className="  capitalize text-lg">Death</p>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="space-y-3">
      <div className="bg-primary/80 text-white flex justify-between max-w-3xl py-4 px-4 rounded-3xl mx-auto">
        <div>
          <span className="text-sm">Bansaj Created</span> : 200
        </div>
        <div>
          <span className="text-sm">Bansaj Created Today</span> : 10
        </div>
      </div>
      <div className="bg-primary/80 text-white flex justify-between max-w-4xl py-4 px-8 rounded-3xl mx-auto">
        <div>
          <div className="flex items-center gap-2 text-2xl">
            <Cake /> 200
          </div>
          <p>Birthday(s)</p>
        </div>
        <div>
          <div className="flex items-center gap-2 text-2xl">
            <Cake /> 50
          </div>
          <p>Anniversary(s)</p>
        </div>
        <div>
          <div className="flex items-center gap-2 text-2xl">
            <Frown /> 10
          </div>
          <p>Death(s)</p>
        </div>
      </div>
    </div>
  );
}
