import React from 'react'
import { FacebookInterface } from '../page';

interface Props {
facebook: FacebookInterface;
}

const Facebook1 = (facebook: Props) => {
  return (
    <div className='grid xl:grid-col-1 lg:grid-col-1 h-50 bg-[hsl(228,28%,20%)] text-[hsl(228,34%,66%)] rounded-md border-t-4 border-[hsl(208,92%,53%)] p-5 flex-col justify-center items-center text-center cursor-pointer'>
    <div className='flex gap-2 text-sm pb-5'><img src="/assets/images/icon-facebook.svg" alt="facebook-icon" />{facebook.facebook.fbUsername}</div>
    <p className='text-5xl font-bold text-white'>{facebook.facebook.fbFollowers}</p>
    <p className='tracking-[3px] text-sm pb-5'>Followers</p>
    <div className='flex justify-center items-center text-[hsl(163,72%,41%)] text-xs'><img src="/assets/images/icon-up.svg" alt="up icon" className='w-2 h-1 m-1' /><p>{facebook.facebook.fbFollowStats} Today</p></div>
    </div>
  )
}

export default Facebook1