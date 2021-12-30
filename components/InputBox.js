import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import {CameraIcon,VideoCameraIcon,EmojiHappyIcon} from '@heroicons/react/solid'
const InputBox = () => {
    const session = useSession()
    const sendPost = (e) => {
        e.preventDefault()

    }    
    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className='flex space-x-4 items-center p-4 '>
                <Image
                    className='rounded-full'
                    alt="input"
                    src={session.data.user.image}
                    width={40}
                    height={40}
                    layout='fixed'
                ></Image>
                <form className='flex flex-1'>
                    <input className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none' type="text" placeholder={`What´s on your mind, ${session.data.user.name}?`} />
                <button hidden type='submit' onClick={sendPost}>Submit</button>
                </form>
            </div>
            <div className='flex justify-evenly p-4 border-t '>
                <div className='input-icon'>
                    <VideoCameraIcon className='h-7 text-red-500'></VideoCameraIcon>
                    <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
                </div>

                <div className='input-icon'>
                    <CameraIcon className='h-7 text-green-400'></CameraIcon>
                    <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
                </div>
                <div className='input-icon'>
                    <EmojiHappyIcon className='h-7 text-yellow-300'></EmojiHappyIcon>
                    <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
                </div>
            </div>


        </div>
    )
}

export default InputBox
