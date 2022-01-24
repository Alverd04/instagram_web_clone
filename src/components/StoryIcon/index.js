import { useState } from 'react'
import './index.css'

const BASE_CLASS = 'ic-storyIcon'

export default function StoryIcon({ story = {} }) {
  const [viewed, setViewed] = useState(false)
  const { user, imagePath, closeFriends } = story
  const borderColor = closeFriends ? 'green' : 'red'

  return (
    <div className={`${BASE_CLASS}`}>
      <div
        style={{ border: `3px solid ${borderColor}` }}
        className={`${BASE_CLASS}-image`}
      >
        <img src={imagePath} alt='' />
      </div>
      <span className={`${BASE_CLASS}-label`}>{user}</span>
    </div>
  )
}
