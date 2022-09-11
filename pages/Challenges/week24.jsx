import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week24 = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    const array = [];
    console.log("With a For loop");
    for (let i = 1; i <= 100; i++) {
      console.log(i);
      array.push(i);
    }

    console.log("With a While loop");
    let j = 1;
    while (j <= 100) {
      console.log(j);
      j++;
    }

    console.log("With Arrays:");
    console.log("forEach method");
    array.forEach((element) => console.log(element));

    console.log("map method");
    array.map((element) => console.log(element));
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 24: Iteration master</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Easy</p>
          <p className={styles.statement__p}>
            Problem statement: I want to count from 1 to 100 one by one
            (printing each one). In how many ways are you able to do it? Create
            the code for each of them.
          </p>
          <ButtonSolution
            handleClick={() => {
              handleSubmit();
              changeModalState();
            }}
          />
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week23"} text={"Back"} />
          <ButtonNextReturn link={"/"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>
            The result is on your console jeje
          </div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week24;
