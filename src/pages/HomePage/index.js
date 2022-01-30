import './index.css'
import SharedPage from '../../components/SharedPage'
import SideBar from '../../components/SideBar'
import StoryCarrousel from '../../components/StoryIconCarrousel'
import FeedPost from '../../components/FeedPost'
const BASE_CLASS = 'ic-homePage'

export default function HomePage() {
  return (
    <SharedPage>
      <div className={BASE_CLASS}>
        <div className={`${BASE_CLASS}-content`}>
          <div className={`${BASE_CLASS}-feed`}>
            <div className={`${BASE_CLASS}-storiesContainer`}>
              <StoryCarrousel />
            </div>
            <div className={`${BASE_CLASS}-feedPosts`}>
              <FeedPost
                imageUrl='https://images3.alphacoders.com/678/thumb-1920-678085.jpg'
                user='deadpool'
                userImagePath='https://i.pinimg.com/originals/04/ba/ff/04baff06036cffda0ab67e46043d84fc.jpg'
                imageCaption="I'm a super hero"
              />
              <FeedPost
                imageUrl='https://wallpapercave.com/wp/wp4589695.jpg'
                user='therock'
                userImagePath='https://media.istockphoto.com/photos/rock-on-white-background-picture-id683967128'
                imageCaption="I'm... bold"
              />
              <FeedPost
                imageUrl='https://fondosmil.com/fondo/55467.jpg'
                user='gal_gadot'
                userImagePath='https://as01.epimg.net/meristation/imagenes/2021/10/20/noticias/1634729353_767582_1634729390_noticia_normal.jpg'
                imageCaption='Wonder woman is underrated :3'
              />
            </div>
          </div>
          <div className={`${BASE_CLASS}-sideBarContainer`}>
            <SideBar />
          </div>
        </div>
      </div>
    </SharedPage>
  )
}
