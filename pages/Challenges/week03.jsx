import { useState } from "react";
import {
  Modal,
  Layout,
  ButtonSolution,
  ButtonNextReturn,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week03 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    number: "",
  });

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (input.number === "") {
      return setMessage("No values entered");
    }

    if (input.number < 2) {
      return setMessage("This number is not a prime number");
    }

    for (let i = 2; i < input.number; i++) {
      if (input.number % i === 0) {
        return setMessage("This number is not a prime number");
      }
    }
    return setMessage("This number is a prime number");
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 03: Is it a prime number?</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Medium</p>
          <p className={styles.statement__p}>
            Problem statement: Write a program that checks if a number is prime
            or not. Done this, print the prime numbers between 1 and 100.
          </p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              onSubmit();
              changeModalState();
            }}
          >
            <input
              name="number"
              placeholder="Enter a number"
              onChange={onChange}
              className={styles.statement__form__input}
            ></input>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week02"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week04"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week03;
