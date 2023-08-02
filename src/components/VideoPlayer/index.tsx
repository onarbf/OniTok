import { useRef, useState } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'
import Heart from '../Icons/Heart'
import VideoPlayerActions from './VideoPlayerActions'

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
    <video ref={videoRef} className={styles.video} autoPlay muted src={video.url} controls={false} onClick={togglePlay}/>
    <i className={playerClassName} onClick={togglePlay}/>
    <VideoPlayerActions/>
    </div>
  )
}
