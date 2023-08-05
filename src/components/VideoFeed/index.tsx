import styles from './styles.module.css'
import VideoPlayer from '../VideoPlayer'

interface Props {
  videos: Video[]
}
export default function VideoFeed ({ videos }: Props): JSX.Element {
  return (<section>
        {videos.map(video => {
          return (<div className={styles.item} key={video.id}>
            <VideoPlayer video={video} />
          </div>)
        })}
    </section>)
}
