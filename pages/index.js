import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.grid}>
        <Link href="Challenges/week00">
          <div className={styles.card}>
            <h2>Solved challenges &rarr;</h2>
            <p>Currently working on this challenges, here is my solutions</p>
          </div>
        </Link>
        <a
          href="https://retosdeprogramacion.com/semanales2022"
          target="_blank"
          rel="noreferrer nofollow"
          className={styles.card}
        >
          <h2>List of challenges &rarr;</h2>
          <p>
            Here you can see all the challenges and more exercises to work with
          </p>
        </a>
        <a
          href="https://github.com/mouredev/Weekly-Challenge-2022-Kotlin/pulls"
          target="_blank"
          rel="noreferrer nofollow"
          className={styles.card}
        >
          <h2>Solutions &rarr;</h2>
          <p>solutions uploaded by the community to this github repository</p>
        </a>
        <a
          href="https://github.com/agusting19"
          target="_blank"
          rel="noreferrer nofollow"
          className={styles.card}
        >
          <h2>Personal github &rarr;</h2>
          <p>
            It is where I upload my work and show what I am currently studying
          </p>
        </a>
      </div>
    </Layout>
  );
}
