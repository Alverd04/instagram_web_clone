import Story from '../../components/Story'
import { MOCK_STORIES_DATA } from './config'
import './index.css'

const BASE_CLASS = 'ic-storyPage'
export default function StoryPage() {
  const slides = MOCK_STORIES_DATA
  return (
    <div className={BASE_CLASS}>
      <Story slides={slides} />
    </div>
  )
}
