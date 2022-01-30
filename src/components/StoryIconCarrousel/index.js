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
      closeFriends: true,
    },
    {
      id: 3,
      user: 'The rock',
      imagePath:
        'https://media.revistagq.com/photos/610bd5ee0e579e7376b7e243/4:3/w_3000,h_2250,c_limit/the%20rock.jpg',
      closeFriends: true,
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
      closeFriends: true,
    },
    {
      id: 6,
      user: 'tom_holland',
      imagePath:
        'https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/08/tom-holland-spider-man.jpg?fit=1920%2C1280&ssl=1',
      closeFriends: true,
    },
    {
      id: 6,
      user: 'zendaya',
      imagePath:
        'https://es.web.img3.acsta.net/pictures/19/12/26/23/19/0993801.jpg',
      closeFriends: true,
    },
    {
      id: 6,
      user: 'ryan_reynolds',
      imagePath:
        'https://media.gq.com/photos/58249cdda9546c3d5193215a/4:3/w_1600,h_1200,c_limit/1216-GQ-FERR02-01-Ryan-Reynolds-Deadpool-04.jpg',
      closeFriends: true,
    },
    {
      id: 6,
      user: 'easter_egg',
      imagePath:
        'data:image/jpeg;base64,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',
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
