import './index.css'
const BASE_CLASS = 'ic-userInfo'

export default function UserInfo({
  iconSize,
  imagePath = '',
  userName,
  label,
  buttonTitle,
  oneText = false,
}) {
  const infoClass = oneText
    ? `${BASE_CLASS}-info-oneText`
    : `${BASE_CLASS}-info`
  return (
    <div className={`${BASE_CLASS}`}>
      <div className={`${BASE_CLASS}-user`}>
        <div
          className={`${BASE_CLASS}-avatar${iconSize ? `-${iconSize}` : ''}`}
        >
          <img src={imagePath} alt='avatar' />
        </div>
        <div className={infoClass}>
          {userName !== '' && (
            <span className={`${BASE_CLASS}-info-userName`}>{userName}</span>
          )}
          {label !== '' && (
            <span className={`${BASE_CLASS}-info-name`}>{label}</span>
          )}
        </div>
      </div>
      <button>{buttonTitle}</button>
    </div>
  )
}
