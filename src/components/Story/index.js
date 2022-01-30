import { useEffect, useState } from 'react'
import './index.css'
import StoryPaging from './storyPaging'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { AiOutlinePause } from 'react-icons/ai'
import { FiPlay } from 'react-icons/fi'
import { GoUnmute, GoMute } from 'react-icons/go'
import { BsThreeDots } from 'react-icons/bs'
import Avatar from '../Avatar'
import SearchInput from '../SearchInput'
const BASE_CLASS = 'ic-story'

export default function Story({
  slides = [],
  onPreviousStoryClick,
  onNextStoryClick,
}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const handleSlideClick = (slide) => {
    if (currentSlide === 0 && slide === -1) return
    if (currentSlide === slides.length - 1 && slide === 1) return
    setCurrentSlide(currentSlide + slide)
  }

  const renderPlayPauseIcon = () => {
    if (!isPaused)
      return (
        <AiOutlinePause
          cursor='pointer'
          size={20}
          onClick={() => setIsPaused(!isPaused)}
        />
      )
    return (
      <FiPlay
        size={20}
        cursor='pointer'
        onClick={() => setIsPaused(!isPaused)}
      />
    )
  }

  const renderMuteUnmuteIcon = () => {
    if (isMuted)
      return (
        <GoUnmute
          cursor='pointer'
          onClick={() => setIsMuted(!isMuted)}
          size={20}
        />
      )
    return (
      <GoMute cursor='pointer' size={20} onClick={() => setIsMuted(!isMuted)} />
    )
  }

  useEffect(() => {
    console.log(currentSlide)

    if (currentSlide < slides.length - 1) {
      const timer = setTimeout(() => {
        setCurrentSlide(currentSlide + 1)
      }, 9000)

      return () => clearTimeout(timer)
    }
  }, [currentSlide, slides.length, isPaused])

  return (
    <div className={BASE_CLASS}>
      <div className={`${BASE_CLASS}-prevStory`}>
        <GrPrevious size={16} color='white' onClick={onPreviousStoryClick} />
      </div>
      <div
        className={`${BASE_CLASS}-prevSlide`}
        onClick={() => handleSlideClick(-1)}
      />
      <div
        className={`${BASE_CLASS}-nextSlide`}
        onClick={() => handleSlideClick(1)}
      />
      <div className={`${BASE_CLASS}-header`}>
        <StoryPaging currentSlide={currentSlide} slides={slides} />
        <div className={`${BASE_CLASS}-header-info`}>
          <div className={`${BASE_CLASS}-header-userInfo`}>
            <Avatar image='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ryan_Reynolds_by_Gage_Skidmore_3.jpg/1200px-Ryan_Reynolds_by_Gage_Skidmore_3.jpg' />
            <span className={`${BASE_CLASS}-header-userInfo-user`}>
              Ryan reynolds
            </span>
            <span className={`${BASE_CLASS}-header-userInfo-time`}>3 h</span>
          </div>
          <div className={`${BASE_CLASS}-header-controls`}>
            {renderPlayPauseIcon()}
            {renderMuteUnmuteIcon()}
            <BsThreeDots size={20} />
          </div>
        </div>
      </div>
      <img
        className={`${BASE_CLASS}-image`}
        src={slides[currentSlide].img}
        alt=''
      />
      <div className={`${BASE_CLASS}-nextStory`}>
        <GrNext size={16} color='white' onClick={onPreviousStoryClick} />
      </div>
    </div>
  )
}
