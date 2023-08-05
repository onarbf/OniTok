import { useEffect, useState } from 'react'
import './App.css'
import VideoFeed from './components/VideoFeed'
import Signup from './pages/Signup'
import { getVideos } from './services'
import { Route } from 'wouter'
import Signin from './pages/Signin'
import UploadVideo from './pages/UploadVideo'

function App (): JSX.Element {
  const [videos, setVideos] = useState([])
  const [error, setError] = useState(false)

  useEffect((): void => {
    getVideos()
      .then(([error, videos]) => {
        setVideos(videos)
        if (error) setError(error)
      })
      .catch(e => e)
  }, [])

  if (error) return null!

  return (
    <div className="App">
      <main>
      <Route path="/"> <VideoFeed videos={videos}/> </Route>
      <Route path="/signup"><Signup/></Route>
      <Route path="/signin"><Signin/></Route>
      <Route path="/upload-video"><UploadVideo/></Route>
      </main>
    </div>
  )
}

export default App
