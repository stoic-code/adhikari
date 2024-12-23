"use client";
import React from "react";
import {
  Contact,
  GitMerge,
  LayoutDashboard,
  LogOut,
  Network,
  UserCog,
  HelpingHand,
  CircleEllipsis,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import Image from "next/image";
import { dictionary } from "./dictionary";
import { useSession } from "@/providers/SessionProvider";
import { logout } from "@/actions/auth.action";
import { useParams } from "next/navigation";

const SideNav = () => {
  const {
    session: { user },
  } = useSession();
  const { lang } = useParams();

  const dict = dictionary[lang as keyof typeof dictionary];
  const pathname = usePathname();

  return (
    <div className="hidden w-64 flex-col items-center border-r bg-white py-4 xl:flex">
      <Image
        src={user?.imgurl ? user.imgurl : "/avatar.jpg"}
        width={500}
        height={500}
        alt="user image"
        className="h-36 w-36 rounded-full border-2 border-primary object-cover"
      />
      <input type="file" className="hidden" />
      <h2
        style={{ fontWeight: 500 }}
        className="mb-8 mt-2 line-clamp-2 px-2 text-center text-xl text-black"
      >
        {user?.name}
      </h2>

      <ul className={cn("w-full text-sm", lang === "np" ? "text-base" : "")}>
        <li>
          <Link
            className={cn(
              "flex cursor-pointer gap-1 border-b px-4 py-3 transition-all duration-100 hover:bg-sky-100",
              pathname === "/profile" ? "bg-sky-100" : null
            )}
            href="/profile"
          >
            <LayoutDashboard size={20} />
            {dict.dashboard}
          </Link>
        </li>

        <li>
          <Link
            className={cn(
              "flex cursor-pointer gap-1 border-b px-4 py-3 transition-all duration-100 hover:bg-sky-100",
              pathname.startsWith("/profile/edit") ? "bg-sky-100" : null
            )}
            href="/profile/edit"
          >
            <UserCog size={20} />
            {dict.editProfile}
          </Link>
        </li>

        <li>
          <Link
            className={cn(
              "flex cursor-pointer gap-1 border-b px-4 py-3 transition-all duration-100 hover:bg-sky-100",
              pathname.startsWith("/profile/idcard") ? "bg-sky-100" : null
            )}
            href="/profile/idcard"
          >
            <Contact size={20} />
            {dict.idcard}
          </Link>
        </li>

        <li>
          <Link
            className={cn(
              "flex cursor-pointer gap-1 border-b px-4 py-3 transition-all duration-100 hover:bg-sky-100",
              pathname.startsWith("/profile/merge") ? "bg-sky-100" : null
            )}
            href="/profile/merge"
          >
            <GitMerge size={20} />
            {dict.mergeRequests}
          </Link>
        </li>
        <li>
          {user?.role === "editor" && (
            <Link
              className={cn(
                "flex cursor-pointer gap-1 border-b px-4 py-3 transition-all duration-100 hover:bg-sky-100",
                pathname.startsWith("/profile/tree-edit") ? "bg-sky-100" : null
              )}
              href="/profile/tree-edit/add"
            >
              <Network size={20} />
              {dict.editTree}
            </Link>
          )}
        </li>

        <li>
          <Link
            className={cn(
              "flex cursor-pointer gap-1 border-b px-4 py-3 transition-all duration-100 hover:bg-sky-100",
              pathname.startsWith("/profile/contributions")
                ? "bg-sky-100"
                : null
            )}
            href="/profile/contributions"
          >
            <HelpingHand size={20} />
            {dict.contributions}
          </Link>
        </li>
        <li>
          <Link
            className={cn(
              "flex cursor-pointer gap-1 border-b px-4 py-3 transition-all duration-100 hover:bg-sky-100",
              pathname.startsWith("/profile/others") ? "bg-sky-100" : null
            )}
            href="/profile/others"
          >
            <CircleEllipsis size={20} />
            {dict.others}
          </Link>
        </li>

        <AlertDialog>
          <AlertDialogTrigger className="w-full">
            <li className="flex cursor-pointer gap-1 px-4 py-3 text-red-500 transition-all duration-100 hover:bg-sky-100">
              <LogOut size={20} />
              <span className="">Log Out</span>
            </li>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={async () => {
                  sessionStorage.clear();

                  await logout();
                }}
                className="bg-destructive hover:bg-red-600"
              >
                Logout
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ul>
    </div>
  );
};

export default SideNav;
