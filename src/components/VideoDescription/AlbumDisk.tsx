import styles from './styles.module.css'

interface Props {
  albumCover: Video['albumCover']
}

export default function AlbumDisk ({ albumCover }: Props): JSX.Element {
  return (
    <div className={styles.albumDisk}>
      <img className={styles.albumImage} src={albumCover}/>
    </div>
  )
}
