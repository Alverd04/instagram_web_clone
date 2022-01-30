import Story from '../../components/Story'
import { AiOutlineClose } from 'react-icons/ai'
import { MOCK_STORIES_DATA } from './config'
import './index.css'

const BASE_CLASS = 'ic-storyPage'
export default function StoryPage() {
  const slides = MOCK_STORIES_DATA

  const handleGoBack = () => {
    window.history.back()
  }

  return (
    <div className={BASE_CLASS}>
      <div className={`${BASE_CLASS}-closeButton`}>
        <AiOutlineClose onClick={handleGoBack} color='white' size={32} />
      </div>
      <Story slides={slides} />
    </div>
  )
}
