import styles from './styles.module.css'
import Heart from '../Icons/Heart'
import Comment from '../Icons/Comment'
import Share from '../Icons/Share'

interface Props {
  likes: Video['likes']
  comments: Video['comments']
  shares: Video['shares']

}
export default function VideoPlayerActions ({ likes = 1212, comments = 123, shares = 3123 }: Props): JSX.Element {
  const handleLike = (): void => {
    alert('like')
  }

  const handleComment = (): void => {
    alert('comment')
  }
  const handleShare = (): void => {
    alert('share')
  }

  return (
        <aside className={styles.actions}>
            <button onClick={handleLike} className={styles.action}>
                <Heart/>
                <strong>{likes}</strong>
            </button>
            <button onClick={handleComment} className={styles.action}>
                <Comment/>
                <strong>{comments}</strong>
            </button>
            <button onClick={handleShare} className={styles.action}>
                <Share/>
                <strong>{shares}</strong>
            </button>

        </aside>
  )
}
