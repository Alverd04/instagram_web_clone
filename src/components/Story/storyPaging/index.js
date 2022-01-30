const BASE_CLASS = 'ic-storyPaging'

export default function StoryPaging({ currentSlide, slides }) {
  const classNameChecker = (index) => {
    if (index < currentSlide) return `${BASE_CLASS}-slideTimeViewed`
    if (index === currentSlide) return `${BASE_CLASS}-slideTime`
    if (index > currentSlide) return `${BASE_CLASS}-slideTimePending`
  }

  return (
    <div className={BASE_CLASS}>
      {slides.map((slide, index) => (
        <div key={index} className={`${BASE_CLASS}-slide`}>
          <div className={classNameChecker(index)}></div>
        </div>
      ))}
    </div>
  )
}
