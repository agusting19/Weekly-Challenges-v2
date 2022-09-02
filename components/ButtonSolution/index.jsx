import styles from "./button.module.css";

const ButtonSolution = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className={styles.button}>
      Show Solution
    </button>
  );
};

export default ButtonSolution;
