import "./css/sidebar.css";
import { Avatars } from "../components/Avatars";
import { MenuNavigation } from "../components/MenuNavigation";
import UserIcon from "../assets/User.svg";
import {
  ArchiveTick,
  Calendar,
  CallReceived,
  Messages3,
  People,
  Send,
  Setting2,
  TagUser,
  UserSearch,
} from "iconsax-react";

const SidebarLeft = () => {
  return (
    <div className="sidebar">
      <Avatars desc={""} label="Asep User" img={UserIcon} size="sm" />
      <MenuNavigation
        svg={<Send size="40px" variant="Bulk" color="#FFFFFF" />}
        type="horizontal"
        text={"Create Post"}
        sizeFont={"md"}
      />
      <MenuNavigation
        svg={<People size="40px" variant="Bulk" color="#FFFFFF" />}
        type="horizontal"
        text={"Groups"}
        sizeFont={"md"}
      />
      <MenuNavigation
        svg={<Messages3 size="40px" variant="Bulk" color="#FFFFFF" />}
        type="horizontal"
        text={"Chat"}
        sizeFont={"md"}
      />
      <MenuNavigation
        svg={<UserSearch size="40px" variant="Bulk" color="#FFFFFF" />}
        type="horizontal"
        text={"Networking"}
        sizeFont={"md"}
      />
      <MenuNavigation
        svg={<Calendar size="40px" variant="Bulk" color="#FFFFFF" />}
        type="horizontal"
        text={"Calendar"}
        sizeFont={"md"}
      />
      <MenuNavigation
        svg={<TagUser size="40px" variant="Bulk" color="#FFFFFF" />}
        type="horizontal"
        text={"Contatcs"}
        sizeFont={"md"}
      />
      <MenuNavigation
        svg={<CallReceived size="40px" variant="Bulk" color="#FFFFFF" />}
        type="horizontal"
        text={"Call History"}
        sizeFont={"md"}
      />
      <MenuNavigation
        svg={<ArchiveTick size="40px" variant="Bulk" color="#FFFFFF" />}
        type="horizontal"
        text={"Bookmarks"}
        sizeFont={"md"}
      />
      <MenuNavigation
        svg={<Setting2 size="40px" variant="Bulk" color="#FFFFFF" />}
        type="horizontal"
        text={"Settings"}
        sizeFont={"md"}
      />
    </div>
  );
};

export default SidebarLeft;
