import React from 'react'
import { XInterface } from '../page';

interface Props {
x: XInterface;
}

const X1 = (x : Props) => {
  return (
<div className='grid grid-col-2 h-50 bg-[hsl(228,28%,20%)] text-[hsl(228,34%,66%)] rounded-md border-t-4 border-[hsl(203,89%,53%)] p-5 text-center flex-col justify-center items-center cursor-pointer'>
    <div className='flex gap-2 text-sm pb-5'><img src="/assets/images/icon-twitter.svg" alt="twitter-icon" />{x.x.xUsername}</div>
    <p className='text-5xl font-bold text-white'>{x.x.xFollowers}</p>
    <p className='tracking-[3px] text-sm pb-5'>Followers</p>
    <div className='flex justify-center items-center text-[hsl(163,72%,41%)] text-xs'><img src="/assets/images/icon-up.svg" alt="up icon" className='w-2 h-1 m-1' /><p>{x.x.xFollowStats} Today</p></div>
    </div> 
    )
}

export default X1