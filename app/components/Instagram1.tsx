import React from "react";
import { InstagramInterface } from "../page";

interface Props {
  instagram: InstagramInterface;
  dayMode: boolean;
}
const Instagram1 = ({ instagram, dayMode }: Props) => {
  return (
    <div className="rounded-md bg-linear-to-r from-[hsl(37,97%,70%)] to-[hsl(329,70%,58%)] pt-1 cursor-pointer">
    <div className={dayMode ? 'h-49 bg-[hsl(227,47%,96%)] text-[hsl(228,12%,44%)] grid rounded-md p-5 flex-col justify-center items-center text-center cursor-pointer' : 'grid h-49 bg-[hsl(228,28%,20%)] text-[hsl(228,34%,66%)] rounded-md p-5 flex-col justify-center items-center text-center cursor-pointer'}>
        <div className="flex gap-2 text-sm pb-5 text-center">
          <img src="/assets/images/icon-instagram.svg" alt="instagram-icon" />
          {instagram.igUsername}
        </div>
        <p className={dayMode ? 'text-5xl font-bold text-[hsl(230,17%,14%)]' : 'text-5xl font-bold text-white'}>{instagram.igFollowers}</p>
        <p className="tracking-[3px] text-sm pb-5">Followers</p>
        <div className="flex justify-center items-center text-[hsl(163,72%,41%)] text-xs">
          <img
            src="/assets/images/icon-up.svg"
            alt="up icon"
            className="w-2 h-1 m-1"
          />
          <p>{instagram.igFollowStats} Today</p>
        </div>
      </div>
    </div>
  );
};

export default Instagram1;
