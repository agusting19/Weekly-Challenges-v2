import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const binaryToDecimal = (binary) => {
  let result = 0;

  for (let i = 0; i < binary.length; i++) {
    if (binary[binary.length - 1 - i] == 1) {
      result += 1 * (2 ** i);
    }
  }

  return result;
};

const Week38 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    binary: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!input.binary) {
      return setMessage("Please enter a binary number");
    }

    return setMessage(`The result is ${binaryToDecimal(input.binary)}`);
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 38: Binary to decimal</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Medium</p>
          <p className={styles.statement__p}>
            Problem statement: Create a program is responsible for transforming
            a binary number to decimal without using the language&apos;s own
            functions that do it directly.
          </p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
              changeModalState();
            }}
          >
            <div className={styles.statement__form}>
              <input
                name="binary"
                placeholder="Insert a binary number"
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link="/Challenges/week37" text="Back" />
          <ButtonNextReturn link="/Challenges/week39" text="Next" />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week38;
