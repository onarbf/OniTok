import { useEffect, useState } from 'react'
import './App.css'
import VideoFeed from './components/VideoFeed'
import { getVideos } from './services'

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
      <VideoFeed videos={videos}/>
      </main>
    </div>
  )
}

export default App
