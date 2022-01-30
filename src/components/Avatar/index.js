import './index.css'

const BASE_CLASS = 'ic-avatar'

export default function Avatar({ image, label }) {
  return (
    <div className={BASE_CLASS}>
      <div className={`${BASE_CLASS}-circle`}>
        <img className={`${BASE_CLASS}-circle-img`} src={image} alt='' />
      </div>
      {label && <span className={`${BASE_CLASS}-label`}>{label}</span>}
    </div>
  )
}
