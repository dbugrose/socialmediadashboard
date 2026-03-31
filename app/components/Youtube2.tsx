import React from 'react'
import { YoutubeInterface } from '../page';

interface Props {
youtube: YoutubeInterface;
dayMode: boolean
}

const Youtube2 = ({youtube, dayMode} : Props) => {
  return (
<div className="h-30 bg-[hsl(228,28%,20%)] text-[hsl(228,34%,66%)]  rounded-md p-5 text-center cursor-pointer">
      <div className="flex justify-between pb-5">
          <p className="text-sm font-bold">Likes</p>
          <img
            src="/assets/images/icon-youtube.svg"
            alt="youtube-icon"
            className="w-5 h-5"
          />
      </div>
      <div className="flex justify-between">
        <p className="text-3xl font-bold text-white">{youtube.ytLikes}</p>
        <div className="flex items-end py-5">
        <img
            src="/assets/images/icon-down.svg"
            alt="down-icon"
            className="flex place-self-center w-2 h-1"
          />
        <p className="text-[hsl(356,69%,56%)] text-xs flex">{youtube.ytLikeStats}%</p>
        </div>
      </div>
      </div>
        )
}

export default Youtube2