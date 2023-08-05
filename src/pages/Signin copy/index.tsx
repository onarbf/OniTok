import { useState } from 'react'
import styles from './styles.module.css'
import { loginUser } from '../../services'

export default function Signin (): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (): void => {
    loginUser({ email, password })
      .then((res) => {
        console.log(res, 'user created successfully')
      })
      .catch(err => err)
  }
  return (<section className={styles.wrapper}>
        <div>
            <h1>Sign in to access</h1>
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
                <button onClick={handleSubmit} className={styles.button}>Sign in</button>
            </div>
            </div>
        </div>
    </section>)
}
