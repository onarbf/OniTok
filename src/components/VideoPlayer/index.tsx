import { useRef } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'
import VideoPlayerActions from './VideoPlayerActions'
import VideoDescription from '../VideoDescription'
import useIntersectionVideoPlayer from '../../hooks/useIntersectionVideoPlayer'

interface Props {
  video: Video
}

export default function VideoPlayer ({ video }: Props): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null!)
  const { playing, handlePlay } = useIntersectionVideoPlayer({ videoRef })

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing
  })
  return (

    <div className={styles.wrapper}>
      <video ref={videoRef} className={styles.video} autoPlay muted src={video.src} controls={false} onClick={handlePlay}/>
      <i className={playerClassName} onClick={handlePlay}/>
      <VideoPlayerActions likes={video.likes} comments={video.comments} shares={video.shares} avatar={''}/>
      <VideoDescription username={'Pleistoceno'} description={video.description} song={video.songTitle} albumCover={video.albumCover}/>
    </div>
  )
}
