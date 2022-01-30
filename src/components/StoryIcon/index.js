/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './index.css'

const BASE_CLASS = 'ic-storyIcon'

export default function StoryIcon({ story = {} }) {
  const [viewed, setViewed] = useState(false)
  const { user, imagePath, closeFriends } = story

  const isBestFriendClass = () => {
    return closeFriends ? `${BASE_CLASS}-image-bf` : `${BASE_CLASS}-image`
  }

  return (
    <div className={`${BASE_CLASS}`}>
      <div className={isBestFriendClass()}>
        <img src={imagePath} alt='' />
      </div>
      <span className={`${BASE_CLASS}-label`}>{user}</span>
    </div>
  )
}
