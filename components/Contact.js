import Image from "next/image";
import React from "react";

const Contact = ({ avatar, name }) => {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
      <Image
        src={avatar}
        width={40}
        height={40}
        objectFit="cover"
        layout="fixed"
        className="rounded-full"
        alt={name}
      ></Image>
      <p className="text-xl">{name}</p>
      <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-bounce"></div>
    </div>
  );
};

export default Contact;
