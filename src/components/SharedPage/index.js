import Navbar from "../Navbar";

export default function SharedPage({ children }) {
  return (
    <div className="ic-sharedPage">
      <Navbar />
      {children}
    </div>
  );
}
