import React from 'react'
import { FacebookInterface } from '../page';
interface Props {
  facebook: FacebookInterface;
  dayMode: boolean
}
const Facebook3 = ({facebook, dayMode}: Props) => {
  return (
    <div className={dayMode ? "h-30 bg-[hsl(227,47%,96%)] hover:bg-[hsl(232,33%,91%)] text-[hsl(228,12%,44%)] rounded-md p-5 text-center cursor-pointer" :"h-30 bg-[hsl(228,28%,20%)] hover:bg-[hsl(228,26%,27%)] text-[hsl(228,34%,66%)]  rounded-md p-5 text-center cursor-pointer"}>
      <div className="flex justify-between pb-5">
          <p className="text-sm font-bold">Page Views</p>
          <img
            src="/assets/images/icon-facebook.svg"
            alt="facebook-icon"
            className="w-5 h-5"
          />
      </div>
      <div className="flex justify-between">
        <p className={dayMode ? 'text-3xl font-bold text-[hsl(230,17%,14%)]' : 'text-3xl font-bold text-white'}>{facebook.fbLikes}</p>
        <div className="flex items-end py-5">
        <img
            src="/assets/images/icon-down.svg"
            alt="down-icon"
            className="flex place-self-center w-2 h-1"
          />
        <p className="text-[hsl(356,69%,56%)] text-xs flex">{facebook.fbLikeStats}%</p>
        </div>
      </div>
    </div>  )
}

export default Facebook3