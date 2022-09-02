import { useState } from "react";
import {
  Modal,
  Layout,
  ButtonSolution,
  ButtonNextReturn,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week01 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    firstWord: "",
    secondWord: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (!input.firstWord.length && !input.secondWord.length) {
      return setMessage("No values entered");
    }

    if (input.firstWord === input.secondWord) {
      return setMessage("Its no an anagram");
    }

    if (input.firstWord.length !== input.secondWord.length) {
      return setMessage("Its no an anagram");
    }

    const stringA = input.firstWord
      .replace(/[^\w]/g)
      .toLowerCase()
      .split("")
      .sort()
      .join();
    const stringB = input.secondWord
      .replace(/[^\w]/g)
      .toLowerCase()
      .split("")
      .sort()
      .join();

    if (!stringA && !stringB) {
      return setMessage("Its no an anagram");
    }
    return setMessage("Its an anagram");
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 01: It is an anagram?</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Medium</p>
          <p className={styles.statement__p}>
            Problem statement: Write a function that receives two words (String)
            and returns true or false (Boolean) depending on whether or not they
            are anagrams.
          </p>
          <ul className={styles.statement__ul}>
            <li>
              An Anagram consists of forming a word by rearranging ALL the
              letters of another initial word.
            </li>
            <li>It is NOT necessary to check that both words exist.</li>
            <li>Two exactly the same words are not an anagram.</li>
          </ul>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              onSubmit();
              changeModalState();
            }}
            className={styles.statement__form}
          >
            <input
              name="firstWord"
              placeholder="First word"
              onChange={onChange}
              className={styles.statement__form__input}
            ></input>
            <input
              name="secondWord"
              placeholder="Second word"
              onChange={onChange}
              className={styles.statement__form__input}
            ></input>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week00"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week02"} text={"Next"} />
        </div>
      </div>
      <Modal isOpen={showModal} closeModal={changeModalState}>
        <div className={styles.message}>{message}</div>
      </Modal>
    </Layout>
  );
};

export default Week01;
