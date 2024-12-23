"use client";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import { dictionary } from "../dictionary";
import YogdanHeader from "@/components/yogdan/YogdanHeader";

export default function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <div className="mx-2 my-8 min-h-screen md:mx-auto md:w-[90%]">
      <div>
        <YogdanHeader />
      </div>
      {children}
    </div>
  );
}
