import { useState } from 'react'
import styles from './styles.module.css'
import { createProfile, createUser, updateUser } from '../../services'

export default function Signup (): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeated, setPasswordRepeated] = useState('')

  const handleSubmit = (): void => {
    createUser({ email, password, passwordRepeated })
      .then(async (res) => {
        const [error, data] = res
        const user = data.user
        console.log(res, 'user created successfully')
        createProfile({ user_id: user.id, email: user.email }).then(async (res) => {
          const [error, data] = res
          const { profile } = data
          await updateUser({ email, profile_id: profile.id })
        })
      })
      .catch(err => err)
  }
  return (<section className={styles.wrapper}>
        <div>
            <h1>Create your account</h1>
            <div className={styles.form}>
                <div className={styles.field}>
                <label>Email:</label>
                <input type="email" onChange={(e) => {
                  setEmail(e.target.value)
                }} value={email}/>
                </div>
                <div className={styles.field}>
                <label>Password:</label>
                <input type="password" onChange={(e) => {
                  setPassword(e.target.value)
                }} value={password}/>
                </div>
                <div className={styles.field}>
                <label>Repeat your password:</label>
                <input type="password" onChange={(e) => {
                  setPasswordRepeated(e.target.value)
                }} value={passwordRepeated}/>
                </div>
            <div className={styles.field}>
                <button onClick={handleSubmit} className={styles.button}>Sign up</button>
            </div>
            </div>
        </div>
    </section>)
}
