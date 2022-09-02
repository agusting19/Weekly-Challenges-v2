import { useState } from "react";
import {
  Modal,
  Layout,
  ButtonSolution,
  ButtonNextReturn,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week02 = () => {
  const [showModal, setShowModal] = useState(false);
  const fibonacci = [...Array(50)];

  for (let i = 0; i < 50; i++) {
    if (i === 0) {
      fibonacci[i] = 0;
    } else if (i === 1) {
      fibonacci[i] = 1;
    } else {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
  }

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 02: The Fibonacci sequence</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Hard</p>
          <p className={styles.statement__p}>
            Problem statement: Write a program that prints the first 50 numbers
            of the Fibonacci sequence starting at 0.
          </p>
          <p className={styles.statement__p}>
            The Fibonacci series is made up of a succession of numbers in which
            the next one is always the sum of the previous two. 0, 1, 1, 2, 3,
            5, 8, 13...
          </p>
          <ButtonSolution handleClick={changeModalState} />
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week01"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week03"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.list}>
            {fibonacci.map((element, index) => {
              return <div key={index}>{element}</div>;
            })}
          </div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week02;
