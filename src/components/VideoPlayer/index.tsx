import { useRef, useState } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'
import VideoPlayerActions from './VideoPlayerActions'
import VideoDescription from '../VideoDescription'

interface Props {
  video: Video
}

export default function VideoPlayer ({ video }: Props): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null!)
  const [playing, setPlaying] = useState(true)

  const togglePlay = (): void => {
    playing
      ? void videoRef.current.pause()
      : void videoRef.current.play()

    setPlaying(!playing)
  }

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing
  })
  return (

    <div className={styles.wrapper}>
      <video ref={videoRef} className={styles.video} autoPlay muted src={video.src} controls={false} onClick={togglePlay}/>
      <i className={playerClassName} onClick={togglePlay}/>
      <VideoPlayerActions likes={video.likes} comments={video.comments} shares={video.shares} avatar={video.user.avatar}/>
      <VideoDescription username={video.username} description={video.description} song={video.song} albumCover={video.albumCover}/>
    </div>
  )
}
