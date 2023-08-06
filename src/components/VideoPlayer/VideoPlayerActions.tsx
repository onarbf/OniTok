import styles from './styles.module.css'
import Heart from '../Icons/Heart'
import Comment from '../Icons/Comment'
import Share from '../Icons/Share'
import Plus from '../Icons/Plus'
import { createUser } from '../../services'

interface Props {
  likes: Video['likes']
  comments: Video['comments']
  shares: Video['shares']
  avatar: User['avatar']

}

export default function VideoPlayerActions ({ likes = 300, comments = 300, shares = 300, avatar }: Props): JSX.Element {
  const handleLike = (): void => {
    console.log('like')
    createUser().then(res => console.log(res)).catch(e => console.log(e))
  }

  const handleComment = (): void => {
    alert('comment')
  }
  const handleShare = (): void => {
    alert('share')
  }

  return (
        <aside className={styles.actions}>
          {avatar && <button onClick={handleLike} className={styles.avatar}>
                <img src={avatar} />
                <span>
                  <Plus/>
                </span>

            </button>}
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
