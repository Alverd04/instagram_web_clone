import './index.css'
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io'
import StoryIcon from '../StoryIcon'
const BASE_CLASS = 'ic-storyCarrousel'

export default function StoryCarrousel() {
  const stories = [
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
        <IoIosArrowDropleftCircle size={24} />
      </div>
      <div className={`${BASE_CLASS}-arrowRight`}>
        <IoIosArrowDroprightCircle size={24} />
      </div>
      {stories.map((story, index) => (
        <div key={index} className={`${BASE_CLASS}-story`}>
          <StoryIcon story={story} />
        </div>
      ))}
    </div>
  )
}
