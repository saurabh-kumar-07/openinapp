import React from "react";
import { Card, Title, DonutChart } from "@tremor/react";

const data = [
  {
    name: "Basic Tees",
    sales: 9800,
    color: "green",
  },
  {
    name: "Custom Short Pants",
    sales: 4567,
    color: "yellow",
  },
  {
    name: "Super Hoodies",
    sales: 3908,
    color: "red",
  },
];

export default function Donut() {
  return (
    <Card className="">
      <div className="flex justify-between items-center">
        <Title>Top Products</Title>
        <p className="text-[7px] font-montserrat text-[#858585]">Aug - Sept 2023</p>
      </div>
      <div className="flex w-full justify-between gap-10 ">
        <DonutChart
          className="mt-3 w-1/2"
          data={data}
          category="sales"
          index="name"
          colors={data.map((item) => item.color)}
        />
        <div className=" w-1/2 flex flex-col justify-center">
          {data.map((item) => (
            <div key={item.name} className="flex items-center mb-2 ">
              <div
                className="w-2 h-2 rounded-full mr-2 mb-4"
                style={{ backgroundColor: item.color }}
              ></div>
              <div>
                <p className="text-[9px] lg:text-[14px] font-montserrat font-700">{item.name}</p>
                <p className="text-xs lg:text-[12px] font-lato font-400 text-[#858585]">{`${(item.sales / 100).toFixed(1)}%`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
