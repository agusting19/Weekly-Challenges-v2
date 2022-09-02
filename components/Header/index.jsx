import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__burger}>
        <div className={styles.header__burger__bar}></div>
        <div className={styles.header__burger__bar}></div>
        <div className={styles.header__burger__bar}></div>
      </div>
      <h1 className={styles.header__title}>
        <Link href="/">Weekly Challenges</Link>
      </h1>
    </header>
  );
};

export default Header;
