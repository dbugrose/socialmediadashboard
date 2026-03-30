"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ToggleSwitch } from "flowbite-react";
import Facebook1 from "./components/Facebook1";
import X1 from "./components/X1";
import Instagram1 from "./components/Instagram1";
import Youtube1 from "./components/Youtube1";


interface DataInterface {
  id: number;
  totalFollowers: number;
  facebook: FacebookInterface;
  instagram: InstagramInterface;
  x: XInterface;
  youtube: YoutubeInterface;
}

interface FacebookInterface {
  facebookId: number;
  fbUsername: string;
  fbFollowers: number;
  fbFollowStats: number;
  fbPageViews: number;
  fbLikes: number;
  fbViewStats: number;
  fbLikeStats: number;
}
interface InstagramInterface {
  instagramId: number;
  igUsername: string;
  igFollowers: number;
  igFollowStats: number;
  igLikes: number;
  igPageViews: string;
  igLikeStats: number;
  igViewStats: number;
}
interface XInterface {
  xId: number;
  xUsername: string;
  xFollowers: number;
  xFollowStats: number;
  xRetweets: number;
  xLikes: number;
  xRetweetStats: number;
  xLikeStats: number;
}

interface YoutubeInterface {
  youtubeId: number;
  ytUsername: string;
  ytFollowers: number;
  ytFollowStats: number;
  ytLikes: number;
  ytTotalViews: number;
  ytLikeStats: number;
  ytViewStats: number;
}

export default function Home() {
  const [data, setData] = useState<DataInterface | null>(null);
  const [dayMode, setDayMode] = useState(false);

  useEffect(() => {
    async function onload() {
      const res = await fetch(
        "https://socialdor2526-abgehcb0c4czbhat.westus3-01.azurewebsites.net/Dashboard/GetDashboard/",
      );
      const data: DataInterface = await res.json();
      setData(data);
    }
    onload();
  }, []);

  return (
    <div className={dayMode ? "bg-[hsl(0,0%,100%)] min-h-screen" : "bg-[hsl(230,17%,14%)] min-h-screen"}>
      <main>
        <header className="flex justify-between p-5">
          <div>
            <p className="font-bold text-3xl">Social Media Dashboard</p>
            <p className="text-xs text-[hsl(228,34%,66%)]">Total Followers: {data?.totalFollowers}</p>
          </div>
          <div className="flex items-end gap-3">
            Day Mode <ToggleSwitch checked={dayMode} onChange={setDayMode} />
          </div>
        </header>
        <div className="grid xl:grid-cols-4 xl:grid-rows-1 lg:grid-cols-4 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 grid-rows-8 grid-cols-1 justify-center gap-4 xl:px-40 lg:px-30 md:px-30 sm:px-10 px-5 pb-5">
            {data && <Facebook1 facebook={data?.facebook}/>}
          {data && <X1 x={data?.x} />}
            {data && <Instagram1 instagram={data?.instagram} />}
            {data && <Youtube1 youtube={data?.youtube} />}
        </div>
    <p className="text-3xl font-bold p-5">Overview - Today</p>

      </main>
    </div>
  );
}

export type {
  DataInterface,
  InstagramInterface,
  YoutubeInterface,
  XInterface,
  FacebookInterface,
};
