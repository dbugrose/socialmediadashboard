import React from 'react'
import { XInterface } from '../page';

interface Props {
x: XInterface;
dayMode: boolean;
}

const X1 = ({x, dayMode }: Props) => {
  return (
    <div className={dayMode ? 'grid xl:grid-col-1 lg:grid-col-1 h-50 bg-[hsl(227,47%,96%)] hover:bg-[hsl(232,33%,91%)] text-[hsl(228,12%,44%)] rounded-md border-t-4 border-[hsl(203,89%,53%)] p-5 flex-col justify-center items-center text-center cursor-pointer' : 'grid xl:grid-col-1 lg:grid-col-1 h-50 bg-[hsl(228,28%,20%)] hover:bg-[hsl(228,26%,27%)] text-[hsl(228,34%,66%)] rounded-md border-t-4 border-[hsl(203,89%,53%)] p-5 flex-col justify-center items-center text-center cursor-pointer'}>
    <div className='flex gap-2 text-sm pb-5'><img src="/assets/images/icon-twitter.svg" alt="twitter-icon" />{x.xUsername}</div>
    <p className={dayMode ? 'text-5xl font-bold text-[hsl(230,17%,14%)]' : 'text-5xl font-bold text-white'}>{x.xFollowers}</p>
    <p className='tracking-[3px] text-sm pb-5'>FOLLOWERS</p>
    <div className='flex justify-center items-center text-[hsl(163,72%,41%)] text-xs'><img src="/assets/images/icon-up.svg" alt="up icon" className='w-2 h-1 m-1' /><p>{x.xFollowStats} Today</p></div>
    </div> 
    )
}

export default X1