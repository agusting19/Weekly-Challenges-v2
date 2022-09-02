import { useState } from "react";
import {
  Modal,
  Layout,
  ButtonSolution,
  ButtonNextReturn,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week07 = () => {
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState({
    text: "",
    keys: [],
    values: [],
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    let words = input.text.toLowerCase().split(" ");
    words.map((word) => {
      if (input.keys.indexOf(word) === -1) {
        input.keys.push(word);
        return input.values.push(1);
      } else {
        return (input.values[input.keys.indexOf(word)] += 1);
      }
    });
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.container__title}>
          Challenge 07: Counting words
        </h2>
        <div className={styles.container__statement}>
          <p className={styles.container__statement__p}>Difficulty: Medium</p>
          <p className={styles.container__statement__p}>
            Problem statement: Create a program that counts how many times each
            word is repeated and displays the final count for all of them.
          </p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              onSubmit();
              changeModalState();
            }}
            className={styles.container__statement__form}
          >
            <input
              name="text"
              placeholder="Insert a text"
              onChange={onChange}
            />
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.container__buttons}>
          <ButtonNextReturn link={"/Challenges/week06"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week08"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.list}>
            {input.keys.map((word, index) => {
              return (
                <div key={index}>
                  {word} appears {input.values[input.keys.indexOf(word)]} times
                </div>
              );
            })}
          </div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week07;
