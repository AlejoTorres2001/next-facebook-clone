import { useSession } from "next-auth/react";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UserIcon,
} from "@heroicons/react/solid";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import SideBarRow from "./SideBarRow";
const SideBar = () => {
  const session = useSession();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SideBarRow
        src={session.data.user.image}
        title={session.data.user.name}
      ></SideBarRow>

      <SideBarRow Icon={UsersIcon} title={"Friends"}></SideBarRow>
      <SideBarRow Icon={UserGroupIcon} title={"Groups"}></SideBarRow>
      <SideBarRow Icon={ShoppingBagIcon} title={"Marketplace"}></SideBarRow>
      <SideBarRow Icon={DesktopComputerIcon} title={"Watch"}></SideBarRow>
      <SideBarRow Icon={CalendarIcon} title={"Events"}></SideBarRow>
      <SideBarRow Icon={ClockIcon} title={"Memories"}></SideBarRow>
      <SideBarRow Icon={ChevronDownIcon} title={"See More"}></SideBarRow>
    </div>
  );
};

export default SideBar;
