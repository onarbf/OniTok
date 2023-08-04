import AlbumDisk from './AlbumDisk'
import SongTicker from './SongTicker'
import styles from './styles.module.css'
interface Props {
  username: Video['username']
  description: Video['description']
  song: Video['song']
  albumCover: Video['albumCover']
}
export default function VideoDescription ({ username, description, song, albumCover }: Props): JSX.Element {
  return (<footer className={styles.footer}>
    <div className={styles.textWrapper}>
    <h5>@{username}</h5>
    <p>{description}</p>
    <SongTicker song={song}/>
    </div>
    <div>
        <AlbumDisk albumCover={albumCover}/>
    </div>
    </footer>)
}
