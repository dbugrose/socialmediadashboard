import React from 'react'
import { InstagramInterface } from '../page';

interface Props {
instagram: InstagramInterface;
dayMode: boolean;
}

const Instagram3 = ({instagram, dayMode}: Props) => {
  return (
    <div className={dayMode ? "h-30 bg-[hsl(227,47%,96%)] hover:bg-[hsl(232,33%,91%)] text-[hsl(228,12%,44%)] rounded-md p-5 text-center cursor-pointer" :"h-30 bg-[hsl(228,28%,20%)] hover:bg-[hsl(228,26%,27%)] text-[hsl(228,34%,66%)]  rounded-md p-5 text-center cursor-pointer"}>
      <div className="flex justify-between pb-5">
          <p className="text-sm font-bold">Profile Views</p>
          <img
            src="/assets/images/icon-instagram.svg"
            alt="facebook-icon"
            className="w-5 h-5"
          />
      </div>
      <div className="flex justify-between">
        <p className={dayMode ? 'text-3xl font-bold text-[hsl(230,17%,14%)]' : 'text-3xl font-bold text-white'}>{instagram.igPageViews}</p>
        <div className="flex items-end py-5">
        <img
            src="/assets/images/icon-up.svg"
            alt="up-icon"
            className="flex place-self-center w-2 h-1 m-1"
          />
        <p className="text-[hsl(163,72%,41%)] text-xs flex">{instagram.igViewStats}%</p>
        </div>
      </div>  
      </div>
       )
}

export default Instagram3