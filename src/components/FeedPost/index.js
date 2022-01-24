import UserInfo from '../UserInfo'
import './index.css'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'
import { VscSmiley } from 'react-icons/vsc'

const BASE_CLASS = 'ic-feedPost'

export default function FeedPost() {
  return (
    <div className={BASE_CLASS}>
      <div className={`${BASE_CLASS}-header`}>
        <div className={`${BASE_CLASS}-userInfo`}>
          <UserInfo
            iconSize='small'
            imagePath='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ryan_Reynolds_by_Gage_Skidmore_3.jpg/1200px-Ryan_Reynolds_by_Gage_Skidmore_3.jpg'
            oneText
            userName='vancityreynolds'
          />
        </div>
        <BiDotsHorizontalRounded size={20} />
      </div>
      <div className={`${BASE_CLASS}-imageContainer`}>
        <img
          src='https://resizer.elcomercio.es/resizer/resizer.php?imagen=/deliverty/demo/resources/jpg/7/7/1292405781677.jpg&nuevoancho=950&nuevoalto=570&copyright=conCopyright&encrypt=false'
          alt=''
        />
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
            Le gusta a <b>the_rock</b> y <b>41.912 personas más</b>
          </span>
        </div>
        <div className={`${BASE_CLASS}-comments`}>
          <span>
            <b>vancityreynolds</b> Snu snu
          </span>
          <span className={`${BASE_CLASS}-comments-viewComments`}>
            ver los 3.512 comentarios
          </span>
          <span className={`${BASE_CLASS}-comments-time`}>HACE 4 MINUTOS</span>
        </div>
        <div className={`${BASE_CLASS}-comments-create`}>
          <div className={`${BASE_CLASS}-comments-createInputSection`}>
            <VscSmiley size={24} />
            <input
              className={`${BASE_CLASS}-comments-createInput`}
              type='text'
              placeholder='Añade un comentario...'
            />
          </div>
          <button disabled className={`${BASE_CLASS}-comments-createButton`}>
            Publicar
          </button>
        </div>
      </div>
    </div>
  )
}
