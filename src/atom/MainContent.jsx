import "./css/maincontent.css";
import { Avatars } from "../components/Avatars";
import { MenuNavigation } from "../components/MenuNavigation";
import { Divider } from "../components/Divider";
import { Comment } from "../components/Comment";

import {
  Bookmark,
  GalleryAdd,
  MessageText,
  Send,
  Share,
  Star1,
} from "iconsax-react";
import { Image } from "../components/Image";

const MainContent = () => {
  return (
    <div className="maincontent">
      <div className="create-content">
        <div className="create-contents">
          <Avatars type="nodesc" label="" />
          <input
            className="create-input"
            type="text"
            placeholder="Whats come on your mind?"
          />
        </div>
        <div className="create-contents-button">
          <MenuNavigation
            svg={<GalleryAdd size="24px" variant="Bulk" color="#FFFFFF" />}
            type="horizontal"
            text={"Photo/Video"}
            sizeFont={"md"}
          />
          <MenuNavigation
            svg={<Send size="24px" variant="Bulk" color="#FFFFFF" />}
            type="horizontal"
            text={"Photo/Video"}
            sizeFont={"md"}
          />
        </div>
      </div>
      <div className="post">
        <Avatars desc="5h ago" />

        <label className="post-hastag">#Hastag #Hastag #Hastag</label>
        <p>
          Penjelasan yang sangat mantap sekali dari sini dan sangat mantap dari
          siru ayeyeyeye apapaun minumananya makanan nya tetap cap kaki badk
          cuaks laladsladjsakldjsakldjadnsa djsakllodsahjdkasd dsajdklasjdi
          sjadhkaj djashk dksa iieo iofrejg oprtihgwf iuqwdgqu ksdljlkfdds
          ndksaohyie{" "}
        </p>
        <Image
          size="lg"
          link="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        />
        <div className="post-button">
          <MenuNavigation
            svg={<Star1 size="24px" variant="Linear" color="#FFFFFF" />}
            type="horizontal"
            text={"Like"}
            sizeFont={"md"}
          />
          <MenuNavigation
            svg={<MessageText size="24px" variant="Linear" color="#FFFFFF" />}
            type="horizontal"
            text={"Comments"}
            sizeFont={"md"}
          />
          <MenuNavigation
            svg={<Share size="24px" variant="Linear" color="#FFFFFF" />}
            type="horizontal"
            text={"Share"}
            sizeFont={"md"}
          />
          <MenuNavigation
            svg={<Bookmark size="24px" variant="Linear" color="#FFFFFF" />}
            type="horizontal"
            text={"Bookmarks"}
            sizeFont={"md"}
          />
        </div>
        <Divider />
        <Comment />
      </div>
    </div>
  );
};

export default MainContent;
