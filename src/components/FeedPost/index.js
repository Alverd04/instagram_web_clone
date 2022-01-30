import UserInfo from '../UserInfo'
import './index.css'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'
import { VscSmiley } from 'react-icons/vsc'

const BASE_CLASS = 'ic-feedPost'

export default function FeedPost({
  imageUrl,
  user,
  userImagePath,
  imageCaption,
}) {
  return (
    <div className={BASE_CLASS}>
      <div className={`${BASE_CLASS}-header`}>
        <div className={`${BASE_CLASS}-userInfo`}>
          <UserInfo
            iconSize='small'
            imagePath={userImagePath}
            oneText
            userName={user}
          />
        </div>
        <BiDotsHorizontalRounded size={20} />
      </div>
      <div className={`${BASE_CLASS}-imageContainer`}>
        <img src={imageUrl} alt='' />
      </div>
      <div className={`${BASE_CLASS}-footer`}>
        <div className={`${BASE_CLASS}-options`}>
          <div className={`${BASE_CLASS}-options-left`}>
            <AiOutlineHeart size={24} />
            <FaRegComment size={24} />
            <FiSend size={24} />
          </div>
          <BsBookmark size={24} />
        </div>
        <div className={`${BASE_CLASS}-likes`}>
          <span>
            <b>the_rock</b> and <b>41.912 people</b> liked that
          </span>
        </div>
        <div className={`${BASE_CLASS}-comments`}>
          <span>
            <b>{user}</b> {imageCaption}
          </span>
          <span className={`${BASE_CLASS}-comments-viewComments`}>
            view 3.512 comments
          </span>
          <span className={`${BASE_CLASS}-comments-time`}>4 minutes ago</span>
        </div>
        <div className={`${BASE_CLASS}-comments-create`}>
          <div className={`${BASE_CLASS}-comments-createInputSection`}>
            <VscSmiley size={24} />
            <input
              className={`${BASE_CLASS}-comments-createInput`}
              type='text'
              placeholder='Add a comment...'
            />
          </div>
          <button disabled className={`${BASE_CLASS}-comments-createButton`}>
            Publish
          </button>
        </div>
      </div>
    </div>
  )
}
