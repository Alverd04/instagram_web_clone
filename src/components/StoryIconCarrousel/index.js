import './index.css'
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io'
import StoryIcon from '../StoryIcon'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
const BASE_CLASS = 'ic-storyIconCarrousel'

export default function StoryIconCarrousel() {
  const content = useRef()
  const handleClick = ({ scrollDirection }) => {
    if (scrollDirection === 'left') content.current.scrollLeft += 70 * 9
    if (scrollDirection === 'right') content.current.scrollLeft -= 70 * 9
  }

  const stories = [
    {
      id: 1,
      user: 'Mr.Pool',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      id: 2,
      user: 'Rihanna',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/c/c2/Rihanna_Fenty_2018.png',
      closeFriends: false,
    },
    {
      id: 3,
      user: 'The rock',
      imagePath:
        'https://media.revistagq.com/photos/610bd5ee0e579e7376b7e243/4:3/w_3000,h_2250,c_limit/the%20rock.jpg',
      closeFriends: false,
    },
    {
      id: 4,
      user: 'Charlie',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Charlie_Puth_2017_%28cropped%29.jpg/215px-Charlie_Puth_2017_%28cropped%29.jpg',
      closeFriends: true,
    },
    {
      id: 5,
      user: 'Gal_Gadot',
      imagePath:
        'https://cdn2.chicmagazine.com.mx/uploads/media/2022/01/04/gal-gadot-flequillo-trendy-temporada.jpg',
      closeFriends: true,
    },
    {
      id: 6,
      user: 'Spiderman',
      imagePath:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spider-man-manos-fotogramas-1638388698.jpg?crop=1.00xw:0.892xh;0,0&resize=1200:*',
      closeFriends: false,
    },
    {
      id: 6,
      user: 'tom_holland',
      imagePath:
        'https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/08/tom-holland-spider-man.jpg?fit=1920%2C1280&ssl=1',
      closeFriends: false,
    },
    {
      id: 6,
      user: 'zendaya',
      imagePath:
        'https://www.alohacriticon.com/wp-content/uploads/2021/02/zendaya-shake-it-up-fotos-series.jpg',
      closeFriends: false,
    },
    {
      id: 6,
      user: 'ryan_reynolds',
      imagePath:
        'https://media.gq.com/photos/58249cdda9546c3d5193215a/4:3/w_1600,h_1200,c_limit/1216-GQ-FERR02-01-Ryan-Reynolds-Deadpool-04.jpg',
      closeFriends: false,
    },
    {
      id: 6,
      user: 'easter_egg',
      imagePath:
        'https://images.twinkl.co.uk/tr/image/upload/t_illustration/illustation/easter-eggs-2.png',
      closeFriends: true,
    },
    {
      id: 6,
      user: 'ant_man',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/05/ant-man-cameo-oculto.jpg',
      closeFriends: true,
    },
  ]

  return (
    <div className={`${BASE_CLASS}`}>
      <div className={`${BASE_CLASS}-arrowLeft`}>
        <IoIosArrowDropleftCircle
          onClick={() => handleClick({ scrollDirection: 'right' })}
          size={24}
        />
      </div>
      <div className={`${BASE_CLASS}-arrowRight`}>
        <IoIosArrowDroprightCircle
          onClick={() => handleClick({ scrollDirection: 'left' })}
          size={24}
        />
      </div>
      <div ref={content} className={`${BASE_CLASS}-content`}>
        {stories.map((story, index) => (
          <Link to={`/stories/${story.id}`} key={index}>
            <div className={`${BASE_CLASS}-story`}>
              <StoryIcon story={story} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
