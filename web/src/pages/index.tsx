import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { TracksList } from '@/entites';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Spotifly</title>
        <meta
          name="description"
          content="This is a small version and clone of Spotify app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={inter.className}>Spotifly</h1>
        <TracksList />
      </main>
    </>
  );
}
