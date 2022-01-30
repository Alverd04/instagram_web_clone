import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SharedPage from './components/SharedPage'
import HomePage from './pages/HomePage'
import StoryPage from './pages/StoryPage'

export default function RouteHandler() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route exact path='/:profile_id' element={<SharedPage />}></Route>
        <Route exact path='/stories/:story_id' element={<StoryPage />}></Route>
        <Route exact path='/messages' element={<SharedPage />}></Route>
        <Route exact path='/publish' element={<SharedPage />}></Route>
        <Route exact path='/discover' element={<SharedPage />}></Route>
        <Route exact path='/likes' element={<SharedPage />}></Route>
      </Routes>
    </Router>
  )
}
