import React from "react";
import Image from "next/image";

const GetApp = () => {
  return (
    <section id="get_the_app" className="my-24 relative ">
      <div className="container">
        <Image
          className="absolute right-0 top-[-5rem] hidden xl:block"
          alt="svg"
          src={"/getApp/DotsGrid.svg"}
          width={150}
          height={150}
        />

        <div className="grid grid-cols-1 xl:grid-cols-3">
          <Image
            className="col-span-1 max-w-[200px] rounded-md  xl:block hidden"
            alt="svg"
            src={"/getApp/getApp.svg"}
            height={100}
            width={1000}
          />
          <div className="flex flex-col md:pt-10 gap-8 lg:gap-16 col-span-2 max-w-6xl">
            <h3 className="text-3xl md:text-4xl font-semibold">
              Download the app today to get early access
            </h3>
            <div className="flex flex-col items-center md:flex-row gap-4">
              <Image src={"/getApp/QR.svg"} height={150} width={200} alt="qr" />
              <div>
                <p className="">
                  "Enhance your Digital Banshawali experience with our
                  convenient and feature-rich mobile app. Download it now to
                  unlock a world of seamless access, personalized content, and
                  exclusive offers, right at your fingertips. Stay connected,
                  stay updated, and make the most of your Digital Banshawali
                  journey – all through our user-friendly app. Get started today
                  and discover a new level of convenience!"
                </p>
                <div className="flex justify-center mt-8 md:justify-end">
                  <Image
                    src={"/getApp/StoreLogo.svg"}
                    width={300}
                    height={150}
                    alt="store logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
