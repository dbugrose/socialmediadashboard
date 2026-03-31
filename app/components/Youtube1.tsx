import React from 'react'
import { YoutubeInterface } from '../page';
interface Props {
youtube: YoutubeInterface;
dayMode: boolean;
}
const Youtube1 = ({youtube, dayMode}: Props) => {
  return (
        <div className={dayMode ? 'grid xl:grid-col-1 lg:grid-col-1 h-50 bg-[hsl(227,47%,96%)] text-[hsl(228,12%,44%)] rounded-md border-t-4 border-[hsl(348,97%,39%)] p-5 flex-col justify-center items-center text-center cursor-pointer' : 'grid xl:grid-col-1 lg:grid-col-1 h-50 bg-[hsl(228,28%,20%)] text-[hsl(228,34%,66%)] rounded-md border-t-4 border-[hsl(348,97%,39%)] p-5 flex-col justify-center items-center text-center cursor-pointer'}>
    <div className='flex gap-2 text-sm pb-5'><img src="/assets/images/icon-youtube.svg" alt="youtube-icon" />{youtube.ytUsername}</div>
    <p className={dayMode ? 'text-5xl font-bold text-[hsl(230,17%,14%)]' : 'text-5xl font-bold text-white'}>{youtube.ytFollowers}</p>
    <p className='tracking-[3px] text-sm pb-5'>Subscribers</p>
    <div className='flex justify-center items-center text-[hsl(356,69%,56%)] text-xs'><img src="/assets/images/icon-down.svg" alt="up icon" className='w-2 h-1 m-1' /><p>{youtube.ytFollowStats} Today</p></div>
    </div>
  )
}

export default Youtube1