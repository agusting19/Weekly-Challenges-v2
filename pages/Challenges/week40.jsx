import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week40 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    side: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (input.side == 0) {
      return setMessage("The result is 0");
    }

    if (!parseInt(input.side)) {
      return setMessage("Please input a number");
    }

    if (parseInt(input.side) === 1) {
      return setMessage("The result is 1");
    }

    let side = Math.abs(input.side);
    let triangle = [];

    for (let i = 1; i <= side; i++) {
      let arr = [];
      for (let o = 0; o < i; o++) {
        o === 0 || o === i - 1
          ? arr.push(1)
          : arr.push(triangle[i - 2][o - 1] + triangle[i - 2][o]);
      }
      triangle.push(arr);
    }

    console.log(triangle);
    return setMessage("The result is on console");
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 40: Pascal's triangle</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Medium</p>
          <p className={styles.statement__p}>
            Problem statement: Create a function that is capable of drawing the
            "Pascal's Triangle" indicating only the size of the side.
          </p>
          <p className={styles.statement__p}>
            <a
              href="https://commons.wikimedia.org/wiki/File:PascalTriangleAnimated2.gif"
              target="_blank"
            >
              Here you can quickly see how the triangle is calculated.
            </a>
          </p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
              changeModalState();
            }}
          >
            <div className={styles.statement__form}>
              <input
                name="side"
                placeholder="Insert the side of the triangle"
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link="/Challenges/week39" text="Back" />
          <ButtonNextReturn link="/" text="Next" />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week40;
