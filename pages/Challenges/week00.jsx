import { useState } from "react";
import {
  Layout,
  Modal,
  ButtonSolution,
  ButtonNextReturn,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week00 = () => {
  const [showModal, setShowModal] = useState(false);

  let counter = 0;
  const solution = [...Array(100)].map(() => {
    counter += 1;
    const divOf3 = counter % 3 === 0;
    const divOf5 = counter % 5 === 0;

    if (divOf3 && divOf5) {
      return "Fizzbuzz";
    } else if (divOf3) {
      return "Fizz";
    } else if (divOf5) {
      return "Buzz";
    } else {
      return counter;
    }
  });

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.container__title}>
          Challenge 00: The famous FIZZ BUZZ
        </h2>
        <div className={styles.container__statement}>
          <p className={styles.container__statement__p}>Difficulty: Easy</p>
          <p className={styles.container__statement__p}>
            Problem statement: rite a program that shows the numbers from 1 to
            100 (both included and with a line break between each impression),
            substituting the following:
          </p>
          <ul className={styles.container__statement__ul}>
            <li className={styles.container__statement__li}>
              Multiples of 3 for the word fizz.
            </li>
            <li className={styles.container__statement__li}>
              Multiples of 5 for the word buzz.
            </li>
            <li className={styles.container__statement__li}>
              Multiples of 3 and 5 at the same time for the word fizzbuzz.
            </li>
          </ul>
          <ButtonSolution handleClick={changeModalState} />
        </div>
        <div className={styles.container__buttons}>
          <ButtonNextReturn link={"/"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week01"} text={"Next"} />
        </div>
      </div>
      <Modal isOpen={showModal} closeModal={changeModalState}>
        <div>
          {solution.map((element, index) => {
            return <div key={index}>{element}</div>;
          })}
        </div>
      </Modal>
    </Layout>
  );
};

export default Week00;
