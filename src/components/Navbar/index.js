import SearchInput from "../SearchInput";
import "./index.css";
import { MdHomeFilled } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { RiAddBoxLine } from "react-icons/ri";
import { TiCompass } from "react-icons/ti";
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
            <TiCompass size={27} />
          </Link>
          <Link to="/likes">
            {" "}
            <AiOutlineHeart size={22} />
          </Link>
          <div className={`${BASE_CLASS}-avatar`}>
            <img
              src="https://cdnnmundo1.img.sputniknews.com/img/07e5/09/13/1116212032_0:0:1300:975_1920x0_80_0_0_a523efb8da64e8c4064a6df5702a4a88.png"
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
