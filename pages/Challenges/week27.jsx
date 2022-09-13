import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week27 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    firstVector: "",
    secondVector: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const firstVector = input.firstVector.match(/-?\d*\.?\d+/g);
    const secondVector = input.secondVector.match(/-?\d*\.?\d+/g);

    if (firstVector.length == 0 || secondVector.length == 0) {
      return setMessage(
        "Please enter values in the next format [a, a2], [b, b2]"
      );
    }

    if (
      !parseInt(firstVector[0]) ||
      !parseInt(firstVector[1]) ||
      !parseInt(secondVector[0]) ||
      !parseInt(secondVector[1])
    ) {
      return setMessage(
        "Please enter values in the next format [a, a2], [b, b2]"
      );
    }

    const result =
      firstVector[0] * secondVector[0] + firstVector[1] * secondVector[1];
    if (result == 0) {
      return setMessage("The entered vectors are orthogonal");
    }

    return setMessage("The entered vectors are not orthogonal");
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 27: Orthogonal vectors</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Easy</p>
          <p className={styles.statement__p}>
            Problem statement: Create a program that determines if two vectors
            are orthogonal.
          </p>
          <ul className={styles.statement__ul}>
            <li>The two arrays must have the same length.</li>
            <li>
              Each vector could be represented as an array. Example: [1, -2].
            </li>
          </ul>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
              changeModalState();
            }}
          >
            <div className={styles.statement__form}>
              <input
                name="firstVector"
                placeholder="Insert first vector"
                onChange={onChange}
                className={styles.input}
              />
              <input
                name="secondVector"
                placeholder="Insert second vector"
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week26"} text={"Back"} />
          <ButtonNextReturn link={"/"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week27;
