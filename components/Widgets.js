import React from "react";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Contact from "./Contact";

const Widgets = () => {
  const contacts = [
    {
      name: "Jeff Besos",
      src: "https://links.papareact.com/f0p",
    },
    {
      name: "Elon Musk",
      src: "https://links.papareact.com/kxk",
    },
    {
      name: "Bill Gates",
      src: "https://links.papareact.com/zvy",
    },
    {
      name: "Mark Zuckerberg",
      src: "https://links.papareact.com/snf",
    },
    {
      name: "Harry Potter",
      src: "https://links.papareact.com/d0c",
    },
    {
      name: "The Queen",
      src: "https://links.papareact.com/6gg",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5 ">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6"></VideoCameraIcon>
          <SearchIcon className="h-6"></SearchIcon>
          <DotsHorizontalIcon className="h-6"></DotsHorizontalIcon>
        </div>
      </div>
      {contacts.map((contact, i) => {
        return (
          <Contact key={i} name={contact.name} avatar={contact.src}></Contact>
        );
      })}
    </div>
  );
};

export default Widgets;
