import styles from "./button.module.css";
import Link from "next/link";

const ButtonNextReturn = ({ link, text }) => {
  return (
    <Link href={link}>
      <button className={styles.button}>{text}</button>
    </Link>
  );
};

export default ButtonNextReturn;
