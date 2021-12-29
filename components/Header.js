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

const Header = () => {
  return (
    <div>
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
          <input type="text" placeholder="Search Facebook" className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500" />
        </div>
      </div>
      {/* center */}
      {/* right */}
    </div>
  );
};

export default Header;
