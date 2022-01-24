import './index.css'
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io'
import StoryIcon from '../StoryIcon'
import { useRef } from 'react'
const BASE_CLASS = 'ic-storyCarrousel'

export default function StoryCarrousel() {
  const content = useRef()
  const handleClick = ({ scrollDirection }) => {
    console.log(scrollDirection)
    if (scrollDirection === 'left') content.current.scrollLeft += 70 * 9
    if (scrollDirection === 'right') content.current.scrollLeft -= 70 * 9
  }

  const stories = [
    {
      user: 'Mr.Pool',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      user: 'Rihanna',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      user: 'The rock',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      user: 'Charlie Brown',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      user: 'senpai',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      user: 'animation',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      user: 'cinemaa',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      user: 'animepool',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      user: 'Mr.Pool',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      user: 'Mr.Pool',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      user: 'Mr.Pool',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      user: 'Mr.Pool',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      user: 'Mr.Pool',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      user: 'Mr.Pool',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      user: 'Mr.Pool',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      user: 'Mr.Pool',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      user: 'Mr.Pool',
      imagePath:
        'https://www.cinemascomics.com/wp-content/uploads/2020/11/deadpool-problemas-marvel-studios.jpg',
      closeFriends: true,
    },
    {
      user: 'Mr.Pool',
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
          <div key={index} className={`${BASE_CLASS}-story`}>
            <StoryIcon story={story} />
          </div>
        ))}
      </div>
    </div>
  )
}
