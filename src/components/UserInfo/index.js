import "./index.css";
const BASE_CLASS = "ic-userInfo";

export default function UserInfo({
  iconSize,
  imagePath = "",
  userName,
  label,
  buttonTitle,
}) {
  return (
    <div className={`${BASE_CLASS}`}>
      <div className={`${BASE_CLASS}-user`}>
        <div
          className={`${BASE_CLASS}-avatar${iconSize ? `-${iconSize}` : ""}`}
        >
          <img src={imagePath} alt="avatar" />
        </div>
        <div className={`${BASE_CLASS}-info`}>
          <span className={`${BASE_CLASS}-info-userName`}>{userName}</span>
          <span className={`${BASE_CLASS}-info-name`}>{label}</span>
        </div>
      </div>
      <button>{buttonTitle}</button>
    </div>
  );
}
