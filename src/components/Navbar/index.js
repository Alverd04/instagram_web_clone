import SearchInput from "../SearchInput";
import "./index.css";
import { MdHomeFilled } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { RiAddBoxLine } from "react-icons/ri";
import { ImCompass } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const BASE_CLASS = "ic-Navbar";

export default function Navbar() {
  return (
    <div className={BASE_CLASS}>
      <div className={`${BASE_CLASS}-content`}>
        <div className={`${BASE_CLASS}-logo`}>
          <img
            className={`${BASE_CLASS}-logo-img`}
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
            alt="ic_logo"
          />
        </div>
        <div className={`${BASE_CLASS}-searchBar`}>
          <SearchInput />
        </div>
        <div className={`${BASE_CLASS}-options`}>
          <Link to="/">
            <MdHomeFilled size={22} />
          </Link>
          <Link to="/messages">
            <FiSend size={22} />
          </Link>
          <Link to="/publish">
            <RiAddBoxLine size={22} />
          </Link>
          <Link to="/discover">
            <ImCompass size={22} />
          </Link>
          <Link to="/likes">
            {" "}
            <AiOutlineHeart size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
}
