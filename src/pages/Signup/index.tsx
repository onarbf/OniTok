import { useState } from 'react'
import styles from './styles.module.css'
import { createUser } from '../../services'

export default function Signup (): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeated, setPasswordRepeated] = useState('')

  const handleSubmit = (): void => {
    createUser({ email, password, passwordRepeated })
      .then((res) => {
        console.log(res, 'user created successfully')
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
