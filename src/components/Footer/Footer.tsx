"use client";
import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useParams, usePathname } from "next/navigation";
import { dictionary } from "./dictionary";
import { engNumToNepNum } from "@/lib/date";
import { cn } from "@/lib/utils";

const Footer = ({ lang }: { lang: string }) => {
  console.log(lang);
  console.log(dictionary);
  const dict = dictionary[lang as keyof typeof dictionary];
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Hide footer
  const routes = [
    "/family",
    "/banshwali",
    "/profile/merge/view",
    "/banshwali/q",
    "/family/merge",
    "/family/text",
  ];

  if (routes.includes(pathname) || pathname.startsWith("/family")) return null;

  return (
    <footer className="relative w-full">
      <div
        style={{
          background: "#13378b url(/footer-bg.png) no-repeat 0% 100%/100% auto",
          backgroundBlendMode: "multiply",
        }}
        className="bottom-0 left-0 right-0 pt-14"
      >
        <div
          className={cn(
            "w-full px-4 pb-12 text-white md:px-16",
            isHomePage ? "pt-20" : "pt-10"
          )}
        >
          <div className="flex flex-col justify-between gap-y-8 xl:flex-row">
            <div className="flex flex-col items-start gap-4 md:flex-row">
              <div className="flex items-center gap-2">
                <img
                  className="w-[70px] rounded-full md:w-[100px]"
                  height={100}
                  width={100}
                  src="/icons/logo.svg"
                  alt="logo"
                />
                <h1 className="mb-4 text-xl font-bold md:hidden">
                  {lang === "en"
                    ? "Thadarai Adhikari Sewa Samaj"
                    : `ठाडाराई अधिकारी सेवा समाज , नेपाल`}
                </h1>
              </div>
              <div className="flex w-full flex-col  justify-between pt-2 text-xl md:flex-row xl:flex-col">
                <h1 className="mb-4 hidden font-bold md:block">
                  {lang === "en"
                    ? "Thadarai Adhikari Sewa Samaj"
                    : `ठाडाराई अधिकारी सेवा समाज , नेपाल`}
                </h1>
                <ul className="flex flex-col gap-4 text-sm">
                  <li className="flex gap-2">
                    <MapPin size={16} />
                    उर्लाबारी, मोरंग
                  </li>

                  <li className="flex gap-2">
                    <Phone size={16} />
                    {engNumToNepNum("9851353599")}
                  </li>

                  <li className="flex gap-2">
                    <Mail size={16} />
                    info@metalogic.com.np
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-y-8 md:mx-auto md:flex-row md:gap-8 lg:gap-16 xl:mx-0">
              <div>
                <h3 className="mb-2 text-xl font-semibold">{dict.banshwali}</h3>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="#">{dict.feedback}</Link>
                  </li>
                  <li>
                    <Link href="https://admin.metalogicnepal.com/contributions?approved=true">
                      Admin
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  {dict.help_cneter}
                </h3>
                <ul className="flex flex-col gap-4">
                  <li>
                    <Link href="#">{dict.contact}</Link>
                  </li>
                  <li>
                    <Link href="#">{dict.help_support}</Link>
                  </li>
                  <li>
                    <Link href="#">FAQs</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  {dict.terms_policy}
                </h3>
                <ul className="flex flex-col gap-4">
                  <li>
                    <Link href="#">{dict.privacy_policy}</Link>
                  </li>
                  <li>
                    <Link href="#">{dict.tos}</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">{dict.joinus}</h3>
                <ul className="flex gap-4 text-xs xl:justify-between">
                  <li className="rounded-full border-2 p-2">
                    <Link href="#">
                      <TwitterIcon size={20} />
                    </Link>
                  </li>
                  <li className="rounded-full border-2 p-2">
                    <Link href="#">
                      <FacebookIcon size={20} />
                    </Link>
                  </li>
                  <li className="rounded-full border-2 p-2">
                    <Link href="#">
                      <InstagramIcon size={20} />
                    </Link>
                  </li>
                  <li className="rounded-full border-2 p-2">
                    <Link href="#">
                      <FaWhatsapp size={20} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-between gap-y-2 border-t  border-muted-foreground px-2 py-6  text-xs text-white md:flex-row md:px-8 md:text-sm">
          <span>
            &copy; Copyright 2023{" "}
            <Link
              className="underline"
              target="_blank"
              href="https://metalogic.com.np"
            >
              MetaLogic Software Pvt. Ltd
            </Link>{" "}
            All rights reserved.
          </span>

          <div className="flex gap-4">
            <Link href="https://metalogic.com.np">Terms & Conditions</Link>
            <Link href="https://metalogic.com.np">Privacy Policy</Link>
          </div>

          <span>
            Powered by{" "}
            <Link
              className="underline"
              target="_blank"
              href="https://metalogic.com.np"
            >
              MetaLogic Software Pvt. Ltd
            </Link>{" "}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
