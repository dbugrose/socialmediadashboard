import React from 'react'
import { InstagramInterface } from '../page';

interface Props {
instagram: InstagramInterface;
}
const Instagram1 = (instagram : Props) => {
  return (
<div className="rounded-md bg-linear-to-r from-[hsl(37,97%,70%)] to-[hsl(329,70%,58%)] pt-1 cursor-pointer grid xl:grid-col-3 lg:grid-col-3 md:grid-col-1 md:grid-col-1 md:grid-row-2">
<div className=' h-49 bg-[hsl(228,28%,20%)] text-[hsl(228,34%,66%)] rounded-md p-5 flex flex-col justify-center text-center items-center cursor-pointer'>
    <div className='flex gap-2 text-sm pb-5'><img src="/assets/images/icon-instagram.svg" alt="instagram-icon" />{instagram.instagram.igUsername}</div>
    <p className='text-5xl font-bold text-white'>{instagram.instagram.igFollowers}</p>
    <p className='tracking-[3px] text-sm pb-5'>Followers</p>
    <div className='flex justify-center items-center text-[hsl(163,72%,41%)] text-xs'><img src="/assets/images/icon-up.svg" alt="up icon" className='w-2 h-1 m-1' /><p>{instagram.instagram.igFollowStats} Today</p></div>
    </div>  
    </div>
     )
}

export default Instagram1