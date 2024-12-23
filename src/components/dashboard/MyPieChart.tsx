import React, { useCallback, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { name: "कोशी प्रदेश", value: 14 },
  { name: "बागमती प्रदेश", value: 4 },
  { name: "मधेश प्रदेश", value: 5 },
  { name: "कोशी प्रदेश", value: 14 },
  { name: "बागमती प्रदेश", value: 4 },
  { name: "मधेश प्रदेश", value: 5 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function MyPieChart() {
  return (
    <div>
      <h1 className="p-4 text-2xl font-medium">
        Our family in different Province
      </h1>
      <div
        className="h-[500px] rounded-3xl pb-2"
        style={{ background: "url(/dashboard/pie.svg)" }}
      >
        <ResponsiveContainer height="100%" width="100%">
          <PieChart width={500} height={500}>
            <Pie
              data={data}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={150}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend className="text-xs" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
