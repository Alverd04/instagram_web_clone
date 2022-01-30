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
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      id: 3,
      user: 'The rock',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      id: 4,
      user: 'Charlie',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      id: 5,
      user: 'Mr.Pool',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      id: 6,
      user: 'Rihanna',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      id: 6,
      user: 'Rihanna',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      id: 6,
      user: 'Rihanna',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      id: 6,
      user: 'Rihanna',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      id: 6,
      user: 'Rihanna',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      id: 6,
      user: 'Rihanna',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      id: 6,
      user: 'Rihanna',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      id: 6,
      user: 'Rihanna',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
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
