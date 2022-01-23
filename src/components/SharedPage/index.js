import "./index.css";
import Navbar from "../Navbar";

export default function SharedPage({ children }) {
  return (
    <div className="ic-sharedPage">
      <Navbar />
      <div className="ic-sharedPage-content">{children}</div>
    </div>
  );
}
