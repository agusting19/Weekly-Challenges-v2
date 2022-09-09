import { useState } from "react";
import {
  Modal,
  Layout,
  ButtonSolution,
  ButtonNextReturn,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week06 = () => {
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState({
    string: "",
    reverse: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    let array = input.string.split("");
    for (let i = array.length - 1; i >= 0; i--) {
      input.reverse += array[i];
    }
  };

  const changeModalState = () => {
    setShowModal(!showModal);
    if (showModal) {
      input.reverse = "";
    }
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 06: reversing strings</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Easy</p>
          <p className={styles.statement__p}>
            Problem statement: Create a program that reverses the order of a
            text string without using language functions that do it
            automatically.
          </p>
          <p className={styles.statement__p}>
            If we passed &quot;Hello world&quot; it would return &quot;dlroW
            olleH&quot;
          </p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              onSubmit();
              changeModalState();
            }}
          >
            <input
              name="string"
              placeholder="Insert a string"
              onChange={onChange}
              className={styles.input}
            />
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week05"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week07"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>
            {input.reverse ? input.reverse : "No values entered"}
          </div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week06;
