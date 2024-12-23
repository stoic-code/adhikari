"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Filter, Plus, Search } from "lucide-react";
import React, { useState } from "react";
// import CardWithImgCircle from "@/components/CardWithImgCircle";
// import { useQuery } from "react-query";
// import YogdanPopup from "./YogdanPopup";

// import { dictionary } from "./dictionary.ts";
// import { getRequest } from "@/lib/requests";
// import { useAuth } from "@/hooks/useAuth";

import CardWithImgCircle from "@/components/yogdan/CardWithImgCircle";
import YogdanPopup from "@/components/yogdan/YogdanPopup";
import { useGetYogdans } from "@/hooks/query/yogdan.query";
import PageLoadingUI from "@/components/PageLoadingUI";
import YogdanGrid from "@/components/yogdan/YogdanGrid";
import { dictionary } from "../../dictionary";

const page = ({ params }: { params: { lang: string; id: string } }) => {
  const { lang, id } = params;
  const { data, isLoading } = useGetYogdans();

  console.log("yogdanss", data);
  //   const { token } = useAuth();
  const dict = dictionary[lang as keyof typeof dictionary];
  const [query, setParams] = useState({
    name: "",
    type: "",
  });

  //   const { data } = useQuery("yogdans", () =>
  //     getRequest({ endpoint: `/user/yogdan`, token })
  //   );

  //   const handleTabChange = (type: string) => {
  //     setParams({ ...query, type });
  //   };

  //   const generateBorder = (type: string) => {
  //     if (type === query.type) return "border-b-2 border-primary";
  //   };

  //   const filteredData =
  //     query.type === "" ? data : data?.filter((d: any) => d.type === query.type);

  if (isLoading) return <PageLoadingUI />;
  const { image, description, name } = data;

  return (
    <section className="">
      <div>
        <YogdanGrid data={data} />
      </div>
    </section>
  );
};

export default page;
