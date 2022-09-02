import styles from "./footer.module.css";
import { FiGithub, FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__links}>
        <a
          href="https://github.com/agusting19"
          target="_blank"
          rel="noreferrer nofollow"
          className={styles.footer__links__link}
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/agustin-gomez-602511236/"
          target="_blank"
          rel="noreferrer nofollow"
          className={styles.footer__links__link}
        >
          <FaLinkedin />
        </a>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault(e);
            navigator.clipboard.writeText("agusleongomez@gmail.com");
            alert("email copied to clipboard");
          }}
          className={styles.footer__links__link}
        >
          <FiMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
