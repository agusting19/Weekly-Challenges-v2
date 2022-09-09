import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week10 = () => {
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState({
    text: "",
  });
  const [message, setMessage] = useState("");

  //The array will count the expression in the next order
  // [ {, }, (, ), [, ] ]
  const counterArray = [0, 0, 0, 0, 0, 0];

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const textInput = input.text;

    if (
      counterArray[0] == 0 &&
      counterArray[1] == 0 &&
      counterArray[2] == 0 &&
      counterArray[3] == 0 &&
      counterArray[4] == 0 &&
      counterArray[5] == 0
    ) {
      return setMessage("The entered value is not an expression");
    }

    for (let i = 0; i < textInput.length; i++) {
      switch (textInput[i]) {
        case "{":
          counterArray[0] += 1;
          break;
        case "}":
          counterArray[1] += 1;
          break;
        case "(":
          counterArray[2] += 1;
          break;
        case ")":
          counterArray[3] += 1;
          break;
        case "[":
          counterArray[4] += 1;
          break;
        case "]":
          counterArray[5] += 1;
          break;
      }
    }

    if (
      counterArray[0] != counterArray[1] ||
      counterArray[2] != counterArray[3] ||
      counterArray[4] != counterArray[5]
    ) {
      return setMessage("Unbalanced expression");
    }

    return setMessage("Balanced expression");
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 10: Balanced expressions</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Medium</p>
          <p className={styles.statement__p}>
            Problem statement: Create a program that checks whether the
            parentheses, braces, and brackets in an expression are balanced.
            Balanced means that these delimiters open and close in order and
            correctly.
          </p>
          <ul className={styles.statement__ul}>
            <li>
              Parentheses, braces and brackets have equal priority. There is no
              one more important than another.
            </li>
            <li>Balanced expression: {"{ [ a * (c + d)] - 5 }"}</li>
            <li>Unbalanced expression: {"{ a * ( c + d ) ] - 5 }"}</li>
          </ul>
          <form
            className={styles.form}
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
              changeModalState();
            }}
          >
            <input
              type="text"
              name="text"
              placeholder="Insert a text"
              onChange={onChange}
              className={styles.input}
            />
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week09"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week11"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week10;
