import React from "react";
import Image from "next/image";

const Committee = [
  {
    name: "Rajesh Hamal",
    role: "अध्यक्ष",
    phone: "9848000000",
    image: "/dummy/boy.jpg",
  },
  {
    name: "Rajesh Hamal",
    role: "अध्यक्ष",
    phone: "9848000000",
    image: "/dummy/boy.jpg",
  },
  {
    name: "Rajesh Hamal",
    role: "अध्यक्ष",
    phone: "9848000000",
    image: "/dummy/boy.jpg",
  },
  {
    name: "Rajesh Hamal",
    role: "अध्यक्ष",
    phone: "9848000000",
    image: "/dummy/boy.jpg",
  },
  {
    name: "Rajesh Hamal",
    role: "अध्यक्ष",
    phone: "9848000000",
    image: "/dummy/boy.jpg",
  },
  {
    name: "Rajesh Hamal",
    role: "अध्यक्ष",
    phone: "9848000000",
    image: "/dummy/boy.jpg",
  },
  {
    name: "Rajesh Hamal",
    role: "अध्यक्ष",
    phone: "9848000000",
    image: "/dummy/boy.jpg",
  },
  {
    name: "Rajesh Hamal",
    role: "अध्यक्ष",
    phone: "9848000000",
    image: "/dummy/boy.jpg",
  },
];

export default function Page() {
  return (
    <div className="2xl:container mx-auto px-4 sm:px-8 my-8 py-0">
      <div className="text-left ">
        <div className="rounded-lg ">
          <h1 className="text-4xl font-semibold ">Banshwali Committee</h1>
        </div>

        <div className="flex relative mt-16  items-center  lg:items-start">
          <div className="text-center lg:text-left">
            <div className="items-start lg:text-left text-center ">
              <h1 className="text-xl font-medium text-center mb-1">अध्यक्ष</h1>
              <Image
                className="rounded-lg"
                src="/dummy/boy.jpg"
                alt="literature collection"
                width={200}
                height={200}
              />
              <h2 className="text-lg text-center font-medium mt-4">
                Rajesh Hamal
              </h2>
              <p className="mb-8 lg:text-center text-muted-foreground">
                9848000000
              </p>
            </div>
          </div>
        </div>
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {Committee.map((item, index) => (
            <div key={index} className="px-4">
              <div className="flex relative mt-8 justify-center">
                <div className="text-center lg:text-left">
                  <div>
                    <h1 className="text-xl font-medium text-center mb-1">
                      {item.role}
                    </h1>
                    <Image
                      className="rounded-lg"
                      src={item.image}
                      alt="literature collection"
                      width={200}
                      height={200}
                    />
                    <h2 className=" text-sm sm:text-lg text-center font-medium mt-4">
                      {item.name}
                    </h2>
                    <p className="mb-8 text-muted-foreground text-sm sm:text-base lg:text-center">
                      {item.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
