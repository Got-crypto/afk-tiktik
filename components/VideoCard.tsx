import { NextPage } from 'next'
import React from 'react'
import { Video } from '../types'

import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi'
import { BsFillPlayFill, BsFillPauseFill, BsPlay } from 'react-icons/bs' 
import { GoVerified } from 'react-icons/go'
import Link from 'next/link'
import Image from 'next/image'


interface IProps {
    post: Video 
}

const VideoCard: NextPage<IProps> = ({post}) => {
  return (
    <div className='flex flex-col border-b-2 border-gray-200 pb-6 '>
        <div>
            <div className='flex gap-3 p-2 cursor-pointer font-semibold rounded '>
                <div className='md:w-16 md:h-16 w-10 h-10 '>
                    <Link href='/'>
                        <>
                            <Image 
                                width={62} 
                                height={62} 
                                className='rounded-full' 
                                src={post?.postedBy.image} 
                                alt='profile photo'
                                layout='responsive'
                            />
                        </>
                    </Link>
                </div>
                <div>
                    <Link href='/'>
                        <div className='flex items-center gap-2'>
                            <p className='flex gap-2 items-center md:text-md font-bold text-primary'>
                                {post?.postedBy.userName}{` `}
                                <GoVerified className='text-blue-400 text-md' />
                            </p>
                            <p className='capitalize font-medium text-xs text-gray-500 hidden md:block '>{post?.postedBy.userName}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default VideoCard