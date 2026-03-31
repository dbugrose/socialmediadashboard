"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ToggleSwitch, createTheme, ThemeProvider } from "flowbite-react";
import X1 from "./components/X1";
import X2 from "./components/X2";
import X3 from "./components/X3";
import Instagram1 from "./components/Instagram1";
import Instagram2 from "./components/Instagram2";
import Instagram3 from "./components/Instagram3";
import Youtube1 from "./components/Youtube1";
import Youtube2 from "./components/Youtube2";
import Youtube3 from "./components/Youtube3";
import Facebook1 from "./components/Facebook1";
import Facebook2 from "./components/Facebook2";
import Facebook3 from "./components/Facebook3";


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
    <div
      className={
        dayMode
          ? "bg-[hsl(0,0%,100%)] min-h-screen"
          : "bg-[hsl(230,17%,14%)] min-h-screen"
      }
    >
      <main>
        <header className="flex justify-between p-5">
          <div>
            <p className={dayMode ? "font-bold text-3xl text-[hsl(230,17%,14%)]" : "font-bold text-3xl text-[hsl(0,0%,100%)]"}>Social Media Dashboard</p>
            <p className={dayMode? "text-xs text-[hsl(228,12%,44%)]" :"text-xs text-[hsl(228,34%,66%)]"}>
              Total Followers: {data?.totalFollowers}
            </p>
          </div>
          <div className={dayMode ?"flex items-end gap-3 text-[hsl(228,12%,44%)]" :"flex items-end gap-3 text-[hsl(0,0%,100%)]"}>
            Day Mode <ToggleSwitch checked={dayMode} onChange={setDayMode} />
          </div>
        </header>
        <div className="grid xl:grid-cols-4 xl:grid-rows-1 lg:grid-cols-4 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 grid-rows-4 grid-cols-1 justify-center gap-4 xl:px-40 lg:px-30 md:px-30 sm:px-10 px-5 pb-5">
          {data && <Facebook1 facebook={data?.facebook} dayMode={dayMode} />}
          {data && <X1 x={data?.x} dayMode={dayMode} />}
          {data && <Instagram1 instagram={data?.instagram} dayMode={dayMode}  />}
          {data && <Youtube1 youtube={data?.youtube} dayMode={dayMode} />}
        </div>
        <p className={dayMode ? "text-3xl font-bold p-5 text-[hsl(230,17%,14%)]" : "text-3xl font-bold p-5 text-[hsl(0,0%,100%)]"}>Overview - Today</p>
        <div className="grid xl:grid-cols-4 xl:grid-rows-2 lg:grid-cols-4 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-4 grid-rows-8 grid-cols-1 justify-center gap-4 xl:px-40 lg:px-30 md:px-30 sm:px-10 px-5 pb-5">
          {data && <Facebook2 facebook={data?.facebook} dayMode={dayMode}  />}
          {data && <Facebook3 facebook={data?.facebook} dayMode={dayMode}  />}
          {data && <Instagram2 instagram={data?.instagram} dayMode={dayMode}  />}
          {data && <Instagram3 instagram={data?.instagram} dayMode={dayMode} />}
          {data && <X2 x={data?.x} dayMode={dayMode} />}
          {data && <X3 x={data?.x} dayMode={dayMode} />}
          {data && <Youtube2 youtube={data?.youtube} dayMode={dayMode} />}
          {data && <Youtube3 youtube={data?.youtube} dayMode={dayMode} />}
        </div>
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
