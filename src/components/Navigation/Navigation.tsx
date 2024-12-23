"use client";
import { Button } from "../ui/button";
import Link from "next/link";
import "./Navigation.css";

import { publicMenu } from "./menus";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useParams, usePathname } from "next/navigation";

const Navigation = () => {
  const { lang } = useParams();
  const [mobileNav, setMobileNav] = useState(false);
  const pathname = usePathname();
  return (
    <>
      {/* 
      <MobileMenu lang={lang} state={mobileNav} setState={setMobileNav} /> */}
      <nav className="shadow-b sticky top-0 z-50 flex h-16 items-center justify-between overflow-hidden bg-[rgba(255,255,255,0.5)] pl-8 pr-2 shadow-md backdrop-blur xl:px-12">
        <Link
          href="/"
          className="flex cursor-pointer items-center justify-center gap-2"
        >
          <img alt="" src="/icons/logo.svg" height={60} width={60} />
          <span className="flex flex-col font-semibold">
            {lang === "en"
              ? "Thadarai Adhikari Sewa Samaj"
              : `ठाडाराई अधिकारी सेवा समाज , नेपाल`}
          </span>
        </Link>
        <ul className="hidden items-center gap-16 xl:flex">
          {publicMenu[lang as keyof typeof publicMenu].map(
            (menu: any, idx: number) => (
              <li key={idx}>
                <Link
                  href={menu.to}
                  className={`link cursor-pointer`}
                  // spy
                >
                  {menu.title}
                </Link>
              </li>
            )
          )}
          <LanguageSwitcher className="hidden md:block" />
          {/* token?.length !== 0 ? (
            <Button className="px-8 hover:bg-blue-800" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          ) : (
            <Button className="px-8 hover:bg-blue-800" asChild>
              <Link href="/signin">Login</Link>
            </Button>
          ) */}
          {
            <Button className="px-8 hover:bg-blue-800" asChild>
              <Link onClick={() => setMobileNav(!mobileNav)} href="/signin">
                Login
              </Link>
            </Button>
          }
        </ul>

        {pathname !== "/signin" && (
          <Button className="px-8 hover:bg-blue-800 xl:hidden" asChild>
            <Link href="/signin">Login</Link>
          </Button>
        )}
      </nav>
    </>
  );
};

export default Navigation;
