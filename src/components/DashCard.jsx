"use client";

import { BadgeDelta, Card, Metric, Text, DeltaType } from "@tremor/react";
import { wallet } from '../assets'


const kpiData = [
  {
    title: "Total Revenues",
    metric: "$2,129,430",
    delta: "2.5%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Total Transactions",
    metric: "1,520",
    delta: "1.7%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Total Likes",
    metric: "9,721",
    delta: "1.4%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Total Users",
    metric: "9,721",
    delta: "4.24%",
    deltaType: "moderateIncrease",
  },
];

export default function DashCard() {
  return (
    <>
      {kpiData.map((item) => (
        <Card className="flex justify-center w-[48%] p-0 " key={item.title}>
        <div className="py-3 w-[85%] flex flex-col ">
          <div className="w-full">
        <img src={wallet} className='rounded-[50%] w-[20px] h-[20px] bg-[#7FCD93] object-scale-down mb-2'/>
        </div>
      <Text className="!text-xs font-lato w-full">{item.title}</Text>
    <div className="w-full flex items-center justify-between ">
    <Metric className="!text-[13px] !font-700 w-[60%]">{item.metric}</Metric>
        <div className="">
            <BadgeDelta className="flex w-[90%] h-[20px] px-3 " deltaType={item.deltaType} isIncreasePositive={true} size="xs">
      <p className="text-[7px]">{item.delta}</p>
      </BadgeDelta>
      </div>
      </div>
      </div>
   

        </Card>
      ))}
    </>
  );
}
