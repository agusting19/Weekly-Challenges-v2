import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Weekly Challenges</title>
        <meta name="description" content="Weekly challenges" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
