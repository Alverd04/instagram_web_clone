import "./index.css";
import SharedPage from "../../components/SharedPage";
import SideBar from "../../components/SideBar";
import StoryCarrousel from "../../components/StoryCarrousel";
const BASE_CLASS = "ic-homePage";

export default function HomePage() {
  return (
    <SharedPage>
      <div className={BASE_CLASS}>
        <div className={`${BASE_CLASS}-content`}>
          <div className={`${BASE_CLASS}-feed`}>
            <div className={`${BASE_CLASS}-storiesContainer`}>
              <StoryCarrousel />
              <div className={`${BASE_CLASS}-feedPosts`}></div>
            </div>
          </div>
          <div className={`${BASE_CLASS}-sideBarContainer`}>
            <SideBar />
          </div>
        </div>
      </div>
    </SharedPage>
  );
}
