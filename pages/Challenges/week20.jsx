import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week20 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    firstValue: "",
    secondValue: "",
    timeOut: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const num1 = input.firstValue;
    const num2 = input.secondValue;
    const time = input.timeOut;

    if (!num1 || !num2 || !time) {
      setMessage("Complete all the inputs");
      return changeModalState();
    }

    if (isNaN(num1) || isNaN(num2) || isNaN(time)) {
      setMessage("Only numbers accepted");
      return changeModalState();
    }

    if (time > 60) {
      setMessage("Would you wait more than a minute?");
      return changeModalState();
    }

    setTimeout(changeModalState, time * 1000);

    return setMessage(`${num1} + ${num2} = ${num1 + num2}`);
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 20: Stopping time</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Medium</p>
          <p className={styles.statement__p}>
            Problem statement: Create a function that adds 2 numbers and returns
            their result past a few seconds.
          </p>
          <ul className={styles.statement__ul}>
            <li>
              You will receive by parameters the 2 numbers to add and the
              seconds it should take to finish its execution.
            </li>
          </ul>
          <form
            className={styles.form}
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            <div className={styles.statement__form}>
              <input
                name="firstValue"
                placeholder="Insert first value"
                onChange={onChange}
                className={styles.input}
              />
              <input
                name="secondValue"
                placeholder="Insert second value"
                onChange={onChange}
                className={styles.input}
              />
              <input
                name="timeOut"
                placeholder="Insert timeout (in seconds)"
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week19"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week21"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week20;
