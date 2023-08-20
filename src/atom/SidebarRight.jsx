import "./css/sidebar.css";
import { Avatars } from "../components/Avatars";
import { Divider } from "../components/Divider";
import { Label } from "../components/Label";
import { Call, Message } from "iconsax-react";
import NewsSection from "./moleculs/NewsSection";

const SidebarRight = () => {
  return (
    <div className="sidebar-right">
      <div className="sidebar-right-top">
        <Label text="Top News" size="lg" />
        <NewsSection />
        <Divider />
        <NewsSection />
        <Divider />
        <NewsSection />
      </div>
      <div className="sidebar-right-top">
        <Label text="Contact" size="lg" />
        <div className="contact">
          <Avatars type="desc" desc="University of Indonesia" />
          <div className="icon-contact">
            <Call variant="Bulk" size="30px" />
            <Message variant="Bulk" size="30px" />
          </div>
        </div>
        <Divider />
        <div className="contact">
          <Avatars type="desc" desc="University of Indonesia" />
          <div className="icon-contact">
            <Call variant="Bulk" size="30px" />
            <Message variant="Bulk" size="30px" />
          </div>
        </div>
        <Divider />
        <div className="contact">
          <Avatars type="desc" desc="University of Indonesia" />
          <div className="icon-contact">
            <Call variant="Bulk" size="30px" />
            <Message variant="Bulk" size="30px" />
          </div>
        </div>
        <Divider />
        <div className="contact">
          <Avatars type="desc" desc="University of Indonesia" />
          <div className="icon-contact">
            <Call variant="Bulk" size="30px" />
            <Message variant="Bulk" size="30px" />
          </div>
        </div>
        <Divider />
        <div className="contact">
          <Avatars type="desc" desc="University of Indonesia" />
          <div className="icon-contact">
            <Call variant="Bulk" size="30px" />
            <Message variant="Bulk" size="30px" />
          </div>
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default SidebarRight;
