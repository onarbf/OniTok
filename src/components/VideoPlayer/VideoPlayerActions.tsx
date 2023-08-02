import styles from './styles.module.css'
import Heart from '../Icons/Heart'

export default function VideoPlayerActions (): JSX.Element {
  return (
        <aside className={styles.actions}>
            <div className={styles.action}>
                <Heart/>
            </div>
            <div className={styles.action}>
                <Heart/>
            </div>
            <div className={styles.action}>
                <Heart/>
            </div>

        </aside>
  )
}
