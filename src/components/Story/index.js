import { useEffect, useState } from 'react'
import './index.css'
import StoryPaging from './storyPaging'
const BASE_CLASS = 'ic-story'

export default function Story({ slides = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSlideClick = (slide) => {
    if (currentSlide === 0 && slide === -1) return
    if (currentSlide === slides.length - 1 && slide === 1) return
    setCurrentSlide(currentSlide + slide)
  }

  useEffect(() => {
    console.log(currentSlide)
    if (currentSlide < slides.length - 1) {
      const timer = setTimeout(() => {
        setCurrentSlide(currentSlide + 1)
      }, 9000)

      return () => clearTimeout(timer)
    }
  }, [currentSlide])

  return (
    <div className={BASE_CLASS}>
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
      </div>
      <img
        className={`${BASE_CLASS}-image`}
        src={slides[currentSlide].img}
        alt=''
      />
    </div>
  )
}
