import styles from './styles.module.css'
import Marquee from 'react-fast-marquee'

interface Props {
  song: Video['song']
}

export default function SongTicker ({ song }: Props): JSX.Element {
  return (
        <div className={styles.songTicker}>
            <div className={styles.musicIcon} />
            <Marquee gradient={false} speed={100}>{song}</Marquee>
        </div>)
}
