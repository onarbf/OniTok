import styles from './styles.module.css'
import VideoPlayer from '../VideoPlayer'

const VIDEOS: Video[] = [{
  id: 1,
  author: 'Chucho',
  description: 'I love to dance hahahaha xd lets go party today',
  likes: 123,
  comments: 234,
  shares: 555,
  song: 'sonido original - ZAKKA',
  albumCover: 'https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-v-2774/oIAzRUManEC2CdJdCseAQaZjfBbTkABEDGg1tn.jpeg',
  url: './assets/video/lorem.mp4'
}, {
  id: 2,
  author: 'Chucho',
  description: 'I love to dance hahahaha xd lets go party today',
  likes: 123,
  comments: 234,
  shares: 555,
  song: 'sonido original - ZAKKA',
  albumCover: 'https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-v-2774/oIAzRUManEC2CdJdCseAQaZjfBbTkABEDGg1tn.jpeg',
  url: './assets/video/lorem.mp4'
}]

export default function VideoFeed (): JSX.Element {
  return (<section>
        {VIDEOS.map(video => <div className={styles.item} key={video.id}>
            <VideoPlayer video={video} />
          </div>)}
    </section>)
}
