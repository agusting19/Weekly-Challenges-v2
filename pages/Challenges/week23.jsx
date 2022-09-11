import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const GCM = (num1, num2) => {
  for (let i = num1 - 1; i > 0; i--) {
    if (num1 % i == 0 && num2 % i == 0) {
      return i;
    }
  }
};

const Week23 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    firstNumber: "",
    secondNumber: "",
    function: "greatestCommonDivisor",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const num1 = parseInt(input.firstNumber);
    const num2 = parseInt(input.secondNumber);
    const functionToPerform = input.function;

    if (isNaN(num1) || isNaN(num2)) {
      return setMessage("Please enter number values");
    }

    if (num1 <= 1 || num2 <= 1) {
      return setMessage("Try with higher numbers :D");
    }

    let result = [];
    if (functionToPerform == "greatestCommonDivisor") {
      result = GCM(num1, num2);
      return setMessage(`The greatest common divisor is: ${result}`);
    }

    result = (num1 * num2) / GCM(num1, num2);
    return setMessage(`The least common multiple is: ${result}`);
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Challenge 23: Greatest common divider and lowest common multiple
        </h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Medium</p>
          <p className={styles.statement__p}>
            Problem statement: Create two functions, one that computes the
            greatest common divisor (GCD) and one that computes the least common
            multiple (LCM) of two integers.
          </p>
          <ul className={styles.statement__ul}>
            <li>
              You cannot use language operations that resolve it directly.
            </li>
          </ul>
          <form
            className={styles.form}
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
              changeModalState();
            }}
          >
            <div className={styles.statement__form}>
              <input
                name="firstNumber"
                placeholder="Insert first string"
                onChange={onChange}
                className={styles.input}
              />
              <select
                name="function"
                onChange={onChange}
                className={styles.select}
              >
                <option value="greatestCommonDivisor">GCD</option>
                <option value="leastCommonMultiple">LCM</option>
              </select>
              <input
                name="secondNumber"
                placeholder="Insert second string"
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week22"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week24"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week23;
