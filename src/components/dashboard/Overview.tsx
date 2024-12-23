"use client";
import React, { useState } from "react";
import BarDiagram from "./overview/BarDiagram";
import DistrictAdhikari from "./overview/DistrictAdhikari";
import { cn } from "@/lib/utils";
import PieChartPopulation from "./PieChartPopulation";
import MyPieChart from "./MyPieChart";
import { useMediaQuery } from "@uidotdev/usehooks";
import DistrictWise from "./Districtwise";

enum tabEnum {
  BarDiagram = "bardiagram",
  Population = "population",
  Piechart = "piechart",
}

export default function Overview() {
  const [tab, setTab] = useState<tabEnum>(tabEnum.Piechart);
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 900px) and (max-width : 1800px)"
  );
  return (
    <div>
      <div className="space-y-8">
        <div className=" flex justify-between items-center text-black text-2xl font-semibold">
          <h2>Overview</h2>
        </div>
        {/* TABS */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setTab(tabEnum.Piechart)}
            className={cn(
              " font-medium transition-all delay-100 duration-300  px-2 py-1 rounded-full",
              tab === tabEnum.Piechart && "bg-yellow-500"
            )}
          >
            Piechart
          </button>
          <button
            onClick={() => setTab(tabEnum.Population)}
            className={cn(
              " font-medium transition-all  delay-100 duration-300 px-2 py-1 rounded-full",
              tab === tabEnum.Population && "bg-yellow-500"
            )}
          >
            Population
          </button>
          <button
            onClick={() => setTab(tabEnum.BarDiagram)}
            className={cn(
              " font-medium transition-all delay-100 duration-300  px-2 py-1 rounded-full",
              tab === tabEnum.BarDiagram && "bg-yellow-500"
            )}
          >
            Age
          </button>
        </div>
        <div>
          {tab === tabEnum.Population ? (
            <DistrictWise />
          ) : tab === tabEnum.BarDiagram ? (
            <BarDiagram />
          ) : tab === tabEnum.Piechart ? (
            <MyPieChart />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
