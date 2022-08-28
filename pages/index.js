import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ExpenseList from './expenselist.js'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend</title>
      </Head>
      <ExpenseList></ExpenseList>
    </div>
  )
}
