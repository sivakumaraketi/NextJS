import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>List Home Page</title>
    </Head>
     <h1 className={styles.title}>Welcome To THE HOME PAGE</h1>
     <Link href="/list">
     <div className={styles.btn}>List Details</div>
     </Link>
    </>
  )
}
