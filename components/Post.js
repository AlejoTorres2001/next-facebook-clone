import Image from "next/image";
import React from "react";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
const Post = ({ name, message, image, postImg, email, timestamp }) => {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white  mt-5 rounded-t-2xl shadow-sm ">
        <div className="flex items-center space-x-2">
          <Image
            src={image}
            alt="usr_img"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-medium">{name}</p>
            {timestamp ? (
              <p className="text-xs text-gray-400">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ) : (
              <p className="text-xs text-gray-400">loading...</p>
            )}
          </div>
        </div>
        <p className="pt-4 ">{message}</p>
      </div>
      {postImg && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImg} alt="post_img" objectFit="cover" layout="fill" />
        </div>
      )}
      {/* Footer */}
      <div className="flex justify-between items-center rouded-b-2xl bg-white shadow-md text-gray-400 border-t rounded-bl-2xl rounded-br-2xl">
        <div className="input-icon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4"></ThumbUpIcon>
          <p className="text-xs sm:text-base">Comment</p>
        </div>

        <div className="input-icon rounded-none ">
          <ShareIcon className="h-4"></ShareIcon>
          <p className="text-xs sm:text-base">Share</p>
        </div>

        <div className="input-icon rounded-none rounded-br-2xl ">
          <ChatAltIcon className="h-4"></ChatAltIcon>
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
