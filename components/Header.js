import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* left */}
      <div className="flex items-center">
        <Image
          src="http://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
          alt="logo"
        ></Image>
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2 hover:cursor-pointer hover:bg-gray-200">
          <SearchIcon className="h-6 text-gray-600"></SearchIcon>
          <input type="text" placeholder="Search Facebook" className="hidden md:inline-flex  ml-2 items-center bg-transparent outline-none placeholder-gray-500" />
        </div>
      </div>
      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active={true} Icon={HomeIcon}></HeaderIcon>
          <HeaderIcon  Icon={FlagIcon}></HeaderIcon>
          <HeaderIcon Icon={PlayIcon}></HeaderIcon>
          <HeaderIcon Icon={ShoppingCartIcon}></HeaderIcon>
          <HeaderIcon Icon={UserGroupIcon}></HeaderIcon>
        </div>
      </div>
      {/* right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Profile pic */}
        <p className="whitespace-nowrap font-semibold pr-2 pl-3 ">Alejo Torres</p>
        <ViewGridIcon className="icon"></ViewGridIcon>
        <ChatIcon className="icon"></ChatIcon>
        <BellIcon className="icon"></BellIcon>
        <ChevronDownIcon className="icon"></ChevronDownIcon>
      </div>
    </div>
  );
};

export default Header;
