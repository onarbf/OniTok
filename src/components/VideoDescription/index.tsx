import AlbumDisk from './AlbumDisk'
import SongTicker from './SongTicker'
import styles from './styles.module.css'
interface Props {
  author: Video['author']
  description: Video['description']
  song: Video['song']
  albumCover: Video['albumCover']
}
export default function VideoDescription ({ author, description, song, albumCover }: Props): JSX.Element {
  return (<footer className={styles.footer}>
    <div className={styles.textWrapper}>
    <h5>@{author}</h5>
    <p>{description}</p>
    <SongTicker song={song}/>
    </div>
    <div>
        <AlbumDisk albumCover={albumCover}/>
    </div>
    </footer>)
}
