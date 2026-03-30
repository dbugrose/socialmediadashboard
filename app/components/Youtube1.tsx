import React from 'react'
import { YoutubeInterface } from '../page';
interface Props {
youtube: YoutubeInterface;
}
const Youtube1 = (youtube: Props) => {
  return (
    <div className='w-full h-50 bg-[hsl(228,28%,20%)] text-[hsl(228,34%,66%)] rounded-md border-t-4 border-[hsl(348,97%,39%)] p-5 text-center flex-col justify-center items-center cursor-pointer grid xl:grid-col-4 lg:grid-col-4 md:grid-col-2 md:grid-col-2 md:grid-row-2'>
    <div className='flex gap-2 text-sm pb-5'><img src="/assets/images/icon-youtube.svg" alt="youtube-icon" />{youtube.youtube.ytUsername}</div>
    <p className='text-5xl font-bold text-white'>{youtube.youtube.ytFollowers}</p>
    <p className='tracking-[3px] text-sm pb-5'>Subscribers</p>
    <div className='flex justify-center items-center text-[hsl(356,69%,56%)] text-xs'><img src="/assets/images/icon-down.svg" alt="up icon" className='w-2 h-1 m-1' /><p>{youtube.youtube.ytFollowStats} Today</p></div>
    </div>
  )
}

export default Youtube1