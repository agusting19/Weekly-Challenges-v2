import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week11 = () => {
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState({
    firstString: "",
    secondString: "",
  });
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const firstInput = input.firstString;
    const secondInput = input.secondString;
    let firstOutput = "";
    let secondOutput = "";

    for (let i = 0; i < firstInput.length; i++) {
      if (secondInput.indexOf(firstInput[i]) == -1) {
        firstOutput += firstInput.charAt(i);
      }
    }

    for (let i = 0; i < secondInput.length; i++) {
      if (firstInput.indexOf(secondInput[i]) == -1) {
        secondOutput += secondInput.charAt(i);
      }
    }

    setMessage(`First output: ${firstOutput}, second output: ${secondOutput}`);
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 11: Deleting characters</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Easy</p>
          <p className={styles.statement__p}>
            Problem statement: Create a function that receives two strings as
            parameters (str1, str2) and prints another two strings as output
            (out1, out2).
          </p>
          <ul className={styles.statement__ul}>
            <li>
              out1 will contain all characters present in str1 but NOT present
              in str2.
            </li>
            <li>
              out2 will contain all characters present in str2 but NOT present
              in str1.
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
                name="firstString"
                placeholder="First string"
                onChange={onChange}
                className={styles.input}
              ></input>
              <input
                name="secondString"
                placeholder="Second string"
                onChange={onChange}
                className={styles.input}
              ></input>
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week10"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week12"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week11;
