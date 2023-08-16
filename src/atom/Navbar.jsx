import "./css/navbar.css";
import LogoIcon from "../assets/Logo.svg";
import Weather from "../assets/Weather";
import { MenuNavigation } from "../components/MenuNavigation";
import {
  Element4,
  MessageFavorite,
  Messages3,
  NoteSquare,
  Notification,
  SearchNormal1,
  Simcard1,
} from "iconsax-react";

const Navbar = () => {
  return (
    <header>
      <img src={LogoIcon} alt="React Logo" />
      <nav>
        <ul>
          <li>
            <MenuNavigation
              svg={<Element4 size="40px" variant="Bulk" color="#FFFFFF" />}
              type="vertical"
              text={"Home"}
              selected={true}
            />
          </li>
          <li>
            <MenuNavigation
              svg={<NoteSquare size="40px" variant="Bulk" color="#FFFFFF" />}
              type="vertical"
              text={"Showcase"}
            />
          </li>
          <li>
            <MenuNavigation
              svg={<Simcard1 size="40px" variant="Bulk" color="#FFFFFF" />}
              type="vertical"
              text={"News"}
            />
          </li>
          <li>
            <MenuNavigation
              svg={<Messages3 size="40px" variant="Bulk" color="#FFFFFF" />}
              type="vertical"
              text={"Forums"}
            />
          </li>
          <li>
            <MenuNavigation
              svg={<SearchNormal1 size="40px" variant="Bulk" color="#FFFFFF" />}
              type="vertical"
              text={"Search"}
            />
          </li>
        </ul>
      </nav>
      <div className="right-nav">
        <button className="btn-right">
          <Weather />
        </button>
        <button className="btn-right">
          <MessageFavorite size="30px" variant="Bulk" color="#FFFFFF" />
        </button>
        <button className="btn-right">
          <Notification size="30px" variant="Bulk" color="#FFFFFF" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
