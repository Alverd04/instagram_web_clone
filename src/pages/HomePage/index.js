import "./index.css";
import SharedPage from "../../components/SharedPage";
import SideBar from "../../components/SideBar";
const BASE_CLASS = "ic-homePage";

export default function HomePage() {
  return (
    <SharedPage>
      <div className={BASE_CLASS}>
        <div className={`${BASE_CLASS}-content`}>
          <div className={`${BASE_CLASS}-feed`}>
            {/* <StoryContainer />
            <FeedContainer /> */}
          </div>
          <div className={`${BASE_CLASS}-sideBarContainer`}>
            <SideBar />
          </div>
        </div>
      </div>
    </SharedPage>
  );
}
